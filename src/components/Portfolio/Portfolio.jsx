import React from "react";
import "./Portfolio.css";
import portfolio1 from "../../assets/5a. foto - resepsionis.jpg";
import portfolio2 from "../../assets/5b. foto - kitchen set.jpg";
import portfolio3 from "../../assets/5c. foto - perpustakaan tema jepang.jpg";
import portfolio4 from "../../assets/5d. foto - working space kampus.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      img: portfolio1,
      title: "Resepsionis",
      desc: "Desain modern dengan sentuhan minimalis",
    },
    {
      img: portfolio2,
      title: "Kitchen Set",
      desc: "Material kayu solid dengan finishing premium",
    },
    {
      img: portfolio3,
      title: "Perpustakaan Tema Jepang",
      desc: "Konsep tradisional Jepang dengan material alami",
    },
    {
      img: portfolio4,
      title: "Working Space Kampus",
      desc: "Desain ergonomis untuk produktivitas maksimal",
    },
  ];

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Temukan Beragam Hasil Karya Kami</h2>
          <div className="divider"></div>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
