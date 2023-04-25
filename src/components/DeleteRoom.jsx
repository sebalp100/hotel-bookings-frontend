import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {
  useGetRoomsDetailsQuery,
  useDeleteRoomMutation,
} from '../api/roomsData';
import RecentlyDeletedRooms from './Deleted';

function DeleteRoom() {
  const { data, error, isLoading } = useGetRoomsDetailsQuery();
  const [deleteRoom] = useDeleteRoomMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleDelete = (roomId, roomName) => {
    if (
      window.confirm(`Are you sure you want to delete the room "${roomName}"?`)
    ) {
      const deletedRooms = JSON.parse(localStorage.getItem('deletedRooms')) || [];
      const deletedRoom = data.find((room) => room.id === roomId);
      deletedRooms.push(deletedRoom);
      localStorage.setItem('deletedRooms', JSON.stringify(deletedRooms));
      deleteRoom(roomId);
    }
  };

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div className="deleteContainer">
      <div className="rooms">
        <h1 id="deleteTitle">CHOOSE A ROOM TO DELETE</h1>
        <ul id="ul">
          {data.map((room) => (
            <li id="li" key={room.id}>
              <div className="imageContainer">
                <h4 id="name">{room.name}</h4>
                <img id="img" alt="room" src={room.image_url} />
              </div>
              <button
                onClick={() => handleDelete(room.id, room.name)}
                disabled={isLoading}
                type="button"
                className="myButton"
                id="button"
              >
                <FaTrashAlt />
                Delete
              </button>
            </li>
          ))}
        </ul>
        <RecentlyDeletedRooms />
      </div>
    </div>
  );
}

export default DeleteRoom;
