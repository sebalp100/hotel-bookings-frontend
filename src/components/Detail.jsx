/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { AiOutlineWifi } from 'react-icons/ai';
import { AiFillTv } from 'react-icons/ai';
import { MdHotel } from 'react-icons/md';
import { FaCog } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import { Modal, Button } from 'react-bootstrap';
import { isSameDay } from 'date-fns';
import { useGetRoomDataQuery, useCreateReservationMutation } from '../api/detail';
import { useCurrentUserQuery } from '../api/authLog';
import 'react-datepicker/dist/react-datepicker.css';
import { PropTypes } from 'prop-types';
import './css/roomDetail.css';
import './css/home.css';
import Sidebar from './Sidebar';

function DetailRoom({ onButtonReservedClick }) {
  const handleClick = (e) => {
    onButtonReservedClick(e.target.id);
  };

  const { id } = useParams();
  const { data, error, isLoading } = useGetRoomDataQuery(id);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [date, setdate] = useState(new Date());
  const [city, setCity] = useState('');
  const { data: currentUser } = useCurrentUserQuery();
  const currentUserId = currentUser;
  const [createReservation] = useCreateReservationMutation();

  const handleSave = async () => {
    console.log('City: ', city);
    console.log('Date: ', date);
    console.log(id);
    console.log(currentUserId);
    const reservationData = {
      city,
      room_name: data.name,
      room_id: data.id,
      user_id: currentUserId.id,
      date: date.toISOString(),
    };
    try {
      await createReservation(reservationData).unwrap();
      handleClose();
    } catch (err) {
      console.error('Error creating reservation:', err);
    }
  };

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

  console.log(currentUserId);

  return (
    <div className="detailContainer">
      <Sidebar />
      <img className="detailed-image" src={data.image_url} alt={data.name} />
      <div className="roomdata">
        <div className="roomtext">
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p className="ico">
            <AiOutlineWifi className="to" />
            {data.wifi}
          </p>
          <p className="ico">{data.tv}</p>
          <p className="ico">
            {' '}
            <MdHotel className="to" fontSize={24} />
            {' '}
            {data.beds}
          </p>
        </div>
        <div>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Book Reservation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="city">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <DatePicker
                selected={date}
                onChange={(date) => setdate(date)}
                inline
                todayButton="Today"
                dateFormat="MMMM d, yyyy"
                highlightDates={[new Date()].filter(
                  (date) => !isSameDay(date, new Date()),
                )}
              />
              {/* Other form inputs */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          <button type="submit" className="mybtn" onClick={handleShow}>
            <FaCog />
            Reserve
            <span className="circle-icon">
              <FiChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

DetailRoom.propTypes = {
  onButtonReservedClick: PropTypes.func.isRequired,
};

export default DetailRoom;
