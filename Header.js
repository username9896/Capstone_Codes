import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dash/"><img className="nav-logo" src="/static/logo/dolfinlogoborder.png" alt="nav-logo"/>DolFin</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Leave this alone, DO NOT REMOVE */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/resetpw">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/confirmpw">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/confirmationpw">FAQ</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownMenu2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="profile-img" src="/static/logo/dolfinlogoborder.png" alt="profile-img"/>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="/profile">My Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/signout">Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
