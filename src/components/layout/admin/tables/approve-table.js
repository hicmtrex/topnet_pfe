import React, { useState } from 'react';
import { Button, FormSelect, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ApproveTable = ({ answer }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{answer.user_name}</td>
      <td>{answer.categories}</td>
      <td>{answer.result}</td>

      <td>{answer.score}</td>
      <td>{new Date(answer.created_at).toLocaleDateString('en-En')}</td>
      <td>
        <Button className=' btn-sm  btn-neutral text-primary me-2'>Show</Button>
      </td>
    </tr>
  );
};

export default ApproveTable;
