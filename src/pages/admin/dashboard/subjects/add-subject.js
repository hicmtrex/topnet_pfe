import React, { useState } from 'react';
import { Button, Form, Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import FormContainer from '../../../../components/UI/form-container';
import Title from '../../../../components/UI/typography/title';
import { createSubject } from '../../../../store/subjects/create-subject';

const AddSubject = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('image', image);

    dispatch(createSubject(data));
    navigate('/admin/sujet-stage');
  };

  return (
    <DashboardLayout>
      <FormContainer>
        <Card className=' border-0 '>
          <Card.Body>
            <Row className='justify-content-center'>
              <Col lg={6}>
                <div className='p-5'>
                  <div className='mb-5'>
                    <Title title='Ajouter' message='Suject' />
                  </div>

                  <Form onSubmit={onSubmit}>
                    <Form.Group controlId='title'>
                      <Form.Label>Title</Form.Label>

                      <Form.Control
                        type='text'
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </Form.Group>
                    <Form.Group controlId='image'>
                      <Form.Label>Image</Form.Label>

                      <Form.Control
                        type='file'
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </Form.Group>
                    <Form.Group controlId='description'>
                      <Form.Label>Description</Form.Label>

                      <Form.Control
                        as={'textarea'}
                        rows={3}
                        type='text'
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      />
                    </Form.Group>

                    <Button type='submit' className='w-full mt-3'>
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </FormContainer>
    </DashboardLayout>
  );
};

export default AddSubject;
