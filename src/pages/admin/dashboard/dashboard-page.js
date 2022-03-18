import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import DashboardLayout from '../../../components/layout/admin/dashboard-layout';
import './dashboard.css';

const DashBoardPage = () => {
  return (
    <DashboardLayout>
      <Row className='g-6 mb-6'>
        <Col xl={3} sm={6} className='col-12'>
          <Card className=' shadow border-0'>
            <Card.Body>
              <Row>
                <Col>
                  <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                    Budget
                  </span>{' '}
                  <span className='h3 font-bold mb-0'>$750.90</span>{' '}
                </Col>
                <div className='col-auto'>
                  <div className='icon icon-shape bg-tertiary text-white text-lg rounded-circle'>
                    {' '}
                    <i className='bi bi-credit-card' />{' '}
                  </div>
                </div>
              </Row>
              <div className='mt-2 mb-0 text-sm'>
                {' '}
                <span className='badge badge-pill bg-soft-success text-success me-2'>
                  {' '}
                  <i className='bi bi-arrow-up me-1' />
                  13%{' '}
                </span>{' '}
                <span className='text-nowrap text-xs text-muted'>
                  Since last month
                </span>{' '}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} sm={6} md={12}>
          <Card className=' shadow border-0'>
            <Card.Body>
              <Row>
                <Col>
                  <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                    New projects
                  </span>{' '}
                  <span className='h3 font-bold mb-0'>215</span>{' '}
                </Col>
                <div className='col-auto'>
                  <div className='icon icon-shape bg-primary text-white text-lg rounded-circle'>
                    {' '}
                    <i className='bi bi-people' />{' '}
                  </div>
                </div>
              </Row>
              <div className='mt-2 mb-0 text-sm'>
                {' '}
                <span className='badge badge-pill bg-soft-success text-success me-2'>
                  {' '}
                  <i className='bi bi-arrow-up me-1' />
                  30%{' '}
                </span>{' '}
                <span className='text-nowrap text-xs text-muted'>
                  Since last month
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} sm={6} md={12}>
          <Card className=' shadow border-0'>
            <Card.Body>
              <Row>
                <Col>
                  <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                    Total hours
                  </span>
                  <span className='h3 font-bold mb-0'>1.400</span>
                </Col>
                <div className='col-auto'>
                  <div className='icon icon-shape bg-info text-white text-lg rounded-circle'>
                    <i className='bi bi-clock-history' />
                  </div>
                </div>
              </Row>
              <div className='mt-2 mb-0 text-sm'>
                <span className='badge badge-pill bg-soft-danger text-danger me-2'>
                  <i className='bi bi-arrow-down me-1' />
                  -5%
                </span>
                <span className='text-nowrap text-xs text-muted'>
                  Since last month
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} sm={6} md={12}>
          <Card className=' shadow border-0'>
            <Card.Body>
              <Row className='row'>
                <Col className='col'>
                  <span className='h6 font-semibold text-muted text-sm d-block mb-2'>
                    Work load
                  </span>
                  <span className='h3 font-bold mb-0'>95%</span>
                </Col>
                <div className='col-auto'>
                  <div className='icon icon-shape bg-warning text-white text-lg rounded-circle'>
                    <i className='bi bi-minecart-loaded' />
                  </div>
                </div>
              </Row>
              <div className='mt-2 mb-0 text-sm'>
                <span className='badge badge-pill bg-soft-success text-success me-2'>
                  <i className='bi bi-arrow-up me-1' />
                  10%
                </span>
                <span className='text-nowrap text-xs text-muted'>
                  Since last month
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className=' shadow border-0 mb-7  '>
        <Card.Header>
          <h5 className='mb-0 text-dark'>Applications</h5>
        </Card.Header>

        <div className='card-footer border-0 py-5'>
          <span className=' text-sm'>
            Showing 10 items out of 250 results found
          </span>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default DashBoardPage;
