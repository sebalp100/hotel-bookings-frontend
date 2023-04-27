import React from 'react';
import { useParams } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';
import { useGetRoomDataQuery } from '../api/detail';
import { useCurrentUserQuery } from '../api/authLog';
import './css/roomDetail.css';
import './css/home.css';
import Sidebar from './Sidebar';

function DetailRoom() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRoomDataQuery(id);
  const { data: currentUserData } = useCurrentUserQuery();
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
    <div className="detailContainer">
      <Sidebar />
      <img className="detailed-image" src={data.image_url} alt={data.name} />
      <div className="roomdata">
        <div className="roomtext">
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>{data.wifi}</p>
          <p>{data.tv}</p>
          <p>{data.reserved}</p>
          <p>{data.beds}</p>
          <p>{id}</p>
          {currentUserData && <p>{currentUserData.id}</p>}
        </div>
        <div>
          <button type="submit" className="mybtn">
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
  );
}

export default DetailRoom;
