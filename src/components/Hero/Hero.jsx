import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <h1 className="hero-title">Selamat Datang di Nagisa Interior</h1>
        <p className="hero-subtitle">
          "Wujudkan Interior Impian dengan Mudah & Sesuai Keinginan Bersama
          Nagisa"
        </p>
        <div className="hero-buttons">
          <a href="#services" className="button-light">
            Lihat Layanan
          </a>
          <a href="https://wa.me/6281216083344" className="button-dark">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
