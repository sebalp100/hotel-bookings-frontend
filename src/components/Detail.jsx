import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRoomsQuery } from '../api/detail';
import './css/home.css';

function DetailRoom() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRoomsQuery(id);
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
      <span>
        {data.name}
      </span>
    </div>
  );
}

export default DetailRoom;
