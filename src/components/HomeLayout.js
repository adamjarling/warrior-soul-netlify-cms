import React from 'react';
import Home from './Home';
import PreSale from './PreSale';
import About from './About';
import Albums from './Albums';
import Videos from './Videos';
import Works from './Works';
import TourDates from './TourDates';
import Shop from './Shop';
import Header from './Header';
import LashVideo from './LashVideo';

import Contact from './Contact';

const HomeLayout = props => {
  return (
    <div>
      <Header />
      <Home />
      <PreSale />
      <About />
      <TourDates />
      <LashVideo />
      <Works />
      <Albums />
      <Videos />
      <Shop />
      <Contact />
    </div>
  );
};

export default HomeLayout;
