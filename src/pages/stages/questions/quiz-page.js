import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStageQuestion } from '../../../store/questions/quiz/stage-quiz';
import Loader from '../../../components/UI/loader';
import Message from '../../../components/UI/Message';
import toast from 'react-hot-toast';
import { saveStageResult } from '../../../store/questions/quiz/stage-answers';

const QuizPage = () => {
  const { userInfo } = useSelector((state) => state.stageLogin);
  const { userInfo: admin } = useSelector((state) => state.userLogin);
  const { questions, loading, error } = useSelector(
    (state) => state.stageQuestion
  );
  const { selectedStage } = useSelector((state) => state.stageResult);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userAnswer, setUserAnswer] = useState([]);
  const [value, setValue] = useState('');
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (!userInfo && !admin) return navigate('/stages/auth-login');
    dispatch(getStageQuestion());
  }, [dispatch, userInfo, admin]);

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

  const subitHandler = (e) => {
    e.preventDefault();
    if (num + 1 === 10) {
      if (score >= 6) {
        dispatch(
          saveStageResult({
            categories: selectedStage,
            difficulty: questions[0]?.difficulty,
            score,
            result: true,
          })
        );
        toast.success(
          `Your score is ${score} ,🎉congratulations you passed the test with success 🎉`
        );
        navigate('/stages/profile');
      } else {
        dispatch(
          saveStageResult({
            categories: selectedStage,
            difficulty: questions[0]?.difficulty,
            score,
            result: false,
          })
        );
        toast.error(`Your score is ${score} ,sorry you didn't pass the test`);
        navigate('/');
      }

      return;
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
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row className='justify-content-md-center my-5  '>
            {error && <Message variant={'danger'}>{error}</Message>}
            <Col xs={12} md={6} className='shadow bg-white pb-5 rounded'>
              <h4 className={`${time < 10 && 'text-danger'}`}>
                <i
                  style={{ fontSize: '20px' }}
                  className={`fa fa-clock icon`}
                ></i>
                {time}
              </h4>
              {num + 1 <= 10 ? (
                <h5 className='mb-2'>Question {num + 1}</h5>
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
              <h4 className='my-5 bg-secondary p-5 rounded'>
                {questions[num]?.title}
              </h4>
              {questions[num]?.content === '0' ? null : (
                <h5 className=' rounded px-2 py-5 m-b3 bg-dark text-white'>
                  {questions[num]?.content}
                </h5>
              )}
              <Form className='text-dark' onSubmit={subitHandler}>
                {questions[num]?.answers.map((answer) => (
                  <Form.Group
                    key={answer.a}
                    controlId={answer.a}
                    className='text-black border-top d-flex justify-content-between p-5'
                  >
                    <Form.Label
                      style={{ fontSize: '18px', fontWeight: 'normal' }}
                      className='text-dark'
                    >
                      {answer.a}
                    </Form.Label>
                    <Form.Check
                      style={{ fontSize: '25px' }}
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
        )}
      </Container>
    </Layout>
  );
};

export default QuizPage;
