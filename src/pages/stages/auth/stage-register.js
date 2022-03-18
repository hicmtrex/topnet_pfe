import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import { FaUserPlus } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { stagerLogin } from '../../../store/stages/stage-loginSlice';
import './stage-auth.css';
import { stagerRegister } from '../../../store/stages/stage-register';

const StageRegister = () => {
  const { userInfo } = useSelector((state) => state.stageLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cin: '',
    passport: '',
    niveau: 'bac',
    domaine: '',
    password: '',
    password2: '',
  });
  const {
    firstName,
    lastName,
    email,
    password,
    password2,
    cin,
    passport,
    phone,
    domaine,
    niveau,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: password2,
      cin,
      passport,
      phone,
      domaine,
      niveau,
    };
    dispatch(stagerRegister(newUser));
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo]);

  return (
    <Layout>
      <Row className='shadow rounded bg-white pb-2 '>
        <Card className=' border-0 '>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <div className='p-2'>
                  <div className='mb-5'>
                    <h2 className='font-weight-bold'>
                      Register for free
                      <span className='ms-5'>
                        <FaUserPlus size='2.5rem' />
                      </span>
                    </h2>
                  </div>

                  <Form className='form__register' onSubmit={onSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId='firstName'>
                          <Form.Label>First Name</Form.Label>

                          <Form.Control
                            type='text'
                            placeholder='Enter first name'
                            onChange={onChange}
                            name='firstName'
                            value={firstName}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='lastName'>
                          <Form.Label>Last Name</Form.Label>

                          <Form.Control
                            type='text'
                            name='lastName'
                            placeholder='Enter email'
                            onChange={onChange}
                            value={lastName}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='email'>
                          <Form.Label>Email</Form.Label>

                          <Form.Control
                            type='email'
                            name='email'
                            placeholder='Enter email'
                            onChange={onChange}
                            value={email}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='cin'>
                          <Form.Label>Cin</Form.Label>

                          <Form.Control
                            type='number'
                            name='cin'
                            placeholder='Enter Cin'
                            onChange={onChange}
                            value={cin}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='cin'>
                          <Form.Label>Password</Form.Label>

                          <Form.Control
                            type='password'
                            name='password'
                            placeholder='********'
                            onChange={onChange}
                            value={password}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='cin'>
                          <Form.Label>Password Confirmation</Form.Label>

                          <Form.Control
                            type='password'
                            name='password2'
                            placeholder='********'
                            onChange={onChange}
                            value={password2}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='cin'>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type='number'
                            name='phone'
                            placeholder='phone number'
                            onChange={onChange}
                            value={phone}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='cin'>
                          <Form.Label>Passport (optinal)</Form.Label>

                          <Form.Control
                            type='number'
                            name='passport'
                            placeholder='passport id'
                            onChange={onChange}
                            value={passport}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='cin'>
                          <Form.Label>Domaine</Form.Label>
                          <Form.Select
                            onChange={onChange}
                            value={domaine}
                            name='domaine'
                            required
                          >
                            <option value='informatique'>Informatique</option>
                            <option value='télécommunications'>
                              Télécommunications
                            </option>
                            <option value='business intelligence'>
                              Business intelligence
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='cin'>
                          <Form.Label>Niveau</Form.Label>

                          <Form.Select
                            onChange={onChange}
                            value={niveau}
                            name='niveau'
                            required
                          >
                            <option value='btp'>Btp</option>
                            <option value='bac'>Bac</option>
                            <option value='bts'>Bts</option>
                            <option value='licence'>Licence</option>
                            <option value='ingénierie'>Ingénierie</option>
                            <option value='master'>Master</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Button
                        variant='secondary'
                        type='submit'
                        className='col-12 mt-3'
                      >
                        Register
                      </Button>
                    </Row>
                  </Form>
                </div>
              </Col>
              <div className='col-lg-6 d-none d-lg-inline-block'>
                <div className='account-block rounded-right'>
                  <div className='overlay rounded-right' />
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>

        <p className='text-muted text-center mt-3 mb-0'>
          Already have an account?{' '}
          <Link to='/stages/auth-login' className='text-primary ml-1'>
            Login
          </Link>
        </p>
      </Row>
    </Layout>
  );
};

export default StageRegister;
