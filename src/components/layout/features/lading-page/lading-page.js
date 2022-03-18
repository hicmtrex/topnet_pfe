import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Courses from '../courses/courses';
import './lading-page.css';

const Features = () => {
  const [courseShow, setCourseShow] = useState(false);
  const [classShow, setClassShow] = useState(false);
  const [realShow, setRealShow] = useState(false);

  const ShowToggle = () => {
    setCourseShow(true);
  };

  const hideToggle = () => {
    setCourseShow(false);
  };
  return (
    <>
      <section id='features' className='features'>
        <Container>
          <Row>
            <Col lg={4} md={12}>
              <div className='features-post'>
                <div
                  className='features-content'
                  onMouseEnter={ShowToggle}
                  onMouseLeave={hideToggle}
                >
                  <div className='content-show'>
                    <h4>
                      <i className='fas fa-chalkboard-teacher' />
                      All Courses
                    </h4>
                  </div>
                  {courseShow && (
                    <div className='content__toggle'>
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu,
                        lobortis mi. In mollis eros a posuere imperdiet. Donec
                        maximus elementum ex. Cras convallis ex rhoncus, laoreet
                        libero eu, vehicula libero.
                      </p>
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu,
                        lobortis mi. In mollis eros a posuere imperdiet.
                      </p>
                      <div className='scroll-to-section'>
                        <a href='#section2'>More Info.</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className='features-post second-features'>
                <div
                  className='features-content'
                  onMouseEnter={() => setClassShow(true)}
                  onMouseLeave={() => setClassShow(false)}
                >
                  <div className='content-show'>
                    <h4>
                      <i className='fa fa-graduation-cap' />
                      Virtual Class
                    </h4>
                  </div>
                  {classShow && (
                    <div>
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu,
                        lobortis mi. In mollis eros a posuere imperdiet. Donec
                        maximus elementum ex. Cras convallis ex rhoncus, laoreet
                        libero eu, vehicula libero.
                      </p>
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu,
                        lobortis mi. In mollis eros a posuere imperdiet.
                      </p>
                      <div className='scroll-to-section'>
                        <a href='#section3'>Details</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className='features-post third-features'>
                <div
                  className='features-content'
                  onMouseEnter={() => setRealShow(true)}
                  onMouseLeave={() => setRealShow(false)}
                >
                  <div className='content-show'>
                    <h4>
                      <i className='fa fa-book' />
                      Real Meeting
                    </h4>
                  </div>
                  {realShow && (
                    <div>
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu,
                        lobortis mi. In mollis eros a posuere imperdiet. Donec
                        maximus elementum ex. Cras convallis ex rhoncus, laoreet
                        libero eu, vehicula libero.
                      </p>
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu,
                        lobortis mi. In mollis eros a posuere imperdiet.
                      </p>
                      <div className='scroll-to-section'>
                        <a href='#section4'>Read More</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Courses />
    </>
  );
};

export default Features;
