import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteSubject } from '../../../../store/subjects/delete-subject';

const SubjectTable = ({ subject }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = (subjectId) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteSubject(subjectId));
      navigate('/admin/sujet-stage');
    }
  };
  return (
    <tr>
      <td>
        <Image
          roundedCircle
          alt='...'
          src={subject.image}
          className='avatar avatar-sm  me-3'
        />
      </td>
      <td>{subject.title}</td>
      <td>{new Date(subject.created_at).toLocaleDateString('en-En')}</td>
      <td>
        <Button className=' btn-sm btn-square btn-neutral text-primary me-4'>
          Edit
        </Button>
        <Button
          onClick={() => onDelete(subject._id)}
          className=' btn-sm btn-square btn-neutral text-danger'
        >
          <BsTrash size={'1.5rem'} />
        </Button>
      </td>
    </tr>
  );
};

export default SubjectTable;
