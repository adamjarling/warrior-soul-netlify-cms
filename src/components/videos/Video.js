import React from 'react';

const Video = props => {
  return (
    <div className="col-six tab-full">
      <h3>{props.videoTitle}</h3>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={props.videoSource}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={props.videoTitle}
        />
      </div>
    </div>
  );
};

export default Video;
