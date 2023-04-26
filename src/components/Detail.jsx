import React from 'react';
import { useParams } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';
import { useGetRoomDataQuery } from '../api/detail';
import './css/roomDetail.css';
import './css/home.css';

function DetailRoom() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRoomDataQuery(id);
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
    <div className="mainContainer">
      <div className="detailContainer">
        <img className="detailed-image" src={data.image_url} alt={data.name} />
        <div className='roomdata'>
          <div>
            {data.name}
            <p>{data.description}</p>
            <p>{data.tv}</p>
            <p>{data.reserved}</p>
            <p>{data.beds}</p>
          </div>
          <div>
            <button type="submit" className="myButton">
              {' '}
              <FaCog />
              {' '}
              Reserve
              <span className="circle-icon">
                <FiChevronRight />
              </span>
              {' '}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DetailRoom;
