import React from 'react';

function Footer() {
  return (
    <footer className="footer mb-0">
      <div className="inner-content">
        <div className="center-content">
          <h5><a className="terms-link" href="/terms-of-use"> About Us </a></h5>
          <h5><a className="termsai-link" href="/terms-of-use-ai"> Contact Us </a></h5>
          <h5><a className="terms-link" href="/terms-of-use">Terms of Use</a></h5>
          <h5><a className="termsai-link" href="/terms-of-use-ai">Disclaimer on use of Artificial Intelligence Predictions in DolFin</a></h5>
        </div>
        <div className="outer-content">
          <h6 style={{ margin: 0 }}> ©2023 DolFin - All Rights Reserved</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
