import React from 'react';
import { useEffect } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StageCard from '../components/layout/features/stages/stage-card';
import Layout from '../components/layout/layout';
import Loader from '../components/UI/loader';
import Title from '../components/UI/typography/title';
import { getSubjectsList } from '../store/subjects/subjects-list';
import { stages } from '../utils/data';

const HomePage = () => {
  const { userInfo: stageInfo } = useSelector((state) => state.stageLogin);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { subjects, loading } = useSelector((state) => state.subjectList);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getSubjectsList());
  // }, [dispatch]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row className=' justify-content-center text-center mt-5 pt-5 mb-3'>
            <div className='col-xl-6 col-lg-8 col-sm-10'>
              <Title title={'Catalogue'} message=' de Stage' />

              <p className='text-muted mb-0'>
                Nous apportons les résultats tout en vous aidant à réaliser des
                économies de temps et d'argent sans prendre de risque ni de
                frais généraux de gestion.
              </p>
            </div>
          </Row>

          {userInfo || stageInfo ? (
            <Row
              className=' row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center px-xl-6 aos-init aos-animate'
              data-aos='fade-up'
            >
              {stages.map((stage) => (
                <Col
                  md={6}
                  xl={4}
                  lg={4}
                  sm={12}
                  xs={12}
                  className=' my-3'
                  key={stage._id}
                >
                  <StageCard stage={stage} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className=' justify-content-center text-center mt-5 pt-5 mb-3'>
              <Image
                src='/assets/images/main-slider-03.jpg'
                className=' mb-6 h-2/3 rounded'
              />
              <Link to='/stages/auth-login' className='btn btn-warning col-6'>
                {' '}
                S'identifier
              </Link>
            </Row>
          )}
        </>
      )}
    </Layout>
  );
};

export default HomePage;
