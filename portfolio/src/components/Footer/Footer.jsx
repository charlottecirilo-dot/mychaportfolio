import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>John Doe</h4>
            <p>Full Stack Developer & Creative Designer</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow</h4>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social" title="GitHub">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social" title="LinkedIn">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social" title="Twitter">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <p className="footer-credit">Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
