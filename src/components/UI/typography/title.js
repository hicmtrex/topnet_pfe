import React from 'react';

const Title = ({ title, message }) => {
  return (
    <h1 className='font-weight-bold text-center'>
      <em>
        <span style={{ color: '#f5a425' }}>{title}</span> {message}
      </em>
    </h1>
  );
};

export default Title;
