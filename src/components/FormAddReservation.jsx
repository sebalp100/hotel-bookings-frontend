import React, { useState } from 'react';
import { useGetRoomsDetailsQuery } from '../api/roomsData';

const FormAddReservation = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();

    createRoom({
      username,
      room,
      date,
      city,
    }).then(() => {
      window.location.href = '/home';
    })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center w-[1200px] h-screen items-center">
      <form
        className="bg-neutral-50 flex flex-col justify-center items-center w-[450px] h-[650px] text-black"
        onSubmit={handleSubmit}
      >
        <label htmlFor={username}>
          <span>Userame</span>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-[300px]"
          />
        </label>
        <br />
        <select
          htmlFor={room}
          onChange={(e) => setRoom(e.target.value)}
          value={room}
        >
          <option>Select a room...</option>
          {data.map((room) => (
            <option key={room.id} value={room.id} id={room.id}>
              {' '}
              {room.name}
              {' '}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor={date}>
          <span>Date</span>
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[300px]"
          />
        </label>
        <br />
        <label htmlFor={city}>
          <span>City</span>
          <br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[300px]"
          />
        </label>
        <br />
        <button type="submit" className="bg-lime-500 w-[180px] h-[35px] rounded-lg text-white">Create Room</button>
      </form>
    </div>
  );
};

export default FormAddReservation;
