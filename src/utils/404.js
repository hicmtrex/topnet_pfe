import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout';

const NotFound = () => {
  return (
    <Layout>
      <section
        className='p-0 bg-img cover-background rounded text-white'
        style={{
          background: ' url(assets/images/choosing-bg.jpg)',
          height: '85vh',
        }}
      >
        <div className='container-fluid d-flex flex-column '>
          <Row className=' align-items-center justify-content-center '>
            <Col md={9} lg={6} className=' my-5 pt-5'>
              <div className='text-center error-page'>
                <h1
                  style={{ fontSize: '5rem' }}
                  className='mb-0 text-secondary mt-5'
                >
                  404
                </h1>
                <h2 className='mb-4 text-white '>Sorry, Page not found</h2>
                <p className='w-sm-80 mx-auto mb-4 '>
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
            </Col>
          </Row>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
