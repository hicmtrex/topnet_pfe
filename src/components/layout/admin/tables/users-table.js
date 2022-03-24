import React, { useState } from 'react';
import { Button, FormSelect, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';
import { updateUser } from '../../../../store/users/update-userSlice';
import { roleCheck } from '../../../../utils/help-api';

const UsersList = ({ user }) => {
  const [edit, setEdit] = useState(false);
  const [role, setRole] = useState('');
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(user.status ? 'Active' : 'Deactive');

  const onDelete = (i) => {
    if (window.confirm('Are you sure?')) {
    }
  };
  const onUpdate = (i) => {
    dispatch(
      updateUser({
        id: i,
        coordinator: role === 'coordinator' ? Boolean(true) : Boolean(false),
        service_rh: role === 'service_rh' ? Boolean(true) : Boolean(false),
        encadrant: role === 'encadrant' ? Boolean(true) : Boolean(false),
        status: status === 'Active' ? true : false,
      })
    );
    setEdit(false);
  };

  return (
    <tr>
      <td>
        <Image
          roundedCircle
          alt='avatar'
          src='https://bootdey.com/img/Content/avatar/avatar7.png'
          className='avatar avatar-sm me-3'
        />

        <Link
          className='text-heading font-semibold'
          to={`/admin/users/${user._id}`}
        >
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
              <option value='encadrant'>Encadrant</option>
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
        {edit && (
          <FaTimes
            style={{ cursor: 'pointer', color: 'red', marginRight: '5px' }}
            size={'1.5rem'}
            onClick={() => setEdit(false)}
          />
        )}
        {userInfo.user.coordinator && (
          <>
            {edit ? (
              <Button
                className=' btn-sm  btn-neutral text-primary mx-2'
                onClick={() => onUpdate(user._id)}
              >
                Update
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
