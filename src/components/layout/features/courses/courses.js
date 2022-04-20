import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import './courses.css';

const Courses = () => {
  return (
    <section className='section why-us' data-section='section2'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='section-heading'>
              <h2 className='text-white mt-5'>Pourquoi choisir Top Stage?</h2>
            </div>
          </Col>
          <Col md={12}>
            <div id='tabs'>
              <section className='tabs-content'>
                <article id='tabs-1'>
                  <Row>
                    <Col md={6} className=' my-2 '>
                      <Image
                        style={{ height: '400px' }}
                        src='assets/images/topnet_3.jpg'
                        alt='img'
                        rounded
                        className=' p-2'
                      />
                    </Col>
                    <Col md={6}>
                      <h4>Meilleure éducation</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusamus odio non expedita! Dolore eligendi non
                        nulla numquam at explicabo rem dicta rerum sunt.
                        Facilis, animi ducimus corrupti impedit culpa labore?
                        <a href='#' target='_parent' rel='sponsored'>
                          a little donation
                        </a>{' '}
                        to TemplateMo. Please tell your friends about us. Thank
                        you.
                      </p>
                    </Col>
                  </Row>
                </article>
                <article id='tabs-2'>
                  <Row>
                    <Col md={6}>
                      <Image
                        style={{ height: '400px' }}
                        src='assets/images/topnet_1.jpg'
                        alt='img'
                        rounded
                        className=' p-2'
                      />
                    </Col>
                    <Col md={6}>
                      <h4>Top niveau</h4>
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
                    </Col>
                  </Row>
                </article>
                <article id='tabs-3'>
                  <Row>
                    <Col md={6}>
                      <Image
                        rounded
                        style={{ height: '400px' }}
                        src='assets/images/topnet_2.jpg'
                        alt='img'
                        className=' p-2'
                      />
                    </Col>
                    <Col md={6}>
                      <h4>Réunion de qualité</h4>
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
                        </a>
                        now.
                      </p>
                    </Col>
                  </Row>
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
