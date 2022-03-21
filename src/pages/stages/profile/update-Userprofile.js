import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Image, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../components/layout/layout';
import Loader from '../../../components/UI/loader';
import { stageLogout } from '../../../store/stages/stage-loginSlice';
import { getUserDetail } from '../../../store/users/user-detailSlice';
import { userLogout } from '../../../store/users/user-loginSlice';
import adminAxios, { setError } from '../../../utils/help-api';

const UpdateUserProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userDetail);
  const { userInfo } = useSelector((state) => state.userLogin);
  const [firstName, setFirstName] = useState(userInfo?.user.first_name);
  const [lastName, setLastName] = useState(userInfo?.user.last_name);
  const [email, setEmail] = useState(userInfo?.user.email);
  const [domaine, setDomaine] = useState(userInfo?.user.domaine);
  const [cin, setCin] = useState(userInfo?.user.cin);

  const updateUser = async (user) => {
    try {
      const res = await adminAxios.put(`/users/${user.id}`, user);

      if (res.data) {
        toast.success('your account has been updated please login again');
        setTimeout(() => {
          dispatch(stageLogout());
          dispatch(userLogout());
        }, 1500);
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser({
      id,
      first_name: firstName,
      last_name: lastName,
      cin,
      email,
      domaine,
    });
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [id, dispatch]);

  return (
    <Layout>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      {loading ? (
        <Loader />
      ) : (
        <Row
          className=' mt-2 rounded p-5'
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

                <Form.Control
                  className='btn btn-primary col-2 col-md-2 '
                  type='file'
                />
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
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
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
                          type='text'
                          placeholder='Enter your Last Name'
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
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
                          type='email'
                          placeholder='Enter your email address'
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-3'>
                        <label className='small mb-1' htmlFor='cin'>
                          Cin
                        </label>
                        <Form.Control
                          className='form-control'
                          id='cin'
                          type='number'
                          placeholder='Enter your email address'
                          onChange={(e) => setCin(e.target.value)}
                          value={cin}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* Form Row*/}
                  <Row className=' gx-3 mb-3'>
                    {userInfo.user.domaine && (
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <label className='small mb-1' htmlFor='domaine'>
                            Domaine
                          </label>
                          <Form.Select
                            name='domaine'
                            id='domaine'
                            onChange={(e) => setDomaine(e.target.value)}
                            value={domaine}
                            required
                          >
                            <option value=' Developpeur web'>
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

                            <option value='Marketing '>Mrketing</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    )}
                  </Row>
                  {/* Save changes button*/}
                  <Button type='submit'>Save changes</Button>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default UpdateUserProfile;
