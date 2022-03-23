import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionsList } from '../../../../store/questions/question-listSlice';
import Loader from '../../../../components/UI/loader';
import QuestionItem from '../../../../components/layout/admin/questions/question-item';
import Paginate from '../../../../components/UI/Paginate';
import { useNavigate } from 'react-router-dom';

const TestLadingPage = () => {
  const { questions, loading, total } = useSelector(
    (state) => state.questionList
  );
  const { success } = useSelector((state) => state.removeQuestion);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getQuestionsList(page));
  }, [dispatch, success, page]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card className=' shadow border-0 mb-2'>
            <Card.Header className='card-header d-flex bg-dark  justify-content-between'>
              <h5 className='mb-0 text-white'>Questions List</h5>
              <Button
                variant='warning'
                onClick={() => navigate('/admin/add-test')}
                className='btn-sm '
              >
                Add Question
              </Button>
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
          <Paginate page={page} total={total} setPage={setPage} />
        </>
      )}
    </DashboardLayout>
  );
};

export default TestLadingPage;
