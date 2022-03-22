import React, { useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import StagerTable from '../../../../components/layout/admin/tables/stage-table';
import { getStagesList } from '../../../../store/stages/admin/stages-list';
import Loader from '../../../../components/UI/loader';
import { FaUserCog } from 'react-icons/fa';

const StageList = () => {
  const dispatch = useDispatch();
  const { stages, loading } = useSelector((state) => state.stagesList);
  const { success } = useSelector((state) => state.stageUpdate);

  useEffect(() => {
    dispatch(getStagesList());
  }, [dispatch, success]);

  return (
    <DashboardLayout>
      <Card className=' shadow border-0 mb-7 '>
        <Card.Header className='card-header d-flex bg-dark  justify-content-between'>
          <h5 className='mb-0 text-white'>Stages List</h5>
          <h6>
            <FaUserCog color='white' size={'1.5rem'} />
          </h6>
        </Card.Header>
        {loading ? (
          <Loader />
        ) : (
          <Table responsive hover className='table-nowrap'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>
                  <span className='mx-4'>Email</span>
                </th>
                <th scope='col'>
                  <span className='mx-4'>Cin</span>
                </th>
                <th scope='col'>Domaine</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Status</th>

                <th />
              </tr>
            </thead>
            <tbody>
              {stages.map((stage) => (
                <StagerTable key={stage._id} stage={stage} />
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </DashboardLayout>
  );
};

export default StageList;
