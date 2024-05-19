import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const LandingPage = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DolFin | Landing</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="./landing.css" />
        <link
          rel="icon"
          type="image/x-icon"
          href="./logo/apple-touch-icon.png"
        />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;800&display=swap');
        </style>
      </head>
      <body>
        <section className="header">
          <div className="header-content">
            <footer className="container"></footer>
          </div>
        </section>

        <div className="container">
          <div className="content-main row">
            <div className="landing-content col-lg-6 col-md-12 col-sm-12">
              <h3 className="landing-subheading">
                Join <span style={{ color: '#343A40' }}>DolFin</span> Today and
              </h3>
              <h1 className="landing-heading">
                Start
                <img
                  id="logoImg"
                  src="./logo/dolfinlogoborder.png"
                  alt="favicon"
                />
                Saving
              </h1>
            </div>
            <div className="landing-blob col-lg-6 col-md-12 col-sm-12">
              <div className="blob-content">
                <div className="landing-buttons">
                  <a className="btn btn-primary" href="/register" role="button">
                    JOIN NOW
                  </a>
                  <a className="btn sec-button" href="/login" role="button">
                    <span style={{ color: '#fafafe' }}>or</span> log in here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
          crossOrigin="anonymous"
        ></script>
      </body>
    </div>
  );
};

export default LandingPage;
