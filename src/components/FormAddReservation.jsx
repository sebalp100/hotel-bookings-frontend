import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  useGetRoomsDetailsQuery,
  useCreateReservationMutation,
} from '../api/roomsData';
import { useCurrentUserQuery } from '../api/authLog';

const FormAddReservation = ({ roomId }) => {
  const [user, setUser] = useState({});
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const { data, error, isLoading } = useGetRoomsDetailsQuery();
  const [createReservation] = useCreateReservationMutation();
  const { data: currentUser } = useCurrentUserQuery();
  const selectedOption = document.getElementById(roomId);

  useEffect(() => {
    setUser(currentUser);
    if (selectedOption !== null) selectedOption.selected = true;
  });

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
    const uid = user.id;
    createReservation({
      date,
      city,
      user_id: uid,
      room_id: room,
    })
      .unwrap()
      .then((result) => {
        console.log('Reservation created successfully:', result);
      })
      .catch((error) => {
        console.error('Error creating reservation:', error);
      });
  };

  if (!currentUser || !currentUser.username) {
    return [];
  }

  return (
    <div className="flex flex-col justify-center w-[1200px] h-[600px] items-center bg-lime-500">
      <p className="text-4xl text-white">RESERVE A ROOM</p>
      <p className="border-b border-white opacity-40 w-[900px] m-6" />
      <p className="text-white">
        There are different rooms from various locations available. Choose frm
        the options and reserve a room now by filling the form below.
      </p>
      <form
        className="bg-lime-500 flex flex-col justify-center items-center w-[450px] h-[650px] text-black"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">
          <span className="text-white">Userame</span>
          <br />
          <input
            type="text"
            value={currentUser.username || ''}
            name="username"
            readOnly
            className="w-[300px] bg-transparent border-2 border-white-500 rounded-lg h-[35px] text-white"
            required
          />
        </label>
        <br />
        <select
          htmlFor={room}
          onChange={(e) => setRoom(e.target.value)}
          value={room}
          className="w-[300px] bg-transparent border-2 border-white-500 rounded-lg h-[35px] text-white"
        >
          <option className="text-white">Select a room...</option>
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
          <span className="text-white">Date</span>
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[300px] bg-transparent border-2 border-white-500 rounded-lg h-[35px] text-white"
            required
          />
        </label>
        <br />
        <label htmlFor={city}>
          <span className="text-white">City</span>
          <br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[300px] bg-transparent border-2 border-white-500 rounded-lg h-[35px] text-white"
            required
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-white w-[180px] h-[35px] rounded-lg text-lime-400"
        >
          Reserve
        </button>
      </form>
    </div>
  );
};

FormAddReservation.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default FormAddReservation;
