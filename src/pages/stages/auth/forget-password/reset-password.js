import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../../components/layout/layout';
import FormContainer from '../../../../components/UI/form-container';
import { setError } from '../../../../utils/help-api';

const ResetPassword = () => {
  const { credentials } = useSelector((state) => state.emailConfirm);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/api/password/reset',
        {
          email: credentials.user.email,
          token: credentials.token,
          password: password,
          password_confirmation: password2,
        },
        {
          headers: {
            Accpet: 'application/json',
            Authorization: `Bearer ${credentials.token}`,
          },
        }
      );
      if (res.data) {
        toast.success('Password has been successfully changed');
        navigate('/stages/auth-login');
      }
    } catch (error) {
      return toast.error(setError(error));
    }
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
                    <Form.Group controlId='password'>
                      <Form.Label>New Password</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          type='password'
                          placeholder='*******'
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          value={password}
                        />
                        <RiLockPasswordFill size={'2.5rem'} />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='confirm_password'>
                      <Form.Label>Repeat New Password</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          type='password'
                          placeholder='*******'
                          onChange={(e) => setPassword2(e.target.value)}
                          value={password2}
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

export default ResetPassword;
