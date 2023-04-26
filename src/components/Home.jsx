/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { FaFacebookF, FaTwitter, FaYoutube, FaGripLines } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useGetRoomsDetailsQuery } from '../api/roomsData';
import './css/home.css';
import Sidebar from './Sidebar';

function Home() {
  const { data, error, isLoading } = useGetRoomsDetailsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div className="mainContainer flex flex-row bg-neutral-100 h-screen width-screen overflow-hidden">
      <Sidebar />
      <div>
        <h1>LATEST ROOMS</h1>
        <h2>Please select a room</h2>
        <span className="separatorTop">. . . . . . . . . . . . . .</span>
        <ul className="roomContainer">
          {data.map((room) => (
          <Link key={room.id} to={`/room/${room.id}`}>
            <li key={room.id}>
              <img alt="room" src={room.image_url} />
              <h4>{room.name}</h4>
              <span className="separator">. . . . . . . . . . . . . .</span>
              <p>{room.description}</p>
              <div className="icons">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaYoutube />
                </span>
              </div>
            </li>
          </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
