import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <h1>Meri`s Crafty Studio</h1>
      </div>
      <div className='navbar-links'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>
      <div className='navbar-social'>
        <Link to="/"><i className="far fa-envelope"></i></Link>
        <Link to="/"><i className="fab fa-facebook-f"></i></Link>
        <Link to="/user"><i className="fas fa-user"></i></Link>
        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
      </div>
    </nav>
  )
}

export default Navbar;
