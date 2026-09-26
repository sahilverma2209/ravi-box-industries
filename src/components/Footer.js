import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* About Us */}
          <div className="footer-column">
            <h3 className="footer-heading">About Us</h3>
            <div className="footer-heading-line"></div>
            <p className="footer-text">
              Ravi Box Industries has been established in the year 1996 with a wide vision of
              corrugated boxes and packaging solutions. We are the leading manufacturer, supplier
              and service provider based in Naraina, Delhi.
            </p>
          </div>

          {/* Contacts */}
          <div className="footer-column">
            <h3 className="footer-heading">Contacts</h3>
            <div className="footer-heading-line"></div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <p><a href="tel:+919811038123">+91 98110 38123</a></p>
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <p><a href="https://wa.me/919811038123" target="_blank" rel="noopener noreferrer">+91 98110 38123</a></p>
                </div>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <p><a href="mailto:rbi_ravi@yahoo.co.in">rbi_ravi@yahoo.co.in</a></p>
                  <p><a href="mailto:rbi.ravindersingh@gmail.com">rbi.ravindersingh@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="footer-column">
            <h3 className="footer-heading">Address</h3>
            <div className="footer-heading-line"></div>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p>Near Vihar Club,</p>
                <p>Naraina,</p>
                <p>Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-heading-line"></div>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>Copyright &copy; {new Date().getFullYear()} Ravi Box Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
