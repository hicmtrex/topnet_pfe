import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './courses.css';


const Courses = () => {
  return (
    <section className='section why-us' data-section='section2'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='section-heading'>
              <h2 className='text-white mt-5'>Why choose Top Stage?</h2>
            </div>
          </Col>
          <Col md={12}>
            <div id='tabs'>
              <section className='tabs-content'>
                <article id='tabs-1'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src='assets/images/choose-us-image-01.png' alt='' />
                    </div>
                    <div className='col-md-6'>
                      <h4>Best Education</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusamus odio non expedita! Dolore eligendi non
                        nulla numquam at explicabo rem dicta rerum sunt.
                        Facilis, animi ducimus corrupti impedit culpa labore?
                        <a
                          href='https://paypal.me/templatemo'
                          target='_parent'
                          rel='sponsored'
                        >
                          a little donation
                        </a>{' '}
                        to TemplateMo. Please tell your friends about us. Thank
                        you.
                      </p>
                    </div>
                  </div>
                </article>
                <article id='tabs-2'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src='assets/images/choose-us-image-02.png' alt='' />
                    </div>
                    <div className='col-md-6'>
                      <h4>Top Level</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusamus odio non expedita! Dolore eligendi non
                        nulla numquam at explicabo rem dicta rerum sunt.
                        Facilis, animi ducimus corrupti impedit culpa labore?
                      </p>
                      <p>
                        Suspendisse tincidunt, magna ut finibus rutrum, libero
                        dolor euismod odio, nec interdum quam felis non ante.
                      </p>
                    </div>
                  </div>
                </article>
                <article id='tabs-3'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src='assets/images/choose-us-image-03.png' alt='' />
                    </div>
                    <div className='col-md-6'>
                      <h4>Quality Meeting</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusamus odio non expedita! Dolore eligendi non
                        nulla numquam at explicabo rem dicta rerum sunt.
                        Facilis, animi ducimus corrupti impedit culpa labore?
                        <a
                          rel='nofollow'
                          href='https://templatemo.com/contact'
                          target='_parent'
                        >
                          contact TemplateMo
                        </a>{' '}
                        now.
                      </p>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
