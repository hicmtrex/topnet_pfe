import React, { useEffect, useState } from 'react';
import { Card, Pagination, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import StagerTable from '../../../../components/layout/admin/tables/stage-table';
import { getStagesList } from '../../../../store/stages/admin/stages-list';
import Loader from '../../../../components/UI/loader';
import { FaUserCog } from 'react-icons/fa';
import Paginate from '../../../../components/UI/Paginate';

const StageList = () => {
  const dispatch = useDispatch();
  const { stages, loading, total } = useSelector((state) => state.stagesList);
  const { success } = useSelector((state) => state.stageUpdate);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getStagesList(page));
  }, [dispatch, success, page]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card className=' shadow border-0 mb-2 '>
            <Card.Header className='card-header d-flex bg-dark  justify-content-between'>
              <h5 className='mb-0 text-white'>Stages List</h5>
              <h6>
                <FaUserCog color='white' size={'1.5rem'} />
              </h6>
            </Card.Header>

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
          </Card>
          <Paginate page={page} total={total} setPage={setPage} />
        </>
      )}
    </DashboardLayout>
  );
};

export default StageList;
