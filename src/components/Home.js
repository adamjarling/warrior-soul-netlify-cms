import React from 'react';
import korySingingBg from '../images/portfolio/photo-kory-singing-bw.jpg';
import logoLong from '../images/warrior-soul-logo-one-line.png'
import * as globals from '../services/globals';

const Home = () => {
  return (
    <section
      id="home"
      className="s-home page-hero target-section"
      data-parallax="scroll"
      data-image-src={korySingingBg}
      data-natural-width="3000"
      data-natural-height="2000"
      data-position-y="center"
    >
      <div className="grid-overlay">
        <div />
      </div>

      <div className="home-content">
        <div className="row home-content__main">
          <img src={logoLong} alt="logo" />
          <div className="home-content__video">
            <a
              className="video-link"
              href="https://www.youtube.com/embed/3wpXpg3IPkc"
              data-lity
            >
              <span className="video-icon" />
              <span className="video-text">Watch Video</span>
            </a>
          </div>

          <div className="home-content__button">
            <a
              href="#tour-dates"
              className="smoothscroll btn btn--primary btn--large"
            >
              Tour Dates
            </a>
            <a href="#videos" className="smoothscroll btn btn--large">
              Lets Rock
            </a>
          </div>
        </div>

        <div className="home-content__scroll">
          <a href="#about" className="scroll-link smoothscroll">
            Scroll
          </a>
        </div>
      </div>

      <ul className="home-social">
        <li>
          <a href={globals.FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" aria-hidden="true" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fab fa-twitter" aria-hidden="true" />
            <span>Twiiter</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/warriorsoulofficial/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
