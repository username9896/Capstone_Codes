import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ConfirmPasswordReset = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    // For example, navigate to the confirmation page
    window.location.href = 'confirmationpage.html';
  };

  return (
    <div className="container">
      <h1>Reset Your Password</h1>
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Enter the code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <br />
          <br />

          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter the new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <br />
          <br />

          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm the password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />
          <br />

          <input
            type="submit"
            id="submitButton"
            value="Reset the Password"
          />
        </form>
      </div>
    </div>
  );
};

export default ConfirmPasswordReset;
