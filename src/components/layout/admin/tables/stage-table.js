import React, { useState } from 'react';
import { Button, FormSelect, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineMail, AiFillPhone, AiFillEdit } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';
import { updateStage } from '../../../../store/stages/admin/update-stageSlice';
import { MdSystemUpdate } from 'react-icons/md';

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
          src={
            stage.image
              ? stage.image
              : 'https://openclipart.org/download/247319/abstract-user-flat-3.svg'
          }
          className='avatar avatar-sm  me-3'
        />

        <Link
          className=' font-semibold text-primary'
          to={`/admin/stages/${stage._id}`}
        >
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
            className=' form-select-sm px-5'
            style={{ fontSize: '10px' }}
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
                onClick={onUpdate}
              >
                <MdSystemUpdate size={'1rem'} />
              </Button>
            ) : (
              <Button
                className=' btn-sm  btn-neutral text-primary me-2'
                onClick={() => setEdit(true)}
              >
                <AiFillEdit size={'1rem'} />
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
