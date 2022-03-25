import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { AiOutlineDown, AiFillEdit } from 'react-icons/ai';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuestion } from '../../../../store/questions/delete-question';

const QuestionItem = ({ question, num }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = (i) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      dispatch(deleteQuestion(i));
      navigate('/admin/test-psychotechnique');
    }
  };

  return (
    <Card className=' mb-2' style={{ minWidth: '60vw' }}>
      <Card.Header>
        <Card.Title>
          <a className='text-muted ' data-toggle='collapse'>
            {question.title.substring(0, 130)}...
            <AiOutlineDown
              onClick={() => setShow((prev) => (prev = !prev))}
              size={'1rem'}
              className=' text-slate pull-right'
            />
            <FiTrash
              onClick={() => onDelete(question._id)}
              size={'1rem'}
              className='me-5 text-slate pull-right'
            />
            <AiFillEdit
              onClick={() => navigate(`/admin/edit-test/${question._id}`)}
              size={'1rem'}
              className='me-5 text-slate pull-right'
            />
          </a>
        </Card.Title>
      </Card.Header>

      {show && (
        <div className='card-footer bg-transparent d-sm-flex align-items-sm-center border-top-0 pt-0'>
          <ListGroup variant='flush' className='question__card'>
            <div>
              {question.content === '0' ? null : (
                <h5 className='my-3 bg-gray-300 p-5 rounded'>
                  {question.content}
                  <img src={question.content} width={100} />
                </h5>
              )}
            </div>

            {question.answers.map((answer, index) => (
              <ListGroup.Item key={answer.a}>
                Answer <span className='me-5'>{index + 1}:</span>
                <strong
                  className={answer.right ? 'text-success' : 'text-danger'}
                >
                  {answer.a}
                </strong>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </Card>
  );
};

export default QuestionItem;
