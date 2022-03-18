import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center mt-5 pt-5  '>
        <Col
          xs={12}
          md={10}
          className='shadow rounded bg-white pb-2'
          style={{
            borderRadius: '20px',
          }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
