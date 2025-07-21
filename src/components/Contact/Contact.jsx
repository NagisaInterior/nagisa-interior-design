import React from "react";
import "./Contact.css";

const Contact = () => {
  const contactItems = [
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      text: "081216083344",
      href: "https://wa.me/6281216083344",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Maps",
      text: "Lihat di Google Maps",
      href: "https://maps.app.goo.gl/jRUBY83ZJ2ivgoMt8",
    },
    {
      icon: "far fa-clock",
      title: "Jam Operasional",
      text: "Senin - Sabtu. 08.00 - 16.00 WIB",
      href: null, // Tidak dapat diklik
    },
    {
      icon: "far fa-envelope",
      title: "Email",
      text: "nagisainterior@gmail.com",
      href: "mailto:nagisainterior@gmail.com",
    },
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "var(--white)" }}>
            Nagisa di Sini, Siap Membantu Kebutuhan Interior Anda!
          </h2>
          <div className="divider"></div>
        </div>

        <div className="contact-grid">
          {contactItems.map((item, index) => {
            const cardContent = (
              <div className="contact-item-card" key={index}>
                <div className="card-icon">
                  <i className={item.icon}></i>
                </div>
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.text}</p>
              </div>
            );

            // Jika item memiliki link (href), bungkus dengan tag <a>
            // Jika tidak, bungkus dengan tag <div> biasa
            return item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                {cardContent}
              </a>
            ) : (
              <div className="card-link inactive">{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
