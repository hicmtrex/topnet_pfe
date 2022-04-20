import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import { FaUserPlus } from 'react-icons/fa';
import { MdAlternateEmail, MdOutlineDomain } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { HiIdentification } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../../store/users/add-userSlice';
import toast from 'react-hot-toast';

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cin: '',
    password: '',
    password2: '',
    domaine: '0',
  });

  const { firstName, lastName, email, password, password2, cin, domaine } =
    formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('password not match!');
      return;
    }
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      cin.trim() === ''
    ) {
      toast.error('invalid input!');
      return;
    }

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: password2,
      cin,
      domaine,
    };

    dispatch(createUser(newUser));
    navigate('/admin/users-list');
  };

  return (
    <DashboardLayout>
      <Container>
        <Row className='justify-content-md-center '>
          <h1 className='text-center mb-2'>
            Ajouter Utilisateur <FaUserPlus className='mx-2' size='2rem' />
          </h1>

          <Col md={6} className='shadow  main__bg-color rounded '>
            <Form onSubmit={onSubmit} className='p-5'>
              <Form.Group controlId='firstName'>
                <Form.Label>Prénom</Form.Label>
                <div className='d-flex'>
                  <Form.Control
                    type='text'
                    placeholder='Enter email'
                    name='firstName'
                    value={firstName}
                    onChange={onChange}
                    required
                  />

                  <FaUserAlt size={'2.5rem'} className='ms-2' />
                </div>
              </Form.Group>
              <Form.Group controlId='lastName'>
                <Form.Label>Nom</Form.Label>
                <div className='d-flex'>
                  <Form.Control
                    type='text'
                    name='lastName'
                    placeholder='Enter email'
                    value={lastName}
                    onChange={onChange}
                    required
                  />

                  <FaUserAlt size={'2.5rem'} className='ms-2' />
                </div>
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Adresse Mail</Form.Label>
                <div className='d-flex'>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    required
                  />

                  <MdAlternateEmail size={'2.5rem'} className='ms-2' />
                </div>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label className='mb-2'>Mot de Passe </Form.Label>
                <div className='d-flex'>
                  <Form.Control
                    type='password'
                    name='password'
                    placeholder='********'
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <RiLockPasswordFill size={'2.5rem'} className='ms-2' />
                </div>
              </Form.Group>
              <Form.Group controlId='password2'>
                <Form.Label>Confirmer Mot de passe</Form.Label>
                <div className='d-flex'>
                  <Form.Control
                    type='password'
                    placeholder='********'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    required
                  />
                  <RiLockPasswordFill size={'2.5rem'} className='ms-2' />
                </div>
              </Form.Group>
              <Form.Group controlId='cin'>
                <Form.Label>Cin</Form.Label>
                <div className='d-flex'>
                  <Form.Control
                    type='number'
                    name='cin'
                    placeholder='Enter Cin'
                    value={cin}
                    onChange={onChange}
                    required
                  />
                  <HiIdentification size={'2.5rem'} className='ms-2' />
                </div>
              </Form.Group>

              <Form.Group controlId='domaine'>
                <Form.Label>Domaine (optionnel)</Form.Label>
                <div className='d-flex'>
                  <Form.Select
                    name='domaine'
                    value={domaine}
                    onChange={onChange}
                  >
                    <option value='informatique'>Informatique</option>
                    <option value='télécommunications'>
                      Télécommunications
                    </option>
                    <option value='business intelligence'>
                      Business intelligence
                    </option>
                    <option value='informatique'>Informatique</option>
                    <option value='informatique'>Informatique</option>
                    <option value='informatique'>Informatique</option>
                  </Form.Select>
                  <MdOutlineDomain size={'2.5rem'} className='ms-2' />
                </div>
              </Form.Group>

              <Button type='submit' className='mt-5 col-11'>
                Envoyer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default AddUser;
