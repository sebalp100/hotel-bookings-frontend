import React, { useState } from 'react';
import { useCreateRoomMutation } from '../api/roomsData';

const FormAddRoom = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [wifi, setWifi] = useState('');
  const [tv, setTv] = useState('');
  const [roomService, setRoomService] = useState('');
  const [beds, setBeds] = useState(1);
  const [imageUrl, setImageUrl] = useState('');
  const [reserved, setReserved] = useState(false);

  const [createRoom] = useCreateRoomMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    createRoom({
      name,
      description,
      wifi,
      tv,
      room_service: roomService,
      beds,
      image_url: imageUrl,
      reserved,
    });
  };

  return (
    <div className="">
      <div>
        <form
          className="bg-neutral-200 flex flex-col justify-between items-start w-[400px] h-[500px] text-white"
          onSubmit={handleSubmit}
        >
          <label htmlFor={name}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={description}>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={wifi}>
            Wi-Fi:
            <input
              type="text"
              value={wifi}
              onChange={(e) => setWifi(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={tv}>
            TV:
            <input
              type="text"
              value={tv}
              onChange={(e) => setTv(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={roomService}>
            Room Service:
            <input
              type="text"
              value={roomService}
              onChange={(e) => setRoomService(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={beds}>
            Beds:
            <input
              type="number"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={imageUrl}>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor={reserved}>
            Reserved:
            <input
              type="checkbox"
              checked={reserved}
              onChange={(e) => setReserved(e.target.checked)}
            />
          </label>
          <br />
          <button type="submit">Create Room</button>
        </form>
      </div>
    </div>
  );
};

export default FormAddRoom;
