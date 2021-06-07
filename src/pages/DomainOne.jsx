import React from 'react';
import ReactPlayer from 'react-player';
import Domains from '../components/Domains';

const DomainOne = () => {
  return (
    <main>
      <div className="player">
        <iframe
          src="https://player.vimeo.com/video/558044658?autoplay=1&amp;muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          width="45%"
          height="400px"
          allow="autoplay"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          title="Data, Dashboards &amp; Business Intelligence"
        />
      </div>
      <Domains domain="data" />
    </main>
  );
};

export default DomainOne;
