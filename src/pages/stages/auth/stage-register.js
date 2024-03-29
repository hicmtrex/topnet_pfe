import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import { FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetErrorRegister,
  stagerRegister,
} from '../../../store/stages/stage-register';
import './stage-auth.css';
import Title from '../../../components/UI/typography/title';
import Message from '../../../components/UI/Message';

const StageRegister = () => {
  const { userInfo } = useSelector((state) => state.stageLogin);
  const { success, error } = useSelector((state) => state.stageRegister);
  const [image, setImage] = useState();
  const [selectedCin, setSelectedCin] = useState('Cin');
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cin: '',
    niveau: 'licence',
    passport: '',
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
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    }

    setValidated(true);
    const data = new FormData();
    data.append('first_name', firstName);
    data.append('last_name', firstName);
    image && data.append('image', image);
    data.append('email', email);
    data.append('password', password);
    data.append('password_confirmation', password2);
    data.append('niveau', niveau);
    selectedCin === 'Cin'
      ? data.append('cin', cin)
      : data.append('passport', passport);

    dispatch(stagerRegister(data));
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
    if (success) {
      navigate('/stages/auth-login');
    }
  }, [userInfo, success]);

  return (
    <Layout>
      <Row className='shadow rounded bg-white pb-2 '>
        <Card className=' border-0 '>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <div className='p-2'>
                  <div className='mb-5 d-flex align-items-center'>
                    <Title title='Inscrire' message='gratuite' />
                    <FaUserPlus size='2.5rem' className='ms-5' />
                  </div>
                  {error && (
                    <Message
                      onClose={() => dispatch(resetErrorRegister())}
                      variant={'danger'}
                    >
                      {error}
                    </Message>
                  )}
                  <Form
                    noValidate
                    validated={validated}
                    className='form__register'
                    onSubmit={onSubmit}
                  >
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId='firstName'>
                          <Form.Label>Prénom</Form.Label>

                          <Form.Control
                            type='text'
                            placeholder='Enter first name'
                            onChange={onChange}
                            name='firstName'
                            value={firstName}
                            required
                          />
                          <Form.Control.Feedback>
                            Cela semble bon!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='lastName'>
                          <Form.Label>Nom</Form.Label>

                          <Form.Control
                            type='text'
                            name='lastName'
                            placeholder='Enter email'
                            onChange={onChange}
                            value={lastName}
                            required
                          />
                          <Form.Control.Feedback>
                            Cela semble bon!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId='firstName'>
                          <Form.Label>Cin/Passport</Form.Label>

                          <Form.Select
                            onClick={(e) => setSelectedCin(e.target.value)}
                          >
                            <option value='Cin'>Cin</option>
                            <option value='Passport'>Passport</option>
                          </Form.Select>
                          <Form.Control.Feedback>
                            Cela semble bon!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={8}>
                        <Form.Group controlId='lastName'>
                          <Form.Label>{selectedCin}</Form.Label>

                          <Form.Control
                            type='text'
                            name={selectedCin === 'Cin' ? 'cin' : 'passport'}
                            className='py-3'
                            placeholder={
                              selectedCin === 'Cin'
                                ? 'Enter Cin Number'
                                : 'Eneter Passport Number'
                            }
                            onChange={onChange}
                            value={selectedCin === 'Cin' ? cin : passport}
                            required
                          />
                          <Form.Control.Feedback>
                            Cela semble bon!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
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
                          <Form.Control.Feedback type='invalid'>
                            Veuillez choisir une adresse e-mail valide.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Form.Group controlId='password'>
                        <Form.Label>Mot de Passe</Form.Label>

                        <Form.Control
                          type='password'
                          name='password'
                          placeholder='********'
                          onChange={onChange}
                          value={password}
                          required
                        />
                        <Form.Control.Feedback type='invalid'>
                          Veuillez choisir une adresse e-mail valide.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId='password2'>
                        <Form.Label>Confirmer Mote de Passe</Form.Label>

                        <Form.Control
                          type='password'
                          name='password2'
                          placeholder='********'
                          onChange={onChange}
                          value={password2}
                          required
                        />
                        <Form.Control.Feedback type='invalid'>
                          Veuillez choisir un mot de passe valide
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Col md={6}>
                        <Form.Group controlId='image'>
                          <Form.Label>Image (Optinal)</Form.Label>
                          <Form.Control
                            type='file'
                            onChange={(e) => setImage(e.target.files[0])}
                            name='image'
                            required
                          />
                          <Form.Control.Feedback>
                            Cela semble bon!
                          </Form.Control.Feedback>
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
                            <option value='bts'>Bts</option>
                            <option value='licence'>Licence</option>
                            <option value='ingénierie'>Ingénierie</option>
                            <option value='master'>Master</option>
                            <Form.Control.Feedback>
                              Cela semble bon!
                            </Form.Control.Feedback>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      {/* 
                      <Col md={6}>
                        <Form.Group controlId='phone'>
                          <Form.Label>Téléphone</Form.Label>
                          <Form.Control
                            type='number'
                            name='phone'
                            placeholder='phone number'
                            onChange={onChange}
                            value={phone}
                            required
                          />
                          <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId='domaine'>
                          <Form.Label>Domaine</Form.Label>
                          <Form.Select
                            onChange={onChange}
                            value={domaine}
                            name='domaine'
                            required
                          >
                            <option value='Developpeur web'>
                              Développeur web
                            </option>
                            <option value='Technicien en informatique'>
                              Technicien en informatique
                            </option>
                            <option value='Reseaux et telecommunications'>
                              Reseaux et Telecommunications
                            </option>
                            <option value='Sécurité du réseau'>
                              Sécurité du réseau
                            </option>
                            <option value='Data analyst'>Data analyst</option>
                            <option value=' Developpeur web'>
                              Développeur Mobile
                            </option>
                            <option value=' Ux/Ui Design'>Ux/Ui Design</option>
                            <option value=' Finance Sara Management'>
                              Finance Management
                            </option>
                            <option value='Administration de server '>
                              Administration de server
                            </option>

                            <option value='Marketing '>Marketing</option>
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                
                      <Col md={6}>
                        <Form.Group controlId='firstName'>
                          <Form.Label>Image (Optinal)</Form.Label>
                          <Form.Control
                            type='file'
                            onChange={(e) => setImage(e.target.files[0])}
                            name='image'
                            required
                          />
                          <Form.Control.Feedback>
                            Cela semble bon!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col> */}
                      <Button
                        variant='warning'
                        type='submit'
                        className='col-12 mt-3'
                      >
                        S'inscrire
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
          Vous avez déja un Compte ?{' '}
          <Link to='/stages/auth-login' className='text-warning ml-1'>
            Se Connecter
          </Link>
        </p>
      </Row>
    </Layout>
  );
};

export default StageRegister;
