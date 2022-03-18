import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='mt-auto'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>
              Copyright 2022 &copy; by Top{' '}
              <a href='#' rel='sponsored' target='_parent'>
                Stage
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
