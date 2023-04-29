/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { useGetRoomsDetailsQuery } from '../api/roomsData';
import './css/home.css';
import Sidebar from './Sidebar';

function Home() {
  const { data, error, isLoading } = useGetRoomsDetailsQuery();

  if (isLoading) {
    return (
      <div className="spinnerContainer">
        <span className="loader" />
      </div>
    );
  }

  const settings = {
    slidesToShow: 3,
  };

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div className="bigContainer">
      <Sidebar />
      <div className="mainContainer">
        <div className="roomsBox">
          <h1>LATEST ROOMS</h1>
          <h2>Please select a room</h2>
          <span className="separatorTop">. . . . . . . . . . . . . .</span>
          <ul className="roomContainer">
            <Carousel {...settings}>
              {data.map((room) => (
                <Link key={room.id} to={`/room/${room.id}`}>
                  <li key={room.id}>
                    <img alt="room" src={room.image_url} />
                    <h4>{room.name}</h4>
                    <span className="separator">
                      . . . . . . . . . . . . . .
                    </span>
                    <p>{room.description}</p>
                    <div className="icons">
                      <span className="iconSize">
                        <FaFacebookF />
                      </span>
                      <span className="iconSize">
                        <FaTwitter />
                      </span>
                      <span className="iconSize">
                        <FaYoutube />
                      </span>
                    </div>
                  </li>
                </Link>
              ))}
            </Carousel>
            <div className="mobileRooms">
              {data.map((room) => (
                <Link key={room.id} to={`/room/${room.id}`}>
                  <li key={room.id}>
                    <img alt="room" src={room.image_url} />
                    <h4>{room.name}</h4>
                    <span className="separator">
                      . . . . . . . . . . . . . .
                    </span>
                    <p>{room.description}</p>
                    <div className="icons">
                      <span className="iconSize">
                        <FaFacebookF />
                      </span>
                      <span className="iconSize">
                        <FaTwitter />
                      </span>
                      <span className="iconSize">
                        <FaYoutube />
                      </span>
                    </div>
                  </li>
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
