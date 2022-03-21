import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Layout from '../../../../components/layout/layout';
import FormContainer from '../../../../components/UI/form-container';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmEmail } from '../../../../store/stages/confirm-emailSlice';

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(confirmEmail({ email }));
    navigate('/stages/auth-reset-password');
  };

  return (
    <Layout>
      <FormContainer title={'Login your account'}>
        <Card className=' border-0 '>
          <Card.Body>
            <Row className='justify-content-center'>
              <Col lg={6}>
                <div className='p-5'>
                  <div className='mb-5'>
                    <h3 className='h4 font-weight-bold'>Reset your Password</h3>
                  </div>

                  <Form onSubmit={onSubmit}>
                    <Form.Group controlId='email'>
                      <Form.Label>Your Email</Form.Label>
                      <div className='d-flex'>
                        <Form.Control
                          type='email'
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          placeholder='Enter your email'
                          required
                        />
                        <RiLockPasswordFill size={'2.5rem'} />
                      </div>
                    </Form.Group>

                    <Button type='submit' className='col-11 mt-3'>
                      Confirm
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </FormContainer>
    </Layout>
  );
};

export default ConfirmEmail;
