import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Meri's Crafty Studio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* Left Nav */}
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/gallery" className='nav-link'>Gallery</Link>
          </div>
          {/* Right Nav */}
          <div className="nav navbar-nav navbar-right">
            <Link to="/">meriscraftystudio@gmail.com</Link>
            <li><a href="#about">Right</a></li>
            <li><a href="#contact">Right</a></li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
