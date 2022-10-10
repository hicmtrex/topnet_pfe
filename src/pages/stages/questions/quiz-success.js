import React, { useEffect } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../../components/layout/layout';
import { FaTimes } from 'react-icons/fa';
import { MdDone, MdQuiz } from 'react-icons/md';
import { getStageTest } from '../../../store/questions/quiz/getstage-answerSlice';

const QuizSuccess = () => {
  const { currentQuestions } = useSelector((state) => state.stageQuestion);
  const { results } = useSelector((state) => state.stageTestResult);
  const result = results.slice(-1);
  const dispatch = useDispatch();
  console.log(result);
  useEffect(() => {
    dispatch(getStageTest());
  }, [dispatch]);

  return (
    <Layout>
      <Row>
        <h2 className='text-center text-success my-3'>
          congratulations you passed the test with success 🎉{' '}
        </h2>
        <Col md={8}>
          <h3>Your test result</h3>
          <ListGroup className='my-3'>
            {currentQuestions.map((question, index) => (
              <ListGroup.Item
                key={question._id}
                className='mb-2 shadow bg-white'
              >
                {/* <h5 className='mb-2'> {index + 1}</h5> */}
                <h6 className='mb-2'>difficulty: {question.difficulty}</h6>
                <Row>
                  <div className='d-flex justify-content-between align-items-center'>
                    <span>
                      your answer : <strong>{question.answer}</strong>
                    </span>{' '}
                    <span
                      className={
                        question.rightAnswer ? 'text-success' : 'text-danger'
                      }
                    >
                      {question.rightAnswer ? (
                        <MdDone size={'1.2rem'} />
                      ) : (
                        <FaTimes size={'1.2rem'} />
                      )}
                    </span>
                  </div>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant=' flush' className='my-3'>
                <ListGroup.Item>
                  <h2 className='text-center'>
                    Test Information <MdQuiz />
                  </h2>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex align-content-center justify-content-between text-md'>
                  <span>User</span>
                  <span>{result[0].user_name}</span>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex align-content-center justify-content-between text-md'>
                  <span>Categories</span>
                  <span>{result[0].categories}</span>
                </ListGroup.Item>

                <ListGroup.Item className='d-flex align-content-center justify-content-between text-md'>
                  <span>Result</span>
                  <span className='text-success'>{result[0].result}</span>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex align-content-center justify-content-between text-md'>
                  <span>Right Asnwer</span>
                  <span>
                    <span className='text-success'>{result[0].score}</span>/10
                  </span>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button className='w-full'>Depose</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default QuizSuccess;
