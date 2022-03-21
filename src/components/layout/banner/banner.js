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
          <h6>Graduate School of Management</h6>
          <h2>
            <em>Your</em> Best Choice
          </h2>
          <div className='main-button'>
            <div className='scroll-to-section'>
              <Link to='/home'>Discover more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
