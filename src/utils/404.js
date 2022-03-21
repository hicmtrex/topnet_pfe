import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout';

const NotFound = () => {
  return (
    <section
      className='p-0 bg-img cover-background rounded'
      style={{
        background: ' url(assets/images/choosing-bg.jpg)',
      }}
    >
      <div className='container-fluid d-flex flex-column'>
        <div className='row align-items-center justify-content-center min-vh-100'>
          <div className='col-md-9 col-lg-6 my-5'>
            <div className='text-center error-page'>
              <h1 style={{ fontSize: '5rem' }} className='mb-0 text-secondary'>
                404
              </h1>
              <h2 className='mb-4 text-white'>Sorry, something went wrong!</h2>
              <p className='w-sm-80 mx-auto mb-4 text-white'>
                This page is incidentally inaccessible because of support. We
                will back very before long much obliged for your understanding
              </p>
              <div>
                <Link
                  to='/'
                  className='btn btn-info btn-lg me-sm-2 mb-2 mb-sm-0'
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
