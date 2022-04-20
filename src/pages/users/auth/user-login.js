import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import FormContainer from '../../../components/UI/form-container';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../components/layout/layout';
import { userLogin } from '../../../store/users/user-loginSlice';
import Title from '../../../components/UI/typography/title';

const UserLogin = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  useEffect(() => {
    if (userInfo?.user.status === true) {
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
                  <div className='mb-5'>
                    <Title title="S'identifier" message='votre compte' />{' '}
                  </div>

                  <p className='text-muted mt-2 mb-5'>Admin Dashboard</p>
                  <Form onSubmit={loginHandler}>
                    <Form.Group className='email' controlId='email'>
                      <Form.Label>Email</Form.Label>
                      <div className='input-group mb-3'>
                        <span className='input-group-text' id='basic-addon1'>
                          @Topnet/
                        </span>
                        <Form.Control
                          type='email'
                          placeholder='Enter email'
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='password'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='*******'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />

                      <Link
                        to='/admin/auth-confirm-email'
                        className='float-end mt-1'
                      >
                        Mot de Passe Oublié ?
                      </Link>
                    </Form.Group>
                    <Button
                      type='submit'
                      variant='warning'
                      className='w-full mt-3 '
                    >
                      Identifier
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
          {/* end card-body */}
        </Card>
      </FormContainer>
    </Layout>
  );
};

export default UserLogin;
