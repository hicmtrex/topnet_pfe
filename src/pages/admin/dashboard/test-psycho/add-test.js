import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import FormContainer from '../../../../components/UI/form-container';
import { createQuestion } from '../../../../store/questions/create-question';
import Title from '../../../../components/UI/typography/title';

const AddTest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState([]);
  const [formData, setFormData] = useState({
    categories: 'computer science',
    topics: 'C++',
    title: '',
    content: '0',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    difficulty: 'easy',
    rightAnswer: 'answer1',
  });

  const {
    categories,
    topics,
    title,
    content,
    answer1,
    answer2,
    answer3,
    answer4,
    difficulty,
    rightAnswer,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      categories,
      topics,
      title,
      content,
      answers,
      difficulty,
    };

    dispatch(createQuestion(newUser));
    navigate('/admin/test-psychotechnique');
  };

  useEffect(() => {
    setAnswers([
      {
        a: answer1,
        right: rightAnswer === 'answer1' ? true : false,
      },
      {
        a: answer2,
        right: rightAnswer === 'answer2' ? true : false,
      },
      {
        a: answer3,
        right: rightAnswer === 'answer3' ? true : false,
      },
      {
        a: answer4,
        right: rightAnswer === 'answer4' ? true : false,
      },
    ]);
  }, [rightAnswer]);
  return (
    <DashboardLayout>
      <FormContainer title={'Login your account'}>
        <Card className=' border-0 '>
          <Card.Body>
            <Row className='justify-content-center'>
              <Col lg={6}>
                <div className='p-5'>
                  <div className='mb-5'>
                    <Title title='Add' message='Question' />
                  </div>

                  <Form onSubmit={onSubmit}>
                    <Form.Group controlId='confirm_password'>
                      <Form.Label>Categorie</Form.Label>
                      <div className='d-flex '>
                        <Form.Select
                          name='categories'
                          onChange={onChange}
                          value={categories}
                          required
                        >
                          <option value='computer science'>
                            Computer science
                          </option>
                          <option value='web development'>
                            Web development
                          </option>
                          <option value='computer science'>
                            Computer science
                          </option>
                        </Form.Select>
                      </div>
                    </Form.Group>
                    <Form.Group controlId='confirm_password'>
                      <Form.Label>Thème</Form.Label>
                      <div className='d-flex '>
                        <Form.Select
                          name='topics'
                          onChange={onChange}
                          value={topics}
                          required
                        >
                          <option value='c++'>C++</option>
                          <option value='c#'>C#</option>
                          <option value='javascript'>Javascript</option>
                          <option value='php'>Php</option>
                          <option value='python'>Python</option>
                        </Form.Select>
                      </div>
                    </Form.Group>
                    <Form.Group controlId='difficulty'>
                      <Form.Label>Difficulté</Form.Label>
                      <div className='d-flex '>
                        <Form.Select
                          name='difficulty'
                          onChange={onChange}
                          value={difficulty}
                          required
                        >
                          <option value='easy'>Facile</option>
                          <option value='medium'>Moyenne</option>
                          <option value='hard'>Difficcile</option>
                        </Form.Select>
                      </div>
                    </Form.Group>
                    <Form.Group controlId='title'>
                      <Form.Label>Titre</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          as='textarea'
                          onChange={onChange}
                          value={title}
                          rows={2}
                          type='text'
                          name='title'
                          placeholder
                          required
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='content'>
                      <Form.Label>Contenu (facultatif)</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          as='textarea'
                          rows={3}
                          type='text'
                          name='content'
                          onChange={onChange}
                          value={content}
                          placeholder
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='answer1'>
                      <Form.Label>Réponse 1</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          type='text'
                          name='answer1'
                          placeholder
                          onChange={onChange}
                          value={answer1}
                          required
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='answer2'>
                      <Form.Label>Réponse 2</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          type='text'
                          name='answer2'
                          placeholder
                          onChange={onChange}
                          value={answer2}
                          required
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='answer3'>
                      <Form.Label>Réponse 3</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          name='answer3'
                          type='text'
                          onChange={onChange}
                          value={answer3}
                          placeholder
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='answer4'>
                      <Form.Label>Réponse 4</Form.Label>
                      <div className='d-flex '>
                        <Form.Control
                          name='answer4'
                          onChange={onChange}
                          value={answer4}
                          type='text'
                        />
                      </div>
                    </Form.Group>
                    <Form.Group controlId='rightAnswer'>
                      <Form.Label>Réponse Correcte</Form.Label>
                      <div className='d-flex '>
                        <Form.Select
                          name='rightAnswer'
                          onChange={onChange}
                          value={rightAnswer}
                          style={{ fontSize: '20px' }}
                          className='text-center'
                        >
                          <option value='answer1'>Réponse 1</option>
                          <option value='answer2'>Réponse 2</option>
                          <option value='answer3'>Réponse 3</option>
                          <option value='answer4'>Réponse 4</option>
                        </Form.Select>
                      </div>
                    </Form.Group>
                    <Button type='submit' className='col-11 mt-3'>
                      Confirmer
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

export default AddTest;
