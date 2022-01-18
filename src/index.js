import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../public/css/styles.css';

// Layout
import Navbar from './components/layout/Navbar';

// Pages
import Cart from './components/pages/Cart';
import Gallery from './components/pages/Gallery';
import Shop from './components/pages/Shop';
import User from './components/pages/User';

// Components
import App from './components/App';

const Root = () => (
  <div className='container'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </div>
)

ReactDOM.render(<Root />, document.getElementById('root'));