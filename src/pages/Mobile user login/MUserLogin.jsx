import React from 'react';
import './MUL.css';

const MUserLogin = () => {
  return (
    <div className="containermobilelogin container">
      <div className="image-container">
        <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg" alt="Secure Login" />
      </div>
      <div className="content-container">
        <h2>Let's get started</h2>
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

