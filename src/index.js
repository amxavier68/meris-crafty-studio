import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/header-footer/Navbar';

import App from "./components/App";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";

const Root = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"));