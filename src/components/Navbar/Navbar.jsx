import React, { useState } from "react";
import Logo from "../../assets/logo-nagisa-horizontal.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          <img
            src={Logo}
            alt="Nagisa Interior Logo"
            className="navbar-logo"
            height={51}
          />
        </a>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">Tentang Kami</a>
          <a href="#services">Layanan</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Kontak</a>
        </div>
        <a href="https://wa.me/6281216083344" className="navbar-cta-button">
          Hubungi Kami
        </a>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#about" onClick={handleLinkClick}>
          Tentang Kami
        </a>
        <a href="#services" onClick={handleLinkClick}>
          Layanan
        </a>
        <a href="#portfolio" onClick={handleLinkClick}>
          Portfolio
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          Kontak
        </a>
        <a href="https://wa.me/6281216083344" className="mobile-cta-button">
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
