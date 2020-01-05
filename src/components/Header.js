import React, { useState } from "react";
import logo from "../images/warrior-soul-logo-full-white.png";
import * as globals from "../services/globals";
import { Link } from "gatsby";

const items = [
  {
    idUrl: "/",
    title: "home",
    label: "Home"
  },
  {
    idUrl: "/about",
    title: "about",
    label: "Bio"
  },
  {
    idUrl: "/tour",
    title: "tour dates",
    label: "Tour Dates"
  },
  {
    idUrl: "/photos",
    title: "photos",
    label: "Photos"
  },
  {
    idUrl: "/albums",
    title: "albums",
    label: "Albums"
  },
  {
    idUrl: "/videos",
    title: "videos",
    label: "Videos"
  },
  {
    idUrl: "/merch",
    title: "merch",
    label: "Buy Merch"
  },
  {
    idUrl: "/contact",
    title: "contact",
    label: "Contact / Booking"
  },
  {
    idUrl: "/paintings",
    title: "paintings",
    label: "Paintings and Sculptures"
  }
];

const HeaderItem = props => {
  const { idUrl, title, label } = props;

  return (
    <li>
      <Link to={`${idUrl}`} className="smoothscroll" title={title}>
        {label}
      </Link>
    </li>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`s-header ${menuOpen ? "menu-is-open" : ""}`}>
      <div className="header-logo">
        <Link className="site-logo" to="/">
          {" "}
          <img src={logo} alt="Homepage" />
        </Link>
      </div>

      <nav className="header-nav">
        <button
          className="header-nav__close"
          title="close"
          onClick={() => setMenuOpen(false)}
        >
          <span>Close</span>
        </button>

        <h3>Navigate to</h3>

        <div className="header-nav__content">
          <ul className="header-nav__list">
            {items.map(item => (
              <HeaderItem
                key={item.idUrl}
                idUrl={item.idUrl}
                title={item.title}
                label={item.label}
              />
            ))}
          </ul>

          <p>Copyright 2020 Warrior Soul</p>

          <ul className="header-nav__social">
            <li>
              <a href={globals.FACEBOOK_URL} target="_blank">
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
      </nav>

      <button className="header-menu-toggle" onClick={() => setMenuOpen(true)}>
        <span className="header-menu-icon" />
      </button>
    </header>
  );
};

export default Header;
