import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = () => {
  return (
    <section className='section main-banner' id='top' data-section='section1'>
      <video autoPlay muted loop id='bg-video'>
        <source src='/assets/course-video.mp4' type='video/mp4' />
      </video>
      <div className='video-overlay header-text'>
        <div className='caption'>
          <h6>École supérieure de gestion</h6>
          <h2>
            <em>Votre</em> Meilleur choix
          </h2>
          <div className='main-button'>
            <div className='scroll-to-section'>
              <Link to='/home'>Savoir plus</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
