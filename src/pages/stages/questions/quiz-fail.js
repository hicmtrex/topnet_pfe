import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Layout from '../../../components/layout/layout';
import { FaTimes } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';

const QuizFail = () => {
  const { currentQuestions } = useSelector((state) => state.stageQuestion);

  return (
    <Layout>
      <Row>
        <h2 className='text-center text-warning'>
          sorry you didn't pass the test
        </h2>
        <Col md={6}>
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
                  <h6 className='d-flex justify-content-between align-items-center'>
                    <span>your answer: {question.answer}</span>{' '}
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
                  </h6>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {/* <ListGroup className='my-3'>
            {currentQuestions.map((question, index) => (
              <ListGroup.Item
                key={question._id}
                className='mb-2 shadow bg-white'
              >
                <h4> {index + 1}</h4>
                <h6>difficulty: {question.difficulty}</h6>
                <Row className='my-2'>
                  <h6>{question.title}</h6>
                </Row>
                {question.content === '0' ? null : (
                  <Row className='p-3 bg-secondary my-2 rounded'>
                    {question.content}
                  </Row>
                )}
                <ListGroup>
                  {question.answers.map((answer) => (
                    <ListGroup.Item key={answer.a}>
                      <p
                        className={
                          answer.right ? 'text-success' : 'text-danger'
                        }
                      >
                        {answer.a}
                      </p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            ))}
          </ListGroup> */}
        </Col>
      </Row>
    </Layout>
  );
};

export default QuizFail;
