import React from 'react';
import FormAddRoom from '../components/FormAddRoom';
import Sidebar from '../components/Sidebar';
import MobileMenu from '../components/MobileMenu';

const AddRoom = () => (
  <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
    <Sidebar />
    <MobileMenu />
    <FormAddRoom />
  </div>
);

export default AddRoom;
