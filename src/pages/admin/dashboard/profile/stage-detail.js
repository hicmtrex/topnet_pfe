import React, { useEffect } from 'react';
import { Col, Row, Card, Button, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../../components/UI/loader';
import Layout from '../../../../components/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getStageDetail } from '../../../../store/stages/admin/stager-detailSlice';

const StagerDetail = () => {
  const { loading, stage } = useSelector((state) => state.stageDetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStageDetail(id));
  }, [id, dispatch]);

  return (
    <Layout>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      {loading ? (
        <Loader />
      ) : (
        <div className='main-body'>
          <Row className=' gutters-sm'>
            <Col md={4} className='mb-3'>
              <Card>
                <Card.Body>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <Image
                      src='https://bootdey.com/img/Content/avatar/avatar7.png'
                      alt='Admin'
                      className='rounded-circle'
                      width={150}
                    />
                    <div className='mt-3'>
                      <h4>
                        {stage?.first_name} {stage?.last_name}
                      </h4>
                      <p className='text-secondary mb-1'>{stage?.domaine}</p>
                      <p className='text-muted font-size-sm'>{stage?.email}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <div className='card mt-3'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                    <h6 className='mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-globe mr-2 icon-inline'
                      >
                        <circle cx={12} cy={12} r={10} />
                        <line x1={2} y1={12} x2={22} y2={12} />
                        <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
                      </svg>
                      Website
                    </h6>
                    <span className='text-secondary'>https://bootdey.com</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                    <h6 className='mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-github mr-2 icon-inline'
                      >
                        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                      </svg>
                      Github
                    </h6>
                    <span className='text-secondary'>bootdey</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                    <h6 className='mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-twitter mr-2 icon-inline text-info'
                      >
                        <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
                      </svg>
                      Twitter
                    </h6>
                    <span className='text-secondary'>@bootdey</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                    <h6 className='mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-instagram mr-2 icon-inline text-danger'
                      >
                        <rect
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={5}
                          ry={5}
                        />
                        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                        <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
                      </svg>
                      Instagram
                    </h6>
                    <span className='text-secondary'>bootdey</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                    <h6 className='mb-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-facebook mr-2 icon-inline text-primary'
                      >
                        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                      </svg>
                      Facebook
                    </h6>
                    <span className='text-secondary'>bootdey</span>
                  </li>
                </ul>
              </div>
            </Col>
            <div className='col-md-8'>
              <div className='card mb-3'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Full Name</h6>
                    </div>
                    <Col sm={9}>
                      {stage?.first_name} {stage?.last_name}
                    </Col>
                  </div>
                  <hr />
                  <div className='row'>
                    <Col sm={3} className='col-sm-3'>
                      <h6 className='mb-0'>Email</h6>
                    </Col>
                    <Col sm={9}>{stage?.email}</Col>
                  </div>
                  <hr />
                  <Row className='row'>
                    <Col sm={3} className='col-sm-3'>
                      <h6 className='mb-0'>Phone</h6>
                    </Col>
                    <Col sm={9}>{stage?.phone}</Col>
                  </Row>
                  <hr />
                  <Row className='row'>
                    <Col sm={3} className='col-sm-3'>
                      <h6 className='mb-0'>Domaine</h6>
                    </Col>
                    <Col sm={9}>{stage?.domaine}</Col>
                  </Row>
                  <hr />
                  <Row className='row'>
                    <Col sm={3} className='col-sm-3'>
                      <h6 className='mb-0'>Cin</h6>
                    </Col>
                    <Col sm={9}>{stage?.cin}</Col>
                  </Row>
                  <hr />
                  <Row className='row'>
                    <Col sm={3} className='col-sm-3'>
                      <h6 className='mb-0'>Niveau</h6>
                    </Col>
                    <Col sm={9}>{stage?.niveau}</Col>
                  </Row>
                  <hr />
                  <Row className='row'>
                    <Col sm={3} className='col-sm-3'>
                      <h6 className='mb-0'>Role</h6>
                    </Col>
                    <Col sm={9}>{stage?.phone}</Col>
                  </Row>
                  <hr />
                </div>
              </div>
              <div className='row gutters-sm'>
                <div className='col-sm-6 mb-3'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <h6 className='d-flex align-items-center mb-3'>
                        <i className='material-icons text-info mr-2'>
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '80%' }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Website Markup</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '72%' }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>One Page</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '89%' }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Mobile Template</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '55%' }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Backend API</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '66%' }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 mb-3'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <h6 className='d-flex align-items-center mb-3'>
                        <i className='material-icons text-info mr-2'>
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '80%' }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Website Markup</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '72%' }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>One Page</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '89%' }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Mobile Template</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '55%' }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Backend API</small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: '66%' }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      )}
    </Layout>
  );
};

export default StagerDetail;
