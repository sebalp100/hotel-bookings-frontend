import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import DeleteRoom from './components/DeleteRoom';
import RoomDetails from './components/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/delete" element={<DeleteRoom />} />
        <Route exact path="/room/:id" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
