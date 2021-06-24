import React from 'react';
import backgroundImage from '../img/2329f-int0003.jpg';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();
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
        <iframe
          src="https://player.vimeo.com/video/558045780?autoplay=1&amp;muted=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="45%"
          allow="autoplay"
          height="100%"
          title="intro"
          frameBorder="0"
          allowFullScreen={true}
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
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
          <button onClick={() => history.push('/login')}>Aan de slag</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
