import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRoomDataQuery } from '../api/detail';
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
      <span>
        {data.name}
        <img src={data.image_url} alt={data.name} />
        <p>{data.description}</p>
        <p>{data.tv}</p>
        <p>{data.reserved}</p>
        <p>{data.beds}</p>
      </span>
    </div>
  );
}

export default DetailRoom;
