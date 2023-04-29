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
  //   const [inputValues, setInputValues] = useState({
  //     name: "",
  //     description: "",
  //     imageUrl: "",
  //     tv: "",
  //     wifi: "",
  //     roomService: "",
  //     reserved: false,
  //     beds: 0
  //   })

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
    })
      .then(() => {
        window.location.href = '/home';
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  };

  return (
    <div className="formContainer">
      <div className="flex justify-center w-screen h-screen items-center">
        <form
          className="bg-neutral-50 flex flex-col justify-center items-center w-[450px] h-[650px] text-black"
          onSubmit={handleSubmit}
        >
          <label htmlFor={name}>
            <span>Name</span>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[300px]"
            />
          </label>
          <br />
          <label htmlFor={description}>
            <span>Description</span>
            <br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-[300px]"
            />
          </label>
          <br />
          <label htmlFor={wifi}>
            <span>Wi-Fi</span>
            <br />
            <input
              type="text"
              value={wifi}
              onChange={(e) => setWifi(e.target.value)}
              className="w-[300px]"
            />
          </label>
          <br />
          <label htmlFor={tv}>
            <span>TV</span>
            <br />
            <input
              type="text"
              value={tv}
              onChange={(e) => setTv(e.target.value)}
              className="w-[300px]"
            />
          </label>
          <br />
          <label htmlFor={roomService}>
            <span>Room Service</span>
            <br />
            <input
              type="text"
              value={roomService}
              onChange={(e) => setRoomService(e.target.value)}
              className="w-[300px]"
            />
          </label>
          <br />
          <label htmlFor={beds}>
            <span>Beds</span>
            <br />
            <input
              type="number"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="w-[300px]"
            />
          </label>
          <br />
          <label htmlFor={imageUrl}>
            <span>Image URL</span>
            <br />
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-[300px]"
            />
          </label>
          <br />
          <label
            htmlFor="reserved"
            className="flex flex-row items-center gap-2"
          >
            <input
              type="checkbox"
              checked={reserved}
              onChange={(e) => setReserved(e.target.checked)}
            />
            <span>Reserved</span>
          </label>
          <br />
          <button
            type="submit"
            className="bg-lime-500 w-[180px] h-[35px] rounded-lg text-white"
          >
            Create Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAddRoom;
