import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import FormContainer from '../../../components/UI/form-container';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetError,
  stagerLogin,
} from '../../../store/stages/stage-loginSlice';
import './stage-auth.css';
import { LOCAL_STORAGE } from '../../../utils/help-api';
import toast from 'react-hot-toast';
import Message from '../../../components/UI/Message';
import Title from '../../../components/UI/typography/title';

const StageLogin = () => {
  const { userInfo, error } = useSelector((state) => state.stageLogin);
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
      <FormContainer>
        <Card className=' border-0 '>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <div className='p-5'>
                  <div className='mb-5 d-flex align-items-center'>
                    <Title title="S'identifier" message='votre compte' />{' '}
                    {/* <GoSignIn size='2.5rem' className='ms-5' /> */}
                  </div>
                  {error && (
                    <Message
                      onClose={() => dispatch(resetError())}
                      variant='danger'
                    >
                      {error}
                    </Message>
                  )}
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
                      <Form.Label>Mot de Passe </Form.Label>
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
                        Mot de Passe Oublié ?
                      </Link>
                    </Form.Group>
                    <Button
                      variant='warning'
                      type='submit'
                      className='col-11 mt-3'
                    >
                      Se Connecter
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
          vous n'avez pas de compte ?{' '}
          <Link to='/stages/auth-register' className='text-warning ml-1'>
            S'inscrire
          </Link>
        </p>
      </FormContainer>
    </Layout>
  );
};

export default StageLogin;
