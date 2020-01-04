import React from 'react';

const Album = props => {
  const {
    albumTitle,
    albumImg,
    released,
    recordLabel,
    producers = 'Kory Clarke / Warrior Soul',
    url,
    iTunes,
    spotify,
    amazon
  } = props;
  const altText = `Album - ${albumTitle}`;

  const styles = {
    fa: {
      fontSize: '3rem',
      margin: '0 0.5rem'
    }
  };

  return (
    <div className="col-six tab-full">
      <h3>{albumTitle}</h3>
      <p>
        <a href={url} target="_blank">
          <img src={albumImg} alt={altText} />
        </a>
      </p>
      <div className="row">
        <div className="col-six">
          <dl>
            <dt>
              <strong>Released</strong>
            </dt>
            <dd>{released}</dd>
            <dt>
              <strong>Record Label</strong>
            </dt>
            <dd>
              <a href={url} target="_blank">
                {recordLabel}
              </a>
            </dd>
            <dt>
              <strong>Produced By</strong>
            </dt>
            <dd>{producers}</dd>
          </dl>
        </div>
        <div className="col-six">
          <a className="btn btn--stroke full-width" href={url}>
            Buy The Album
          </a>
          <a href={iTunes} target="_blank">
            <i style={styles.fa} className="fab fa-itunes" />
          </a>
          <a href={spotify} target="_blank">
            <i style={styles.fa} className="fab fa-spotify" />
          </a>
          <a href={amazon} target="_blank">
            <i style={styles.fa} className="fab fa-amazon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Album;
