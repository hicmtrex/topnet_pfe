import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../../../components/UI/form-container';
import Title from '../../../../components/UI/typography/title';
import Loader from '../../../../components/UI/loader';
import { updateQuestion } from '../../../../store/questions/update-question';

const EditTest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [answers, setAnswers] = useState([]);
  const { questions, loading } = useSelector((state) => state.questionList);
  const question = questions.find((q) => q._id === params.id);

  const [formData, setFormData] = useState({
    categories: 'computer science',
    topics: 'C++',
    title: question.title,
    content: question.content,
    answer1: question?.answers[0].a,
    answer2: question?.answers[1].a,
    answer3: question?.answers[2].a,
    answer4: question?.answers[3].a,
    difficulty: question?.difficulty,
    rightAnswer: '',
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
      _id: question._id,
      categories,
      topics,
      title,
      content,
      answers,
      difficulty,
    };

    dispatch(updateQuestion(newUser));
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
      {loading ? (
        <Loader />
      ) : (
        <FormContainer>
          <Card className=' border-0 '>
            <Card.Body>
              <Row className='justify-content-center'>
                <Col lg={6}>
                  <div className='p-5'>
                    <div className='mb-5'>
                      <Title title='Edit' message='Question' />
                    </div>

                    <Form onSubmit={onSubmit}>
                      <Form.Group controlId='categories'>
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
                        <Form.Label>topic</Form.Label>
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
                        <Form.Label>Difficulty</Form.Label>
                        <div className='d-flex '>
                          <Form.Select
                            name='difficulty'
                            onChange={onChange}
                            value={difficulty}
                            required
                          >
                            <option value='easy'>Facile</option>
                            <option value='medium'>Moyenne</option>
                            <option value='hard'>Difficile</option>
                          </Form.Select>
                        </div>
                      </Form.Group>
                      <Form.Group controlId='title'>
                        <Form.Label> Titre</Form.Label>
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
                        <Form.Label>Content (optinal)</Form.Label>
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
                            required
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
                            required
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
      )}
    </DashboardLayout>
  );
};

export default EditTest;
