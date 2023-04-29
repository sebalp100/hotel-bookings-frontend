import React from 'react';
import FormAddRoom from '../components/FormAddRoom';
import Sidebar from '../components/Sidebar';

const AddRoom = () => (
  <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
    <Sidebar />
    <FormAddRoom />
  </div>
);

export default AddRoom;
