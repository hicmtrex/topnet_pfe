import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import Loader from '../../../../components/UI/loader';
import { FaUserCog } from 'react-icons/fa';
import { getApprovedAnswers } from '../../../../store/questions/asnwers/get-approved';
import ApproveTable from '../../../../components/layout/admin/tables/approve-table';

const ApprovedStages = () => {
  const dispatch = useDispatch();
  const { approvedAnswers, loading } = useSelector(
    (state) => state.approvedAnswers
  );

  useEffect(() => {
    dispatch(getApprovedAnswers());
  }, [dispatch]);
  console.log(approvedAnswers);
  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card className=' shadow border-0 mb-2 '>
            <Card.Header className='card-header d-flex bg-dark  justify-content-between'>
              <h5 className='mb-0 text-white'>Liste des Stages </h5>
              <h6>
                <FaUserCog color='white' size={'1.5rem'} />
              </h6>
            </Card.Header>

            <Table responsive hover className='table-nowrap'>
              <thead className='thead-light'>
                <tr>
                  <th scope='col'>
                    <span>Nom</span>
                  </th>
                  <th scope='col'>
                    <span>Domaine</span>
                  </th>
                  <th scope='col'>
                    <span>Result</span>
                  </th>
                  <th scope='col'>Score</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Options</th>

                  <th />
                </tr>
              </thead>
              <tbody>
                {approvedAnswers.map((answer) => (
                  <ApproveTable answer={answer} key={answer.id} />
                ))}
              </tbody>
            </Table>
          </Card>
        </>
      )}
    </DashboardLayout>
  );
};

export default ApprovedStages;
