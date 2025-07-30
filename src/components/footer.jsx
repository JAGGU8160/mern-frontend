import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="row">
          {/* Part 1: Logo and About */}
          <div className="col-md-4 mb-3">
            <h5 className="footer-logo">Mishra Jagmohan</h5>
            <p className="footer-desc">
              © {new Date().getFullYear()} Mishra Jagmohan. All rights reserved.
            </p>
            <p className="text-muted">
              Passionate developer creating web solutions with modern technologies.
            </p>
          </div>

          {/* Part 2: Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/Home" className="footer-link">Home</Link></li>
              <li><Link to="/technologies" className="footer-link">Technologies</Link></li>
              <li><a href="#" className="footer-link">Resume</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact Me</a></li>
            </ul>
          </div>

          {/* Part 3: Contact Details */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:mishrajagmohan0@gmail.com" className="footer-link d-flex align-items-center">
                  <span className="me-2">&#9993;</span> mishrajagmohan0@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918160810690" className="footer-link d-flex align-items-center">
                  <span className="me-2">&#9742;</span> +91 8160810690
                </a>
              </li>
              <li className="d-flex align-items-center">
                <span className="me-2">&#x1F4CD;</span> Shahibaugh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
