import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout';

const HomePage = () => {
  return (
    <Layout>
      <Row className=' justify-content-center text-center mt-5 pt-5 mb-3'>
        <div className='col-xl-6 col-lg-8 col-sm-10'>
          <h1 className='font-weight-bold'>
            Subjects <br />
          </h1>
          <p className='text-muted mb-0'>
            We bring the results while helping you achieve cost and time savings
            without taking on risk or management overhead.
          </p>
        </div>
      </Row>
      <Row
        className=' row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center px-xl-6 aos-init aos-animate'
        data-aos='fade-up'
      >
        <Col className=' my-3'>
          <Link to='/questions/quiz'>
            <Card className=' border-hover-primary hover-scale'>
              <Card.Body>
                <div className='text-primary mb-5'>
                  <img
                    width={60}
                    src='/assets/icons/test-tube-science-svgrepo-com.svg'
                    alt=''
                  />
                </div>
                <h6 className='font-weight-bold mb-3'>Frontend Devloper </h6>
                <p className='text-muted mb-0'>
                  Embed holistics charts directly to your application
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className=' my-3'>
          <Link to='/'>
            <Card className=' border-hover-primary hover-scale'>
              <Card.Body>
                <div className='text-primary mb-5'>
                  <img
                    width={60}
                    src='/assets/icons/test-tube-science-svgrepo-com.svg'
                    alt=''
                  />
                </div>
                <h6 className='font-weight-bold mb-3'>Backend Devloper</h6>
                <p className='text-muted mb-0'>
                  Embed holistics charts directly to your application
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className=' my-3'>
          <Link to='/'>
            <Card className=' border-hover-primary hover-scale'>
              <Card.Body>
                <div className='text-primary mb-5'>
                  <img
                    width={60}
                    src='/assets/icons/test-tube-science-svgrepo-com.svg'
                    alt=''
                  />
                </div>
                <h6 className='font-weight-bold mb-3'>Full Stack Devloper</h6>
                <p className='text-muted mb-0'>
                  Embed holistics charts directly to your application
                </p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col className=' my-3'>
          <Card className=' border-hover-primary hover-scale'>
            <Card.Body>
              <div className='text-primary mb-5'>
                <svg
                  width={60}
                  height={60}
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'
                  >
                    <rect x={0} y={0} width={24} height={24} />
                    <path
                      d='M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z'
                      fill='currentColor'
                      opacity='0.3'
                    />
                    <path
                      d='M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z'
                      fill='currentColor'
                    />
                  </g>
                </svg>
              </div>
              <h6 className='font-weight-bold mb-3'>Reseaux Informatique</h6>
              <p className='text-muted mb-0'>
                Embed holistics charts directly to your application
              </p>
            </Card.Body>
          </Card>
        </Col>
        <div className='col my-3'>
          <div className='card border-hover-primary hover-scale'>
            <div className='card-body'>
              <div className='text-primary mb-5'>
                <svg
                  width={60}
                  height={60}
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'
                  >
                    <rect x={0} y={0} width={24} height={24} />
                    <path
                      d='M3.73851648,19 L8.5,19 C8.77614237,19 9,18.7761424 9,18.5 L9,6.5962912 C9,6.32014883 8.77614237,6.0962912 8.5,6.0962912 C8.29554771,6.0962912 8.11169333,6.22076667 8.03576165,6.41059586 L3.27427814,18.3143047 C3.17172143,18.5706964 3.29642938,18.8616816 3.55282114,18.9642383 C3.61188128,18.9878624 3.67490677,19 3.73851648,19 Z'
                      fill='currentColor'
                      opacity='0.3'
                    />
                    <path
                      d='M15.7385165,19 L20.5,19 C20.7761424,19 21,18.7761424 21,18.5 L21,6.5962912 C21,6.32014883 20.7761424,6.0962912 20.5,6.0962912 C20.2955477,6.0962912 20.1116933,6.22076667 20.0357617,6.41059586 L15.2742781,18.3143047 C15.1717214,18.5706964 15.2964294,18.8616816 15.5528211,18.9642383 C15.6118813,18.9878624 15.6749068,19 15.7385165,19 Z'
                      fill='currentColor'
                      transform='translate(18.000000, 12.500000) scale(-1, 1) translate(-18.000000, -12.500000) '
                    />
                    <rect
                      fill='currentColor'
                      opacity='0.3'
                      x={11}
                      y={2}
                      width={2}
                      height={20}
                      rx={1}
                    />
                  </g>
                </svg>
              </div>
              <h6 className='font-weight-bold mb-3'>UI/UX Design</h6>
              <p className='text-muted mb-0'>
                Embed holistics charts directly to your application
              </p>
            </div>
          </div>
        </div>
        <div className='col my-3'>
          <div className='card border-hover-primary hover-scale'>
            <div className='card-body'>
              <div className='text-primary mb-5'>
                <svg
                  width={60}
                  height={60}
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'
                  >
                    <rect x={0} y={0} width={24} height={24} />
                    <rect
                      fill='currentColor'
                      x={4}
                      y={16}
                      width={4}
                      height={4}
                      rx={1}
                    />
                    <rect
                      fill='currentColor'
                      x={4}
                      y={10}
                      width={4}
                      height={4}
                      rx={1}
                    />
                    <rect
                      fill='currentColor'
                      x={10}
                      y={16}
                      width={4}
                      height={4}
                      rx={1}
                    />
                    <rect
                      fill='currentColor'
                      opacity='0.3'
                      x={10}
                      y={10}
                      width={4}
                      height={4}
                      rx={1}
                    />
                    <rect
                      fill='currentColor'
                      x={4}
                      y={4}
                      width={4}
                      height={4}
                      rx={1}
                    />
                    <rect
                      fill='currentColor'
                      x={16}
                      y={16}
                      width={4}
                      height={4}
                      rx={1}
                    />
                  </g>
                </svg>
              </div>
              <h6 className='font-weight-bold mb-3'>
                Graphics and Logo Design
              </h6>
              <p className='text-muted mb-0'>
                Embed holistics charts directly to your application
              </p>
            </div>
          </div>
        </div>
        <div className='col my-3'>
          <div className='card border-hover-primary hover-scale'>
            <div className='card-body'>
              <div className='text-primary mb-5'>
                <svg
                  width={60}
                  height={60}
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'
                  >
                    <rect x={0} y={0} width={24} height={24} />
                    <path
                      d='M3.5,21 L20.5,21 C21.3284271,21 22,20.3284271 22,19.5 L22,8.5 C22,7.67157288 21.3284271,7 20.5,7 L10,7 L7.43933983,4.43933983 C7.15803526,4.15803526 6.77650439,4 6.37867966,4 L3.5,4 C2.67157288,4 2,4.67157288 2,5.5 L2,19.5 C2,20.3284271 2.67157288,21 3.5,21 Z'
                      fill='currentColor'
                      opacity='0.3'
                    />
                    <path
                      d='M12.6706167,18.7881514 L15.9697449,13.8394592 C16.1995092,13.4948127 16.1063788,13.0291607 15.7617323,12.7993963 C15.6385316,12.7172626 15.4937759,12.673434 15.3457071,12.673434 L12.659208,12.673434 L12.659208,9.69999981 C12.659208,9.28578625 12.3234215,8.94999981 11.909208,8.94999981 C11.6584431,8.94999981 11.4242696,9.07532566 11.2851703,9.28397466 L7.98604212,14.2326669 C7.75627777,14.5773134 7.84940818,15.0429654 8.19405469,15.2727297 C8.31725533,15.3548635 8.4620111,15.398692 8.61007984,15.398692 L11.296579,15.398692 L11.296579,18.3721263 C11.296579,18.7863398 11.6323654,19.1221263 12.046579,19.1221263 C12.2973439,19.1221263 12.5315174,18.9968004 12.6706167,18.7881514 Z'
                      fill='currentColor'
                      opacity='0.3'
                    />
                  </g>
                </svg>
              </div>
              <h6 className='font-weight-bold mb-3'>Project Management</h6>
              <p className='text-muted mb-0'>
                Embed holistics charts directly to your application
              </p>
            </div>
          </div>
        </div>
        <div className='col my-3'>
          <div className='card border-hover-primary hover-scale'>
            <div className='card-body'>
              <div className='text-primary mb-5'>
                <svg
                  width={60}
                  height={60}
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'
                  >
                    <rect x={0} y={0} width={24} height={24} />
                    <path
                      d='M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z'
                      fill='currentColor'
                    />
                    <path
                      d='M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z'
                      fill='currentColor'
                      opacity='0.3'
                    />
                  </g>
                </svg>
              </div>
              <h6 className='font-weight-bold mb-3'>Task management</h6>
              <p className='text-muted mb-0'>
                Embed holistics charts directly to your application
              </p>
            </div>
          </div>
        </div>
        <div className='col mb-0 mt-3 mb-lg-3'>
          <div className='card border-hover-primary hover-scale'>
            <div className='card-body'>
              <div className='text-primary mb-5'>
                <svg
                  width={60}
                  height={60}
                  viewBox='0 0 24 24'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <g
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'
                  >
                    <rect x={0} y={0} width={24} height={24} />
                    <path
                      d='M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z'
                      fill='currentColor'
                      opacity='0.3'
                    />
                    <path
                      d='M14.5,11 C15.0522847,11 15.5,11.4477153 15.5,12 L15.5,15 C15.5,15.5522847 15.0522847,16 14.5,16 L9.5,16 C8.94771525,16 8.5,15.5522847 8.5,15 L8.5,12 C8.5,11.4477153 8.94771525,11 9.5,11 L9.5,10.5 C9.5,9.11928813 10.6192881,8 12,8 C13.3807119,8 14.5,9.11928813 14.5,10.5 L14.5,11 Z M12,9 C11.1715729,9 10.5,9.67157288 10.5,10.5 L10.5,11 L13.5,11 L13.5,10.5 C13.5,9.67157288 12.8284271,9 12,9 Z'
                      fill='currentColor'
                    />
                  </g>
                </svg>
              </div>
              <h6 className='font-weight-bold mb-3'>Cyber Security</h6>
              <p className='text-muted mb-0'>
                Embed holistics charts directly to your application
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Layout>
  );
};

export default HomePage;
