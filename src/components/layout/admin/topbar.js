import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Topbar = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  return (
    <header className='main__bg-color border-bottom pt-6 text-white'>
      <Container fluid>
        <div className='mb-npx'>
          <div className='row align-items-center text-white'>
            <div className='col-sm-6 col-12 mb-4 mb-sm-0 text-white'>
              <h1 className='mb-2 text-white'>
                <Navbar.Brand href='#home'></Navbar.Brand>
              </h1>
            </div>
            <div className='col-sm-6 col-12 text-sm-end'>
              <div className=' text-white'>
                <Button
                  variant='warning'
                  disabled={!userInfo.user.coordinator}
                  onClick={() => navigate('/admin/add-user')}
                  className='m-3'
                >
                  Add User
                  <FaUserPlus className='mx-2' size='1.5rem' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Topbar;
