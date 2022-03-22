import React, { useState } from 'react';
import { Button, FormSelect, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';
import { updateStage } from '../../../../store/stages/admin/update-stageSlice';

const StagerTable = ({ stage }) => {
  const [edit, setEdit] = useState(false);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(stage.status ? 'Active' : 'Deactive');

  const onDelete = (i) => {
    if (window.confirm('Are you sure?')) {
    }
  };
  const onUpdate = () => {
    dispatch(
      updateStage({
        id: stage._id,
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
          alt='...'
          src='https://bootdey.com/img/Content/avatar/avatar7.png'
          className='avatar avatar-sm  me-3'
        />

        <Link className='text-heading font-semibold' to='#'>
          {stage.first_name} {stage.last_name}
        </Link>
      </td>
      <td>
        <AiOutlineMail size={'1.2rem'} className='me-2' />
        {stage.email}
      </td>

      <td>
        <HiIdentification size={'1.2rem'} className='me-2' />
        {stage.cin}
      </td>
      <td>{stage.domaine}</td>

      <td>
        <AiFillPhone size={'1.2rem'} className='me-2' />
        {stage.phone}
      </td>

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
              stage.status ? 'bg-success' : 'bg-danger'
            }`}
          >
            {stage.status ? 'Active' : 'Deactive'}
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
            to={`/admin/stages/${stage._id}`}
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
              onClick={() => onDelete(stage.id)}
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

export default StagerTable;
