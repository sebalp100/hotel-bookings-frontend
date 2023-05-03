/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import {
  FaSuitcaseRolling,
  FaChevronCircleRight,
  FaGripLines,
  FaSearch,
} from 'react-icons/fa';
import { useLoginMutation } from '../api/authLog';

import './css/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      username,
      password,
    })
      .unwrap()
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        setError(error.data.message);
      });
  };

  return (
    <div
      className="login-background"
      style={{
        backgroundImage: 'url(/cases.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="menu-buttons">
        <FaGripLines />
      </div>
      <div>
        <h1 className="loginH1">Reserve Your Room</h1>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit} className="form">
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              placeholder="Username"
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
          <br />
          <button className="myButton" type="submit">
            <FaSuitcaseRolling />
            <span>Log In</span>
            <FaChevronCircleRight />
          </button>
        </form>
        <p className="signup">
          First time visiting?
          <Link to="/signup"> Sign up!</Link>
        </p>
      </div>
      <div className="menu-buttons2">
        <div className="glass">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Login;
