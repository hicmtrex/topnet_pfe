import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../../components/layout/layout';
import Title from '../../../components/UI/typography/title';

const StageSubject = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    if (window.confirm('Do you want start a test psychotechnique now?')) {
      navigate('/questions/quiz');
    } else {
      navigate(-1);
    }
  };

  return (
    <Layout>
      <Title title={'Offer'} message='De Stage' />
      <Row className='d-flex justify-content-center align-items-center mt-5'>
        <Col md={4}>
          <Card>
            <Card.Img
              style={{ height: '350px' }}
              className='p-4'
              variant='top'
              src='/assets/images/stage_ob.jpg'
            />
            <Card.Body>
              <Card.Title as='h2'>Stage d’observation </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='warning'
                className='mt-2 col-12'
              >
                Start Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              style={{ height: '350px' }}
              className='p-4'
              variant='top'
              src='/assets/images/stage_pfe.jpg'
            />
            <Card.Body>
              <Card.Title as='h2'>Stage Pfe</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='warning'
                className='mt-2 col-12'
              >
                Start Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              style={{ height: '350px' }}
              className='p-4'
              variant='top'
              src='/assets/images/stage_perfec.jpg'
            />
            <Card.Body>
              <Card.Title as='h2'>Stage de perfectionnement</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='warning'
                className='mt-2 col-12'
              >
                Start Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

{
  /* <Col md={4}>Stage PFE</Col>
<Col md={4}>stage d’observation </Col>
<Col md={4}>stage de perfectionnement</Col> */
}

export default StageSubject;
