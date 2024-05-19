import React from 'react';
import Feedback from './feedback';
import ResetPassword from './resetpw';
import PasswordResetConfirmation from './confirmationpw'
import ConfirmPasswordReset from './confirmpw'
import LandingPage from './landing'

function App() {
  return (
    <div>
      <Feedback />
      <ResetPassword />
      <PasswordResetConfirmation />
      <ConfirmPasswordReset />
      <LandingPage />
    </div>
  );
}

export default App;
