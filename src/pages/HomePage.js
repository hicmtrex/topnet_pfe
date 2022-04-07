import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StageCard from '../components/layout/features/stages/stage-card';
import Layout from '../components/layout/layout';
import Title from '../components/UI/typography/title';
import { stages } from '../utils/data';

const HomePage = () => {
  return (
    <Layout>
      <Row className=' justify-content-center text-center mt-5 pt-5 mb-3'>
        <div className='col-xl-6 col-lg-8 col-sm-10'>
          <Title title={'Catalogue'} message=' de Stage' />

          <p className='text-muted mb-0'>
            We bring the results while helping you achieve cost and time savings
            without taking on risk or management overhead.
          </p>
        </div>
      </Row>
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
            key={stage.id}
          >
            <StageCard stage={stage} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default HomePage;
