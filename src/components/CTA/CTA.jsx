import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2>Siap wujudkan Interior impian dengan mudah bersama Kami?</h2>
        <p>Satu langkah lagi untuk mewujudkan Interior impian Anda.</p>
        <a href="https://wa.me/6281216083344" className="cta-button">
          <i className="fab fa-whatsapp"></i> Konsultasi GRATIS Sekarang!
        </a>
      </div>
    </section>
  );
};

export default CTA;
