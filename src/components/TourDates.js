import React from 'react';
import tourPoster from '../images/2019-Europe-UK-poster.jpg';
import { tourDates } from '../services/tour-dates';
import TourTable from './TourTable';

const styles = {
  bookingContact: {
    textAlign: 'center'
  },
  poster: {
    textAlign: 'center'
  },
  videoWrapper: {
    paddingBottom: '5rem'
  }
};

const TourDates = () => {
  return (
    <section id="tour-dates" className="s-clients target-section darker">
      <div className="row section-header narrow" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Upcoming Tour Dates</h3>
          <h1 className="display-1">
            Festivals, clubs, Europe, USA, Asia, Australia and outer space.
          </h1>
        </div>
      </div>

      <div className="row add-bottom">
        <div className="col-twelve" style={styles.poster}>
          <img src={tourPoster} alt="Rock N Roll Disease 2019 Europe Tour" />
        </div>
      </div>

      <div className="row add-bottom">
        <div className="col-twelve">
          <div className="table-responsive">
            <TourTable tourDates={tourDates} />
            <section style={styles.bookingContact}>
              <h3>Booking Information</h3>
              <p>
                <a href="mailto:warriorsoulmgmt@gmail.com">
                  warriorsoulmgmt@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDates;
