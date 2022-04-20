import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedStage } from '../../../../store/questions/quiz/stage-answers';
import './stage-card.css';

const StageCard = ({ stage }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to='/stages/subjects'
      onClick={() => dispatch(setSelectedStage(stage.title))}
    >
      <Card className='stage__card'>
        <Card.Body>
          <div className='text-primary mb-5'>
            <Card.Img
              className='stage__card-img rounded'
              src={stage.image}
              alt='stage-image'
            />
          </div>
          <h4 className='font-weight-bold mb-3'>{stage.title}</h4>
          <p className='text-muted mb-0'>{stage.description}</p>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default StageCard;
