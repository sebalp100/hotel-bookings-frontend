import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';
import { useGetRoomDataQuery } from '../api/detail';
import './css/roomDetail.css';
import './css/home.css';
import Sidebar from './Sidebar';
import { Modal, Button } from 'react-bootstrap';

function DetailRoom() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetRoomDataQuery(id);
  const [showModal, setShowModal] = useState(false); // Add state for the modal display
  const handleClose = () => setShowModal(false); // Function to close the modal
  const handleShow = () => setShowModal(true); // Function to show the modal
  
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
    <div className="detailContainer">
      <Sidebar />
      <img className="detailed-image" src={data.image_url} alt={data.name} />
      <div className="roomdata">
        <div className="roomtext">
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>{data.wifi}</p>
          <p>{data.tv}</p>
          <p>{data.reserved}</p>
          <p>{data.beds}</p>
        </div>
        <div>
          <button type="submit" className="mybtn" onClick={handleShow}> {/* Add onClick to show the modal */}
            {' '}
            <FaCog />
            {' '}
            Reserve
            <span className="circle-icon">
              <FiChevronRight />
            </span>
            {' '}
          </button>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Reservation Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Add your form inputs here */}
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" />
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default DetailRoom;
