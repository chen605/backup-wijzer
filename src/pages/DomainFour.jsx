import React from 'react';
import Domains from '../components/Domains';

const DomainFour = () => {
  return (
    <main>
      <div className="player">
        <iframe
          src="https://player.vimeo.com/video/558045330?autoplay=1&amp;muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          width="45%"
          height="400px"
          allow="autoplay"
          allowFullScreen={true}
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          title="Data, Dashboards &amp; Business Intelligence"
        />
      </div>
      <Domains domain="security" />
    </main>
  );
};

export default DomainFour;
