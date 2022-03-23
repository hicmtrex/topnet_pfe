import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const { userInfo } = useSelector((state) => state.stageLogin);
  const { userInfo: admin } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [value, setValue] = useState('');
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  const getQuestions = async () => {
    const { data } = await axios.get('/api/questions');
    setQuestions(data.data);
  };
  useEffect(() => {
    if (!userInfo && !admin) return navigate('/stages/auth-login');
    getQuestions();
  }, [userInfo]);

  useEffect(() => {
    const done = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    if (time < 0) {
      setTime(60);
      setNum((prevState) => prevState + 1);
    }
    return () => {
      clearInterval(done);
    };
  }, [time]);
  console.log(userAnswer);
  const subitHandler = (e) => {
    e.preventDefault();
    if (num === questions.length) {
      return alert(`Your Score is ${score}`);
    }

    setNum((prevState) => prevState + 1);
    const exist = questions[num].answers.find((q) => q.a === value);
    setScore((prevState) => (exist.right ? prevState + 1 : prevState));
    setUserAnswer([
      ...userAnswer,
      {
        answer: value,
        rightAnswer: exist.right ? true : false,
      },
    ]);

    setTime(60);
  };

  return (
    <Layout>
      <div className='container '>
        <Row className='justify-content-md-center my-5  '>
          <Col xs={12} md={6} className='shadow bg-white pb-5 rounded'>
            <h4 className={`${time < 10 && 'text-danger'}`}>
              <i
                style={{ fontSize: '20px' }}
                className={`fa fa-clock icon`}
              ></i>
              {time}
            </h4>
            {num + 1 <= 10 ? (
              <h5 className='mb-2'>Question Number {num + 1}</h5>
            ) : (
              <h5>
                your score is {score}{' '}
                <span
                  className={`${score >= 6 ? 'text-success' : 'text-danger'}`}
                >
                  {score >= 6 ? 'Passed' : 'Refused'}
                </span>
              </h5>
            )}
            <h3 className='mb-3'>{questions[num]?.title}</h3>
            {questions[num]?.content === '0' ? null : (
              <h5 className='text-dark bg-secondary rounded px-2 py-5'>
                {questions[num]?.content}
              </h5>
            )}
            <Form className='text-dark' onSubmit={subitHandler}>
              {questions[num]?.answers.map((answer, index) => (
                <Form.Group
                  key={answer.a}
                  controlId={answer.a}
                  className='text-black border-top d-flex justify-content-between p-5'
                >
                  <Form.Label className='text-dark'>{answer.a}</Form.Label>
                  <Form.Check
                    style={{ fontSize: '30px' }}
                    type='radio'
                    className='rounded p-2 ms-2'
                    name='value'
                    value={answer.a}
                    required
                    onChange={(e) => setValue(e.target.value)}
                  />
                </Form.Group>
              ))}
              <Button type='submit' className='col-12 mt-3'>
                Next
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default QuizPage;
