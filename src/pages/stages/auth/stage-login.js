import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import FormContainer from '../../../components/UI/form-container';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { stagerLogin } from '../../../store/stages/stage-loginSlice';
import './stage-auth.css';
import { LOCAL_STORAGE } from '../../../utils/help-api';
import toast from 'react-hot-toast';
import { GoSignIn } from 'react-icons/go';

const StageLogin = () => {
  const { userInfo } = useSelector((state) => state.stageLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(stagerLogin({ email, password }));
  };
  useEffect(() => {
    if (userInfo?.user.status === false) {
      localStorage.removeItem(LOCAL_STORAGE.auth);
      return toast.error('Your Account is deactivated!');
    } else if (userInfo?.user.status === true) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  return (
    <Layout>
      <FormContainer title={'Login your account'}>
        <Card className=' border-0 '>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <div className='p-5'>
                  <div className='mb-5'>
                    <h2 className='font-weight-bold'>
                      Login your account
                      <span className='ms-5'>
                        <GoSignIn size='2.5rem' />
                      </span>
                    </h2>
                  </div>
                  <h6 className='h5 mb-0'>Just Do Register.</h6>
                  <p className='text-muted mt-2 mb-5'>
                    If You Really Want To Know, Look In The Register.
                  </p>
                  <Form onSubmit={loginHandler}>
                    <Form.Group controlId='email'>
                      <Form.Label>Email</Form.Label>
                      <div className='d-flex'>
                        <Form.Control
                          type='email'
                          placeholder='Enter email'
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                        <MdAlternateEmail size={'2.5rem'} />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='password'>
                      <Form.Label>Password</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          type='password'
                          placeholder='*******'
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          required
                        />
                        <RiLockPasswordFill size={'2.5rem'} />
                      </div>
                      <Link
                        to='/stages/auth-email-confirm'
                        className='float-end mt-1'
                      >
                        forgot password?
                      </Link>
                    </Form.Group>
                    <Button type='submit' className='col-11 mt-3'>
                      Login
                    </Button>
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
          Don't have an account?{' '}
          <Link to='/stages/auth-register' className='text-primary ml-1'>
            Register
          </Link>
        </p>
      </FormContainer>
    </Layout>
  );
};

export default StageLogin;
