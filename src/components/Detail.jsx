/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiChevronRight } from 'react-icons/fi';
import { AiOutlineWifi, AiFillVideoCamera } from 'react-icons/ai';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdHotel } from 'react-icons/md';
import { FaCog } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import { Modal, Button } from 'react-bootstrap';
import { isSameDay } from 'date-fns';
import {
  useGetRoomDataQuery,
  useCreateReservationMutation,
} from '../api/detail';
import { useCurrentUserQuery } from '../api/authLog';
import 'react-datepicker/dist/react-datepicker.css';
import './css/roomDetail.css';
import './css/home.css';
import Sidebar from './Sidebar';
import { reservationsData } from '../api/reservationsData';
import MobileMenu from './MobileMenu';

function DetailRoom() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRoomDataQuery(id);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [date, setdate] = useState(new Date());
  const [city, setCity] = useState('');
  const { data: currentUser } = useCurrentUserQuery();
  const currentUserId = currentUser;
  const dispatch = useDispatch();
  const [createReservation] = useCreateReservationMutation();
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
      dispatch(reservationsData.util.resetApiState());
      handleClose();
      notify();
    } catch (err) {
      console.error('Error creating reservation:', err);
      setError(err.data);
    }
  };

  if (isLoading) {
    return (
      <div className="spinnerContainer">
        <span className="loader" />
      </div>
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

  return (
    <div>
      <Sidebar />
      <MobileMenu />
      <div className="detailContainer">
        <img className="detailed-image" src={data.image_url} alt={data.name} />
        <div className="detailsMain">
          <div className="roomtext">
            <h4>{data.name}</h4>
            <p className="hours">(Reservations for 24hs only)</p>
            {errorData && (
              <div className="error">
                {errorData.city && Object.keys(errorData)[0]}
                &nbsp;
                {errorData.city}
                {errorData.base}
              </div>
            )}
            <div className="ico">
              <div>
                <AiOutlineWifi className="to" />
                <span>Wi-fi:</span>
              </div>
              {data.wifi}
            </div>
            <div className="ico">
              <div>
                <AiFillVideoCamera className="to" />
                <span>TV:</span>
              </div>
              {data.tv}
            </div>
            <div className="ico">
              {' '}
              <div>
                <MdHotel className="to" fontSize={24} />
                <span>Beds:</span>
              </div>
              {data.beds}
            </div>
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
            <button
              type="submit"
              className="mybtn reserveButton"
              onClick={handleShow}
            >
              <FaCog />
              Reserve
              <span className="circle-icon">
                <FiChevronRight />
              </span>
            </button>
          </div>
        </div>
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
    </div>
  );
}

export default DetailRoom;
