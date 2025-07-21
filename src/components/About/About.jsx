import React from "react";
import "./About.css";
import aboutImage1 from "../../assets/3a. foto - tentang kami (1).jpg";
import aboutImage2 from "../../assets/3b. foto - tentang kami (2).jpg";
import aboutImage3 from "../../assets/3c. foto - tentang kami (3).jpg";

const About = () => {
  const reasons = [
    "Kualitas Produk Terjamin",
    "Free Konsultasi",
    "Free Biaya Survei",
    "Free Biaya Desain",
    "Bisa Request Custom Desain",
    "Garansi Kerusakan 5 Tahun",
    "Banyak Pilihan Material",
  ];

  const steps = [
    "Konsultasi konsep yang diinginkan",
    "Survei ke lokasi Klien",
    "Merancang desain sesuai konsep",
    "Kalkulasi anggaran yang dibutuhkan",
    "Produksi di Workshop",
    "Setting di lokasi Klien",
    "Garansi jika terjadi masalah setelah Setting",
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Yuk Kita Kenalan agar Lebih Akrab!</h2>
          <div className="divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <img src={aboutImage1} alt="Nagisa Interior" />
          </div>

          <div className="about-content">
            <h3>Nagisa Interior</h3>
            <p className="description">
              Nagisa Interior adalah studio desain dan bangun interior yang
              melayani semua hal terkait interior ruangan seperti Kitchen Set,
              Bedroom Set, Backdrop TV, Ruang Kantor, Bathroom Set, hingga
              Custom Furniture.
            </p>
          </div>
        </div>

        <div className="section about-grid">
          <div className="about-content">
            <h3>Mengapa Anda Memilih NAGISA?</h3>
            <div className="reasons-grid">
              {reasons.map((reason, idx) => (
                <div className="reason-item" key={idx}>
                  <span className="reason-icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={aboutImage2} alt="Nagisa Interior" />
          </div>
        </div>

        <div className="about-steps-wrapper">
          <h3>Bagaimana Cara Order ke Nagisa Interior?</h3>
          <div className="steps-grid">
            <div className="steps-list-grid">
              {steps.map((step, idx) => (
                <div className="step-list-item" key={idx}>
                  <span className="step-list-icon">
                    <span>{idx + 1}</span>
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <div className="about-image">
              <img src={aboutImage3} alt="Proses Order Nagisa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
