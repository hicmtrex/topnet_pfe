import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import Loader from '../../../../components/UI/loader';
import { FaUserCog } from 'react-icons/fa';
import UsersList from '../../../../components/layout/admin/tables/users-table';
import { getUsersList } from '../../../../store/users/admin/users-list';
import Paginate from '../../../../components/UI/Paginate';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, total } = useSelector((state) => state.usersList);
  const { success } = useSelector((state) => state.addUser);
  const { success: successUpdate } = useSelector((state) => state.usersUpdate);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsersList(page));
  }, [dispatch, success, successUpdate, page]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card className=' shadow border-0 mb-7 '>
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
                  <th scope='col'>Role</th>
                  <th scope='col'>Status</th>

                  <th />
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UsersList key={user._id} user={user} />
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

export default UserList;
