import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Image, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../components/layout/layout';
import Loader from '../../../components/UI/loader';
import { stageLogout } from '../../../store/stages/stage-loginSlice';
import { userLogout } from '../../../store/users/user-loginSlice';
import { setError } from '../../../utils/help-api';

const UpdateStageProfile = () => {
  const { userInfo } = useSelector((state) => state.stageLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [stage, setStage] = useState();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState(userInfo.user.first_name);
  const [lastName, setLastName] = useState(userInfo.user.last_name);
  const [email, setEmail] = useState(userInfo.user.email);
  // const [cin, setCin] = useState(user?.cin);
  const [phone, setPhone] = useState(userInfo.user.phone);
  const [niveau, setNiveau] = useState(userInfo.user.niveau);
  const [domaine, setDomaine] = useState(userInfo.user.domaine);

  const getStageDetail = async (stageId) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/stages/${stageId}`, {
        headers: {
          Accpet: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setLoading(false);
      setStage(data);
    } catch (error) {
      const message = setError(error);
      toast.error(message);
    }
  };

  const updateStage = async (user) => {
    try {
      const res = await axios.put(`/api/stages/${user.id}`, user, {
        headers: {
          Accpet: 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

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

    if (domaine.trim() === '' || niveau.trim() === '' || phone.trim() === '') {
      toast.error('invalid input!');
      return;
    }

    updateStage({
      id: stage._id,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      domaine,
      niveau,
    });

    navigate(-1);
  };

  useEffect(() => {
    getStageDetail(id);
  }, [id]);

  return (
    <Layout>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      {loading || !stage ? (
        <Loader />
      ) : (
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
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                          required
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
                          required
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
                          required
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
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          required
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
                          onChange={(e) => setDomaine(e.target.value)}
                          value={domaine}
                          required
                        >
                          <option value='informatique'>Informatique</option>
                          <option value='télécommunications'>
                            Télécommunications
                          </option>
                          <option value='business intelligence'>
                            Business intelligence
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className='mb-3'>
                        <label className='small mb-1' htmlFor='niveau'>
                          Niveau
                        </label>
                        <Form.Select
                          id='niveau'
                          onChange={(e) => setNiveau(e.target.value)}
                          value={niveau}
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
      )}
    </Layout>
  );
};

export default UpdateStageProfile;
