import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="s-contact target-section">
      <div className="grid-overlay">
        <div />
      </div>

      <div className="row section-header narrow" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Get In Touch</h3>
          <h1 className="display-1">
            Booking &amp; Management<br />Europe / Asia / North America
          </h1>
        </div>
      </div>

      <div className="row contact-main" data-aos="fade-up">
        <div className="col-full">
          <p className="contact-email">
            <a href="mailto:#0">warriorsoulmgmt@gmail.com</a>
          </p>
          <p className="contact-address">
            <a href="http://warriorsoulofficial.com">warriorsoulofficial.com</a> 
          </p>

          <ul className="contact-social">
            <li>
              <a href="https://www.facebook.com/warriorsoulofficial/">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/warriorsoulofficial/">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
