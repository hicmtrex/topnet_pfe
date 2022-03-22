import React, { useEffect } from 'react';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsList } from '../../../../store/questions/question-listSlice';
import Loader from '../../../../components/UI/loader';
import QuestionItem from '../../../../components/layout/admin/questions/question-item';
import { Link } from 'react-router-dom';

const TestLadingPage = () => {
  const { questions, loading } = useSelector((state) => state.questionList);
  const { success } = useSelector((state) => state.removeQuestion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionsList());
  }, [dispatch, success]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card className=' shadow border-0 mb-7  '>
            <Card.Header className='d-flex justify-content-between'>
              <h5 className='mb-0 text-dark'>Questions List</h5>
              <Link to={'/admin/add-test'} className='btn btn-primary'>
                Add Question
              </Link>
            </Card.Header>
          </Card>
          <div className='container d-flex justify-content-center mt-50 mb-50'>
            <div className='w-100 overflow-auto order-2 order-md-1'>
              <div className='card-group-control card-group-control-right'>
                {questions.map((question, index) => (
                  <QuestionItem
                    question={question}
                    key={question._id}
                    num={index + 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default TestLadingPage;
