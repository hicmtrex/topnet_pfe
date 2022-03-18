import React, { useState } from 'react';
import { Button, FormSelect } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';
import { updateStage } from '../../../../store/stages/admin/update-stageSlice';

const UsersList = ({ user }) => {
  const [edit, setEdit] = useState(false);
  const [role, setRole] = useState('');
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(user.status ? 'Active' : 'Deactive');

  const roleCheck = (u) => {
    if (u.coordinator) {
      return 'Coordinator';
    } else if (u.service_rh) {
      return 'Service Rh';
    } else if (u.encadrant) {
      return 'Encadrant ';
    } else {
      return 'Stagiaire';
    }
  };

  const onDelete = (i) => {
    if (window.confirm('Are you sure?')) {
    }
  };
  const onUpdate = () => {
    dispatch(
      updateStage({
        id: user._id,
        coordinator: role === 'Coordinator' ? true : false,
        service_rh: role === 'Service Rh' ? true : false,
        status: status === 'Active' ? true : false,
      })
    );
    setEdit(false);
  };

  return (
    <tr>
      <td>
        <img
          alt='...'
          src='https://bootdey.com/img/Content/avatar/avatar7.png'
          class='avatar avatar-sm rounded-circle me-3'
        />

        <Link className='text-heading font-semibold' to='#'>
          {user.first_name} {user.last_name}
        </Link>
      </td>
      <td>
        <AiOutlineMail size={'1.2rem'} className='me-2' />
        {user.email}
      </td>

      <td>
        <HiIdentification size={'1.2rem'} className='me-2' />
        {user.cin}
      </td>

      <>
        {edit ? (
          <td>
            <FormSelect
              style={{ width: '70%' }}
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value='Encadrant'>Encadrant</option>
              <option value='service_rh'>Service Rh</option>
              <option value='coordinator'>Coondinator</option>
            </FormSelect>
          </td>
        ) : (
          <td>{roleCheck(user)}</td>
        )}
      </>

      {edit ? (
        <td>
          <FormSelect
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value='Active'>Active</option>
            <option value='Deactive'>Deactive</option>
          </FormSelect>
        </td>
      ) : (
        <td>
          <span
            className={`badge badge-lg badge-dot text-white py-2 px-3 ${
              user.status ? 'bg-success' : 'bg-danger'
            }`}
          >
            {user.status ? 'Active' : 'Deactive'}
          </span>
        </td>
      )}

      <td className='text-end'>
        {edit ? (
          <FaTimes
            style={{ cursor: 'pointer', color: 'red', marginRight: '5px' }}
            size={'1.5rem'}
            onClick={() => setEdit(false)}
          />
        ) : (
          <Link
            to={`/admin/stages/${user._id}`}
            className='  btn-sm  btn-neutral text-primary border'
          >
            View
          </Link>
        )}
        {userInfo.user.coordinator && (
          <>
            {edit ? (
              <Button
                className=' btn-sm  btn-neutral text-primary mx-2'
                onClick={onUpdate}
              >
                Edit
              </Button>
            ) : (
              <Button
                className=' btn-sm  btn-neutral text-primary mx-2'
                onClick={() => setEdit(true)}
              >
                Edit
              </Button>
            )}

            <Button
              style={{
                cursor: !userInfo.user.coordinator && 'not-allowed',
              }}
              disabled={!userInfo.user.coordinator}
              onClick={() => onDelete(user._id)}
              className=' btn-sm btn-square btn-neutral text-danger'
            >
              <BsTrash size={'1.5rem'} />
            </Button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UsersList;
