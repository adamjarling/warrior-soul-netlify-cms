import React from "react";
import bandPhotoKick from "../images/portfolio/band-photo-kick.jpg";
import crowdSurfing from "../images/portfolio/crowdsurfing.jpeg";
import kory2 from "../images/portfolio/KORY-CLARKE-2.jpg";
import korySingingLive from "../images/portfolio/kory-singing-live.jpg";
import trump from "../images/portfolio/american-idol-background.jpg";
import loveDrug from "../images/portfolio/love-is-the-drug.jpg";
import metalInvader from "../images/portfolio/metal-invader-kory-interview.jpg";
import logo from "../images/portfolio/warrior-soul-logo-white.png";
import liveCrowd from "../images/portfolio/photo-live-crowd.jpeg";
import liveBigStage from "../images/portfolio/kory-live-on-the-big-stage.jpg";
import italyRocking from "../images/portfolio/KC Ph by Irene Fitipaldi Trieste Sold Out Festival Italy  2016.jpg";
import christian from "../images/portfolio/Christian Kimmett 2016.jpg";
import koryDoorway from "../images/portfolio/KC_2_ph_All_Rights_Reserved_Alex_Ruffini.jpg";
import tour2018 from "../images/portfolio/ws-tour-2018.jpg";

import ItemFolio from "./ItemFolio";

const Photos = () => {
  const styles = {
    cite: {
      fontSize: "2.5rem"
    }
  };

  return (
    <section id="works" className="s-works target-section">
      <div
        className="row section-header has-bottom-sep narrow target-section"
        data-aos="fade-up"
      >
        <div className="col-full">
          <h3 className="subhead">Warrior Soul Photos</h3>
          <blockquote cite="http://where-i-got-my-info-from.com">
            <p>
              Kory Clarke should be considered, and is, one of the great Rock
              Stars of all time along with Bon Scott, Axl Rose and Michael
              Monroe.
            </p>
            <cite style={styles.cite}>
              <a href="#">Lars Ulrich - Metallica</a>
            </cite>
          </blockquote>
        </div>
      </div>

      <div className="row masonry-wrap">
        <div className="masonry">
          <ItemFolio
            itemSrc={bandPhotoKick}
            itemTitle="Promo Photo"
            description="Promo photo by..."
            dataSize="1319x879"
          />
          <ItemFolio
            itemSrc={liveBigStage}
            itemTitle="Live Festival Shot"
            description="Warrior Soul rocking European Festivals"
            dataSize="612x405"
          />
          <ItemFolio
            itemSrc={crowdSurfing}
            itemTitle="Live in Italy"
            description="Crowd going nuts in Italy"
            dataSize="1620x1080"
          />
          <ItemFolio
            itemSrc={kory2}
            itemTitle="Kory Clarke"
            description="Kory promo shot"
            dataSize="960x909"
          />
          <ItemFolio
            itemSrc={loveDrug}
            itemTitle="(Love Is) The Drug vinyl"
            description="(Love Is) The Drug vinyl - find it online!"
            dataSize="990x700"
          />
          <ItemFolio
            itemSrc={korySingingLive}
            itemTitle="Live shot"
            description="Kory promo shot"
            dataSize="858x572"
          />
          <ItemFolio
            itemSrc={trump}
            itemTitle="Stage banner"
            description="Stage banner for Back on the Lash Tour"
            dataSize="700x700"
          />
          <ItemFolio
            itemSrc={italyRocking}
            itemTitle="Sold Out Festival Italy  2016"
            description="Photo by Irene Fitipaldi Trieste Sold Out Festival Italy  2016"
            dataSize="640x960"
          />
          <ItemFolio
            itemSrc={metalInvader}
            itemTitle="Metal Invader Interview with Kory"
            description="Metal Invader Interview with Kory"
            dataSize="2400x1200"
          />
          <ItemFolio
            itemSrc={christian}
            itemTitle="Christian 'over the limit' Kimmett"
            description="Christian 'over the limit' Kimmett"
            dataSize="960x960"
          />
          <ItemFolio
            itemSrc={logo}
            itemTitle="Warrior Soul Logo"
            description="Warrior Soul Logo"
            dataSize="2571x960"
          />
          <ItemFolio
            itemSrc={liveCrowd}
            itemTitle="Live crowd shot"
            description="Live crowd shot"
            dataSize="720x480"
          />
          <ItemFolio
            itemSrc={koryDoorway}
            itemTitle="Photo by Alex Ruffini"
            description="Photo by Alex Ruffini"
            dataSize="3744x5616"
          />
          <ItemFolio
            itemSrc={tour2018}
            itemTitle="Tour Poster Europe 2018"
            description="Tour Poster Europe 2018"
            dataSize="854x1200"
          />
        </div>
      </div>
    </section>
  );
};

export default Photos;
