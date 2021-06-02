import React from 'react';
import backgroundImage from '../img/2329f-int0003.jpg';
import ReactPlayer from 'react-player';

const LandingPage = () => {
  return (
    <div
      className="landingPage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* video player */}
      <div className="landingPage__player-wrapper">
        <ReactPlayer
          muted={true}
          playing={true}
          url="https://player.vimeo.com/video/558054633?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="45%"
          height="100%"
        />

        <div className="landingPage__player-wrapper__introText">
          <h2>MKB Digitaliseringswijzer</h2>
          <p>
            Cupola XS voert samen met TechConnect van de Amsterdam Economic
            Board, Winc Academy en CA-ICT de mkb DigitaliseringsWijzer uit. Dit
            is een self-assessment voor ondernemers, directeuren en managers van
            kleine en middelgrote bedrijven (10-250 medewerkers). De Wijzer
            geeft aan in welke mate zijn in staat zijn om leiding te geven aan
            de digitale transitie van hun bedrijf en op welke fundamentele
            onderdelen van digitalisering zijn toegang nodig hebben tot kennis
            en toepassingen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
