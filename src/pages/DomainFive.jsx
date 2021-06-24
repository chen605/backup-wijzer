import React from 'react';
import Domains from '../components/Domains';

const DomainFive = () => {
  //https://player.vimeo.com/video/558045588?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
  return (
    <main>
      <div className="player">
        <h1>Artificial Intelligence & andere opkomende technologie</h1>
        <iframe
          src="https://player.vimeo.com/video/558045588?autoplay=1&amp;muted=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
      <Domains domain="ai" />
    </main>
  );
};

export default DomainFive;
