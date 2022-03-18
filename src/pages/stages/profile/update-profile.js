import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Image, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../components/layout/layout';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    niveau: '',
    domaine: '',
  });

  const { firstName, lastName, email, phone, domaine, niveau } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (domaine.trim() === '' || niveau.trim() === '' || phone.trim() === '') {
      toast.error('invalid input!');
      return;
    }

    navigate(-1);
  };
  useEffect(() => {}, [params]);

  return (
    <Layout>
      <Button onClick={() => navigate(-1)}>Go Back</Button>

      <Row
        className=' mt-2 rounded'
        style={{
          backgroundColor: '  rgba(22, 34, 57, 0.95)',
          color: '#fff',
        }}
      >
        <Col
          xl={4}
          style={{
            backgroundColor: '  rgba(22, 34, 57, 0.95)',
            color: '#fff',
            borderRight: '2px solid #fff',
          }}
        >
          <Card
            className=' mb-4 mb-xl-0 '
            style={{
              backgroundColor: '  rgba(22, 34, 57, 0.95)',
              color: '#fff',
            }}
          >
            <Card.Header>Profile Picture</Card.Header>
            <Card.Body
              className=' text-center '
              style={{
                backgroundColor: '  rgba(22, 34, 57, 0.95)',
                color: '#fff',
              }}
            >
              <Image
                roundedCircle
                className='img-account-profile mb-2'
                src='http://bootdey.com/img/Content/avatar/avatar1.png'
                alt=''
              />

              <div className='small font-italic text-muted mb-4'>
                JPG or PNG no larger than 5 MB
              </div>

              <input className='btn btn-primary' type='file' />
            </Card.Body>
          </Card>
        </Col>
        <Col
          xl={8}
          style={{
            backgroundColor: '  rgba(22, 34, 57, 0.95)',
            color: '#fff',
          }}
        >
          {/* Account details card*/}
          <Card
            className=' mb-4'
            style={{
              backgroundColor: '  rgba(22, 34, 57, 0.95)',
              color: '#fff',
            }}
          >
            <Card.Header>
              <h2 className='text-white'>Account Details</h2>
            </Card.Header>
            <div className='card-body'>
              <Form onSubmit={onSubmit}>
                {/* Form Row*/}
                <Row className=' gx-3 mb-3'>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <label className='small mb-1' htmlFor='firstName'>
                        First name
                      </label>
                      <Form.Control
                        id='firstName'
                        name='firstName'
                        type='text'
                        placeholder='Enter your First Name'
                        onChange={onChange}
                        value={firstName}
                        defaultValue={firstName}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <label className='small mb-1' htmlFor='lastName'>
                        Last name
                      </label>
                      <Form.Control
                        id='lastName'
                        name='lastName'
                        type='text'
                        placeholder='Enter your Last Name'
                        onChange={onChange}
                        value={lastName}
                        defaultValue={lastName}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className=' gx-3 mb-3'>
                  {/* Form Group (email address)*/}
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <label className='small mb-1' htmlFor='email'>
                        Email address
                      </label>
                      <Form.Control
                        className='form-control'
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Enter your email address'
                        onChange={onChange}
                        value={email}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <label className='small mb-1' htmlFor='phone'>
                        Phone
                      </label>
                      <Form.Control
                        id='phone'
                        name='phone'
                        type='number'
                        placeholder='Enter your phone'
                        onChange={onChange}
                        value={phone}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Form Row*/}
                <Row className=' gx-3 mb-3'>
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <label className='small mb-1' htmlFor='domaine'>
                        Domaine
                      </label>
                      <Form.Select
                        name='domaine'
                        id='domaine'
                        onChange={onChange}
                        value={domaine}
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
                  <Col md={6}>
                    <Form.Group className='mb-3'>
                      <label className='small mb-1' htmlFor='niveau'>
                        Niveau
                      </label>
                      <Form.Select
                        name='niveau'
                        id='niveau'
                        onChange={onChange}
                        value={firstName}
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
                </Row>
                {/* Save changes button*/}
                <Button type='submit'>Save changes</Button>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default UpdateProfile;
