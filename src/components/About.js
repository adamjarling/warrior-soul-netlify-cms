import React from 'react';
import artistPic from '../images/portfolio/16591_artist.jpg';
import koryKnees from '../images/kory-rocking-the-stage.jpg';
import epk from '../images/warrior-soul-epk-v2.pdf';

const About = () => {
  const styles = {
    artistPic: {
      width: '275px',
      height: 'auto'
    },
    leadWhite: {
      color: '#ccc',
      fontStyle: 'italic'
    }
  };

  return (
    <section id="about" className="s-about target-section">
      <div className="row section-header bit-narrow" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Who is Warrior Soul?</h3>
          <h1 className="display-1">
          Warrior Soul is the critically acclaimed international Alt Hard Rock Band formed by lead singer / songwriter / producer, Kory Clarke. Here is what people are saying about them...
          </h1>
        </div>
      </div>

      <div className="row bit-narrow" data-aos="fade-up">
        <div className="col-full">
          <p className="lead" style={styles.leadWhite}>
            <img
              src={koryKnees}
              className="pull-left artist-pic"
              alt="Kory Clarke"
            />
            "I am even more convinced than ever that Clarke is one of the greatest living rock stars around. A modern day poet with ruminations about the state of the world, Clarke and Warrior Soul bring you down into the gutter while showing you how to have a good time."  Not unlike a rock n’ roll Dante that shows the layers of hell that stand before us, all set to a rock n’ roll soundtrack that would make AC/DC, The Sex Pistols and Motorhead proud.  Forget all of the musical genres, sub genres and so forth. Warrior Soul isn’t just metal. It isn’t just punk either. It’s what rock n’ roll should be.  Rebellion, a black eye to the fascists of our society, chaotic reflection and ultimately a musical party to drown our sorrows in."
          </p>
          <p>- XS ROCK 2018</p>
          <p>
            <a className="btn btn--primary" href={epk} target="_blank">
              View Press Kit and Full Bio
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
