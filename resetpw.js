import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'confirmpw.html';
  };

  return (
    <div className="container">
      <h1>Reset Your Password</h1>
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="username1"
            name="username"
            placeholder="Enter Your E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <br />
          <input type="submit" id="button1" value="Send the code" />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
