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
      <Row
        style={{ height: '80vh' }}
        className='d-flex justify-content-center align-items-center'
      >
        <Title title={'Offer'} message='De Stage' />
        <Col md={4}>
          <Card>
            <Card.Img
              style={{ height: '350px' }}
              className='p-4'
              variant='top'
              src='/assets/images/stage_ob.jpg'
            />
            <Card.Body>
              <Card.Title as='h2'>Stage D’observation </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='primary'
                className='mt-2 col-12'
              >
                Apply Now
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
              <Card.Title as='h2'>Stage PFE</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='primary'
                className='mt-2 col-12'
              >
                Apply Now
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
              <Card.Title as='h2'>Stage De Perfectionnement</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='primary'
                className='mt-2 col-12'
              >
                Apply Now
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
