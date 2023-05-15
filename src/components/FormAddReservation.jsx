import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropTypes } from 'prop-types';
import {
  useGetRoomsDetailsQuery,
  useCreateReservationMutation,
} from '../api/roomsData';
import { useCurrentUserQuery } from '../api/authLog';
import { reservationsData } from '../api/reservationsData';

const FormAddReservation = ({ roomId }) => {
  const [user, setUser] = useState({});
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const { data, error, isLoading } = useGetRoomsDetailsQuery();
  const [createReservation] = useCreateReservationMutation();
  const { data: currentUser } = useCurrentUserQuery();
  const selectedOption = document.getElementById(roomId);
  const dispatch = useDispatch();
  const [errorData, setError] = useState(null);

  const notify = () => toast.success('Reservation successfully added', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

  useEffect(() => {
    setUser(currentUser);
    if (selectedOption !== null) selectedOption.selected = true;
  }, [currentUser, selectedOption]);

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
        notify();
        dispatch(reservationsData.util.resetApiState());
      })
      .catch((error) => {
        console.error('Error creating reservation:', error);
        setError(error.data);
      });
  };

  if (!currentUser || !currentUser.username) {
    return [];
  }

  return (
    <div className="addReservationForm flex flex-col justify-center items-center h-screen">
      <p className="text-4xl text-white font-medium">RESERVE A ROOM</p>
      <p className="border-b border-white opacity-40 m-6" />
      <p className="reservationSlogan text-white">
        There are different rooms from various locations available. Choose from
        the options and reserve a room now by filling the form below.
      </p>
      {errorData && <div className="error">{errorData.base}</div>}
      <form
        className="flex flex-col justify-center items-center text-black"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" style={{ display: 'none' }}>
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
          className="w-[300px] bg-white border-2 border-white-500 rounded-lg h-[35px]"
        >
          <option className="text-black">Select a room...</option>
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
          className="bg-white h-[35px] rounded-lg text-lime-400 addReserveButton"
        >
          Reserve
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Flip}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

FormAddReservation.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default FormAddReservation;
