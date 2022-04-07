import React, { useEffect } from 'react';
import { Card, Col, Row, Image, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStageTest } from '../../../store/questions/quiz/getstage-answerSlice';
import './user-profile.css';

const StagerProfile = ({ userInfo }) => {
  const { results } = useSelector((state) => state.stageTestResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStageTest());
  }, [dispatch]);

  return (
    <div className='main-body'>
      <Row className=' gutters-sm'>
        <Col md={4} className='mb-3'>
          <Card>
            <Card.Body>
              <div className='d-flex flex-column align-items-center text-center'>
                <Image
                  src={
                    userInfo.user.image
                      ? userInfo.user.image
                      : 'https://openclipart.org/download/247319/abstract-user-flat-3.svg'
                  }
                  alt='Admin'
                  className='rounded-circle'
                  width={150}
                />
                <div className='mt-3'>
                  <h4>
                    {userInfo.user.first_name} {userInfo.user.last_name}
                  </h4>
                  <p className='text-secondary mb-1'>stagiaire</p>
                  <p className='text-muted font-size-sm'>
                    {userInfo.user.email}
                  </p>
                </div>
              </div>
              <ListGroup variant='flush'>
                <ListGroup.Item as='h6'>
                  Memeber Since:
                  <span className='float-end'>
                    {userInfo.user.created_at.substring(0, 10)}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item as='h6'>
                  Least Update:
                  <span className='float-end'>
                    {userInfo.user.updated_at.substring(0, 10)}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    className='btn btn-dark col-12'
                    to={`/users/update-stageprofile/${userInfo.user._id}`}
                  >
                    Edit Profile
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <div className='card mb-3'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-sm-3'>
                  <h6 className='mb-0'>Full Name</h6>
                </div>
                <Col sm={9}>
                  {userInfo.user.first_name} {userInfo.user.last_name}
                </Col>
              </div>
              <hr />
              <Row>
                <Col sm={3} className='col-sm-3'>
                  <h6 className='mb-0'>Email</h6>
                </Col>
                <Col sm={9}>{userInfo.user.email}</Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3} className='col-sm-3'>
                  <h6 className='mb-0'>Phone</h6>
                </Col>
                <Col sm={9}>{userInfo.user.phone}</Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3} className='col-sm-3'>
                  <h6 className='mb-0'>Domaine</h6>
                </Col>
                <Col sm={9}>{userInfo.user.domaine}</Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3} className='col-sm-3'>
                  <h6 className='mb-0'>Cin</h6>
                </Col>
                <Col sm={9}>{userInfo.user.cin}</Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3} className='col-sm-3'>
                  <h6 className='mb-0'>Niveau</h6>
                </Col>
                <Col sm={9}>{userInfo.user.niveau}</Col>
              </Row>
              <hr />
              <Row>
                <Col sm={3} className='col-sm-3'>
                  <h6 className='mb-0'>Passport</h6>
                </Col>
                <Col sm={9}>{userInfo.user.passport}</Col>
              </Row>
            </div>
          </div>
        </Col>
        <Row className=' gutters-sm'>
          {results.length === 0 ? null : (
            <Col md={10} className=' mb-3'>
              <Card>
                <Card.Body>
                  <h6 className='d-flex align-items-center mb-3'>
                    <i className='material-icons text-info mr-2'>
                      Test psychotechnique results
                    </i>
                  </h6>
                  {results.map((result) => (
                    <div key={result._id}>
                      <small>{result.categories}</small>
                      <small
                        className={`float-md-end ${
                          result.result ? 'text-success' : 'text-danger'
                        }`}
                      >
                        {result.score}/10{' '}
                        {result.result ? 'Aproved' : 'Rejected'}
                      </small>
                      <div className='progress mb-3' style={{ height: '5px' }}>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{ width: `${result.score}0%` }}
                          aria-valuenow={result.score * 10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Row>
    </div>
  );
};

export default StagerProfile;
