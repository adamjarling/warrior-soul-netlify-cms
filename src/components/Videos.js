import React from 'react';
import Video from './videos/Video';

const Videos = () => {
  return (
    <section id="videos" className="s-services target-section">
      <div className="row section-header bit-narrow" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Featured Videos</h3>
          <h1 className="display-1">
            Archival videos from Warrior Soul / Kory Clarke
          </h1>
        </div>
      </div>

      <div className="row half-bottom">
        <Video
          videoTitle="Punk And Belligerent (live on Mad TV Greece)"
          videoSource="https://www.youtube.com/embed/3wpXpg3IPkc"
        />
        <Video
          videoTitle="Love Destruction"
          videoSource="https://www.youtube.com/embed/iT1muWE8RzA"
        />
      </div>

      <div className="row half-bottom">
        <Video
          videoTitle="The Drug"
          videoSource="https://www.youtube.com/embed/QbIYaFvId5Q"
        />
        <Video
          videoTitle="We Cry Out"
          videoSource="https://www.youtube.com/embed/zT-DBDhEBCE"
        />
      </div>

      <div className="row half-bottom">
        <Video
          videoTitle="I Wanna Get Some"
          videoSource="https://www.youtube.com/embed/3apLLIaULD8"
        />
        <Video
          videoTitle="Rotten Soul Live - Dynamo '95"
          videoSource="https://www.youtube.com/embed/i10laVcSuAg"
        />
      </div>

      <div className="row half-bottom">
        <Video
          videoTitle="Downtown"
          videoSource="https://www.youtube.com/embed/4nurQy-oyZg"
        />
        <Video
          videoTitle="Lullaby"
          videoSource="https://www.youtube.com/embed/kM9WusAG854"
        />
      </div>

      <div className="row half-bottom">
        <Video
          videoTitle="The Wasteland (with intro)"
          videoSource="https://www.youtube.com/embed/hdhZdO8rt5Y"
        />
        <Video
          videoTitle="Lets Get Wasted"
          videoSource="https://www.youtube.com/embed/_IPUaeXJifY"
        />
      </div>

      <div className="row half-bottom">
        <Video
          videoTitle="Losers"
          videoSource="https://www.youtube.com/embed/GaDsh0IZ020"
        />
        <Video
          videoTitle="The Fourth Reich"
          videoSource="https://www.youtube.com/embed/R3xAlsKeDzA"
        />
      </div>
    </section>
  );
};

export default Videos;
