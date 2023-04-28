import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import AddRoom from './pages/AddRoom';
import DeleteRoom from './components/DeleteRoom';
import RoomDetails from './components/Detail';
import Reservation from './pages/Reservation';

function App() {
  const handleClick = (data) => {
    console.log(data);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/room/new" element={<AddRoom />} />
        <Route path="/delete" element={<DeleteRoom />} />
        <Route exact path="/room/:id" element={<RoomDetails onButtonReservedClick={handleClick} />} />
        <Route path="reservation/new" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
