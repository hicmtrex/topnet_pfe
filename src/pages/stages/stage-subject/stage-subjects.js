import React from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/layout/layout';
import Title from '../../../components/UI/typography/title';
import { getStageTest } from '../../../store/questions/quiz/getstage-answerSlice';

const StageSubject = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedStage } = useSelector((state) => state.stageResult);
  const { results } = useSelector((state) => state.stageTestResult);

  const checkTest = () => {
    const exist = results.find((res) => res.categories === selectedStage);
    if (exist === undefined) {
    } else if (!exist.passed) {
      toast.error('Vous avez échoué le test 🙁');
      return navigate('/');
    } else if (exist.passed) {
      toast.success('You Already has been passed this test!');
      return navigate('/stages/profile');
    }
  };

  useEffect(() => {
    dispatch(getStageTest());
    checkTest();
  }, [dispatch]);

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
                Quelques exemples de texte rapides à construire sur le titre de
                la carte et à composer l'essentiel du contenu de la carte.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='warning'
                className='mt-2 col-12'
              >
                Commencez maintenant
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
                Quelques exemples de texte rapides à construire sur le titre de
                la carte et à composer l'essentiel du contenu de la carte.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='warning'
                className='mt-2 col-12'
              >
                Commencez maintenant
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
                Quelques exemples de texte rapides à construire sur le titre de
                la carte et à composer l'essentiel du contenu de la carte.
              </Card.Text>
              <Button
                onClick={startQuiz}
                variant='warning'
                className='mt-2 col-12'
              >
                Commencez maintenant
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
