import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo-nagisa-bw-horizontal.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="brand-name">
              <img src={Logo} alt="Nagisa Interior Logo" width={190} />
            </a>
            <p>Solusi Interior Impian Anda</p>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/nagisainteriordesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@nagisainterior"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.tiktok.com/@nagisa.interior?_t=8khg8DXd7i5&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Nagisa Interior - Purwokerto. Semua Hak
            Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
