import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <footer className="footer-navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <span>
            <br />
            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
            <a
              href="https://twitter.com/?lang=en"
              className="fa fa-twitter"
            ></a>
            <a
              href="https://www.instagram.com/"
              className="fa fa-instagram"
            ></a>
            <a
              href="https://www.snapchat.com/en-US"
              className="fa fa-snapchat"
            ></a>
            <p className="copy">&copy; 2023 Kestis Shipyard</p>
          </span>
        </footer>
      </section>
    </footer>
  );
};

export default Footer;
