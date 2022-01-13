import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import App from "./components/App";
import Admin from "./pages/Admin";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Link to="/admin">Admin</Link>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"));