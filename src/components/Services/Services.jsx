import React from "react";
import "./Services.css";
import service1 from "../../assets/4a. foto (layanan 1) - interior rumah.jpg";
import service2 from "../../assets/4b. foto (layanan 2) - interior kantor.jpg";
import service3 from "../../assets/4c. foto (layanan 3) - custom furniture.jpg";

const Services = () => {
  const serviceData = [
    {
      img: service1,
      title: "Interior Rumah",
      description:
        "Kami melayani segala kebutuhan Interior rumah Anda dengan hasil terbaik, meliputi: Kitchen Set, Bedroom Set, Bathroom Set, Backdrop TV, dan lain sebagainya.",
    },
    {
      img: service2,
      title: "Interior Kantor",
      description:
        "Kami melayani segala kebutuhan Interior kantor Anda dengan hasil terbaik, meliputi: Ruang Transit, Ruang Kelas, Ruang Serbaguna, Perpustakaan, Ruang Meeting, dan lain sebagainya.",
    },
    {
      img: service3,
      title: "Custom Furniture",
      description:
        "Kami melayani produksi Custom Furniture sesuai kebutuhan Anda, seperti Lemari Pakaian, Wastafel, Meja Kursi, Stand Antrian Pendaftaran, Meja Rias, dan lain sebagainya.",
    },
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "var(--white)" }}>
            Layanan Terbaik dari Nagisa Interior
          </h2>
          <div className="divider"></div>
        </div>
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.img}
                alt={service.title}
                className="service-image"
              />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="https://wa.me/6281216083344" className="button">
                  Kontak Kami
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
