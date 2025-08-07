import React from 'react';
import './Footer.css'; // Agar CSS fayl ajratilgan bo‘lsa

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <span className="diamond">◈</span>
            <span className="text-bold">Skill</span>ine
          </div>
          <div className="newsletter">
            <p>Subscribe to get our Newsletter</p>
            <form>
              <input type="email" placeholder="Your Email" />
              <button type="submit" id='Subscribe'> Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="links">
            <a href="#">Careers</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="copyright">
            © 2021 Class Technologies Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
