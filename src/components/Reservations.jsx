/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { FaRegWindowClose } from 'react-icons/fa';
import { useCurrentUserQuery } from '../api/authLog';
import {
  useDeleteReservationMutation,
  useGetReservationsQuery,
} from '../api/reservationsData';
import './css/reservation.css';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';

const Reservations = () => {
  const { data: currentUserData, error: userError } = useCurrentUserQuery();
  const [deleteReservation] = useDeleteReservationMutation();
  const {
    data: reservationsData,
    isLoading,
    error,
  } = useGetReservationsQuery();

  const handleDelete = (reservationId, roomName) => {
    swal({
      title: 'Are you sure?',
      text: `Once deleted, you will need to create a new reservation for "${roomName}"`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteReservation(reservationId);
        swal('Your reservation has been canceled!', {
          icon: 'success',
        });
      } else {
        swal('Your reservation is safe!');
      }
    });
  };

  if (isLoading) {
    return (
      <div className="spinnerContainer">
        <span className="loader" />
      </div>
    );
  }

  if (userError) {
    return (
      <p>
        You are not authorized to view this page. Please
        {' '}
        <Link to="/"> Log in</Link>
      </p>
    );
  }

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  if (!currentUserData || !currentUserData.id) {
    return [];
  }

  const userReservations = reservationsData.filter(
    (reservation) => reservation.user_id === currentUserData.id,
  );

  if (userReservations.length === 0) {
    return (
      <div className="bigContainer">
        <Sidebar />
        <MobileMenu />
        <p className="reservationBody noReservation">
          You have no reservations
        </p>
      </div>
    );
  }

  return (
    <div className="bigContainer">
      <Sidebar />
      <MobileMenu />
      <div className="reservationBody">
        <div className="reservationContainer">
          {userReservations.map((reservation) => (
            <div className="detailsContainer" key={reservation.id}>
              <div>
                <p>{reservation.room_name}</p>
                <p>
                  City:&nbsp;
                  {reservation.city}
                </p>
                <p>
                  Date:&nbsp;
                  {reservation.date}
                </p>
              </div>
              <button
                onClick={() => handleDelete(reservation.id, reservation.room_name)}
                disabled={isLoading}
                type="button"
                className="myButton cancel"
              >
                <FaRegWindowClose />
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
