import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./compontents/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./compontents/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="nav-borader"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="footer-borader"></div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
