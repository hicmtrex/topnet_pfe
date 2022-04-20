import React from 'react';
import { useEffect } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../../components/layout/admin/dashboard-layout';
import SubjectTable from '../../../../components/layout/admin/tables/subject-table';
import Loader from '../../../../components/UI/loader';
import { getSubjectsList } from '../../../../store/subjects/subjects-list';

const SubjustList = () => {
  const { subjects, loading } = useSelector((state) => state.subjectList);
  const { success } = useSelector((state) => state.subjectCreate);
  const { success: deleteSuccess } = useSelector(
    (state) => state.subjectDelete
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSubjectsList());
  }, [dispatch, success, deleteSuccess]);

  return (
    <DashboardLayout>
      <Card className=' shadow border-0 mb-2 '>
        <Card.Header className='card-header d-flex bg-dark  justify-content-between'>
          <h5 className='mb-0 text-white'>Liste des Sujets </h5>
          <Button
            onClick={() => navigate('/admin/add-sujet')}
            variant='warning'
            className='btn-sm '
          >
            Ajouter Sujet
          </Button>
        </Card.Header>
        {loading ? (
          <Loader />
        ) : (
          <Table responsive hover className='table-nowrap'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>Photo</th>
                <th scope='col'>
                  <span>Title</span>
                </th>

                <th scope='col'>
                  <span>Created At</span>
                </th>
                <th scope='col'>
                  <span>Options</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                <SubjectTable key={subject._id} subject={subject} />
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </DashboardLayout>
  );
};

export default SubjustList;
