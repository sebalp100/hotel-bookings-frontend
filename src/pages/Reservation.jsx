import React from 'react';
import FormAddReservation from '../components/FormAddReservation';
import Sidebar from '../components/Sidebar';

const Reservation = () => (
  <div className="mainContainer flex flex-row bg-neutral-100 h-screen width-screen overflow-hidden">
    <Sidebar />
    <FormAddReservation />
  </div>
);

export default Reservation;
