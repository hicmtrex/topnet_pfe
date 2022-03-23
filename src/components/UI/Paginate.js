import React from 'react';
import { Button, Pagination } from 'react-bootstrap';

const Paginate = ({ page, total, setPage }) => {
  const pages = Math.ceil(total / 10);

  return (
    <Pagination className='float-end px-5 pb-5'>
      {[...Array(pages).keys()].map((x) => (
        <Button
          key={x + 1}
          variant={x + 1 === page && 'primary'}
          className=' mx-1 rounded border-1 btn-sm'
          onClick={() => setPage(x + 1)}
        >
          {x + 1}
        </Button>
      ))}
    </Pagination>
  );
};

export default Paginate;
