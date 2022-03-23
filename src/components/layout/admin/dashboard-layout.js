import React, { useEffect } from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) return navigate('/');
  }, [userInfo, navigate]);

  return (
    <div className='d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary'>
      <Sidebar />
      <div className='h-screen flex-grow-1 overflow-y-lg-auto'>
        <Topbar />
        <main className='py-6 bg-surface-secondary'>
          <Container fluid>{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
