import React from 'react';
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useGetRoomDataQuery } from '../api/detail';

function RoomDetails() {
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
    <div>
      <h1>{data.name}</h1>
      <img src={data.image_url} alt={data.name} />
      <p>{data.description}</p>
      <p>{data.tv}</p>
      <p>{data.reserved}</p>
      <p>{data.beds}</p>
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
    </div>
  );
}

export default RoomDetails;
