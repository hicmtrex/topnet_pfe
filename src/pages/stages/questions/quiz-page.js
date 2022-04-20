import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getStageQuestion,
  setQuestions,
} from '../../../store/questions/quiz/stage-quiz';
import Loader from '../../../components/UI/loader';
import Message from '../../../components/UI/Message';
import toast from 'react-hot-toast';
import {
  resetSelectedStage,
  saveStageResult,
} from '../../../store/questions/quiz/stage-answers';

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
  const [result, setResult] = useState(0);
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (!userInfo && !admin) return navigate('/stages/auth-login');
    if (!selectedStage) return navigate('/');
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

  const resultHander = (q) => {
    if (q.difficulty === 'easy') {
      return 1;
    } else if (q.difficulty === 'medium') {
      return 3;
    } else if (q.difficulty === 'hard') {
      return 4;
    }
  };

  const subitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuestions(userAnswer));

    if (num + 1 === 10) {
      if (result >= 10) {
        dispatch(
          saveStageResult({
            categories: selectedStage,
            difficulty: questions[0]?.difficulty,
            score,
            result,
            passed: true,
          })
        );
        toast.success(
          `Your score is ${result}/20 ,🎉congratulations you passed the test with success 🎉`
        );
        dispatch(resetSelectedStage());
        navigate('/questions/quiz-success');
      } else {
        dispatch(
          saveStageResult({
            categories: selectedStage,
            difficulty: questions[0]?.difficulty,
            score,
            result,
            passed: false,
          })
        );
        toast.error(
          `Your score is ${result}/20 ,sorry you didn't pass the test`
        );
        dispatch(resetSelectedStage());
        navigate('/questions/quiz-fail');
      }

      return;
    }
    setNum((prevState) => prevState + 1);

    const exist = questions[num].answers.find((q) => q.a === value);
    setScore((prevState) => (exist.right ? prevState + 1 : prevState));

    setResult((prev) =>
      exist.right ? prev + resultHander(questions[num]) : prev
    );

    setUserAnswer([
      ...userAnswer,
      {
        answer: value,
        difficulty: questions[num].difficulty,
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
                  Votre score est {score}{' '}
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
                <Form.Group className='d-flex'>
                  <Button
                    onClick={() => setNum((prev) => prev - 1)}
                    className='w-1/2 mt-3 me-2'
                    disabled={num === 0}
                  >
                    Prev
                  </Button>
                  <Button type='submit' className='w-1/2  mt-3'>
                    Suivant
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  );
};

export default QuizPage;
