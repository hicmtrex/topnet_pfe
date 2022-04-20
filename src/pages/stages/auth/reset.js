import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import FormContainer from '../../../components/UI/form-container';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { stagerLogin } from '../../../store/stages/stage-loginSlice';
import './stage-auth.css';
import { LOCAL_STORAGE } from '../../../utils/help-api';
import toast from 'react-hot-toast';

const reset = () => {
  const { userInfo } = useSelector((state) => state.stageLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const resetHandler = (e) => {           
    e.preventDefault();
    dispatch(stagerLogin({  password }));
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
      <FormContainer title={'reset mot de passe'}>
        <Card className=' container '>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <div className='p-5'>
                  <div className='mb-5'>
                    <h3 className='h4 font-weight-bold'>changer mot de passe </h3>
                  </div>
                  <h6 className='h5 mb-0'>changer votre mot de passe </h6>
                 
                  <Form onSubmit={resetHandler}>
                  <Form.Group controlId='password'>
                      <Form.Label>Password </Form.Label>
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
                    </Form.Group>
                    <Form.Group controlId='password2'>
                      <Form.Label>Confirmer Votre Mote de Passe</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          type='password2'
                          placeholder='*******'
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          required
                        />
                        <RiLockPasswordFill size={'2.5rem'} />
                      </div>
                    </Form.Group>
                    <Button type='submit' className='col-11 mt-3'>
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

       
      </FormContainer>
    </Layout>
  );
};

export default reset