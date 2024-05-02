import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MUL.css';

const MUserLogin = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="containermobilelogin container">
      <div className="close-icon" onClick={handleClose}><i class="fa-regular fa-circle-xmark"></i></div>
      <div className="image-container">
        <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg" alt="Secure Login" />
      </div>
      <div className="content-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">Login</button>
      </div>
    </div>
  );
};

export default MUserLogin;
