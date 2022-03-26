import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedStage } from '../../../../store/questions/quiz/stage-answers';

const StageCard = ({ stage }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to='/stages/subjects'
      onClick={() => dispatch(setSelectedStage(stage.title))}
    >
      <Card className=' border-hover-primary hover-scale'>
        <Card.Body>
          <div className='text-primary mb-5'>
            <Image
              style={{ height: '250px' }}
              rounded
              src={stage.image}
              alt=''
            />
          </div>
          <h4 className='font-weight-bold mb-3'>{stage.title}</h4>
          <p className='text-muted mb-0'>{stage.bio}</p>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default StageCard;
