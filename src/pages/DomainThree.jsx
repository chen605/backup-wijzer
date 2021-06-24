import React from 'react';
import Domains from '../components/Domains';

const DomainThree = () => {
  return (
    <main>
      <div className="player">
        <h1>Digitale producten, Services & Marketing</h1>
        <iframe
          src="https://player.vimeo.com/video/558045076?autoplay=1&amp;muted=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          width="45%"
          height="400px"
          allow="autoplay"
          title="Data, Dashboards &amp; Business Intelligence"
          allowFullScreen={true}
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        />
      </div>
      <Domains domain="digitalproducts" />
    </main>
  );
};

export default DomainThree;
