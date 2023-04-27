import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import AddRoom from './pages/AddRoom';
import DeleteRoom from './components/DeleteRoom';
import Current from './components/Current';
import Reservations from './components/Reservations';
import RoomDetails from './components/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/room/new" element={<AddRoom />} />
      <Route path="/rooms/delete" element={<DeleteRoom />} />
      <Route path="/current" element={<Current />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route exact path="/room/:id" element={<RoomDetails />} />
    </Routes>
  );
}

export default App;
