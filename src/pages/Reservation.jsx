import React from 'react';
import { PropTypes } from 'prop-types';
import FormAddReservation from '../components/FormAddReservation';
import Sidebar from '../components/Sidebar';

const Reservation = ({ roomId }) => (
  <div className="mainContainer flex flex-row bg-neutral-100 h-screen width-screen overflow-hidden">
    <Sidebar />
    <FormAddReservation roomId={roomId} />
  </div>
);

Reservation.propTypes = {
  roomId: PropTypes.string.isRequired,
};

export default Reservation;
