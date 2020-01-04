import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-full ss-copyright">
          <span>© Copyright Warrior Soul 2018</span>
          <span>Jason Troy</span>
          <span>
            Design by <a href="http://adamarling.com">Adam Arling</a> and <a href="https://www.styleshout.com/">Styleshout</a>
          </span>
        </div>
      </div>

      <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
