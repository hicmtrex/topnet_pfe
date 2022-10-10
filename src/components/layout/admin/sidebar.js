import React from 'react';
import { Nav, Image, Container, Button, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { AiFillHome, AiFillDashboard } from 'react-icons/ai';
import { FaUserTie } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { GiSecretBook } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { stageLogout } from '../../../store/stages/stage-loginSlice';
import { userLogout } from '../../../store/users/user-loginSlice';

const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(stageLogout());
    dispatch(userLogout());
    navigate('/stages/auth-login');
  };

  return (
    <Navbar
      expand='lg'
      variant='dark'
      style={{ backgroundColor: 'rgba(22, 34, 57, 0.95)' }}
      className=' show navbar-vertical h-lg-screen  px-0 py-3  border-bottom border-bottom-lg-0 '
      id='navbarVertical'
    >
      <Container fluid>
        <Button
          className='navbar-toggler ms-n2'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarCollapse'
          aria-controls='sidebarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </Button>
        <Link
          className='navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center'
          to='/'
        >
          <Image
            fluid
            src='/assets/images/top_netlogo.png'
            alt='logo'
            style={{ height: '50px' }}
          />
          <span className='logo text-white'>
            <span style={{ color: '#f5a425' }}>op</span> Stage
          </span>
        </Link>
        <div className='navbar-user d-lg-none'>
          <div className='dropdown'>
            <Link
              to='#'
              id='sidebarAvatar'
              role='button'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <div className='avatar-parent-child'>
                <Image
                  alt='Image Placeholder'
                  src='https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                  className='avatar avatar- rounded-circle'
                />
                <span className='avatar-child avatar-badge bg-success' />
              </div>
            </Link>{' '}
            <div
              className='dropdown-menu dropdown-menu-end'
              aria-labelledby='sidebarAvatar'
            >
              <Link to='/' className='dropdown-item'>
                Profile
              </Link>
              <Link to='#' className='dropdown-item'>
                Paramètres
              </Link>
              <Link to='#' className='dropdown-item'>
                Facturation
              </Link>
              <hr className='dropdown-divider' />{' '}
              <button className='dropdown-item'>Se déconnecter</button>
            </div>
          </div>
        </div>
        <div className='collapse navbar-collapse' id='sidebarCollapse'>
          <ul className='navbar-nav'>
            <li className='nav-item  '>
              <Link className='nav-link p-5' to='/'>
                <AiFillHome className='me-2' size={'1.5rem'} /> Accueil
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/admin/dashboard'>
                <AiFillDashboard className='me-2' size={'1.5rem'} /> Tableau de
                bord
              </Link>
            </li>
            {userInfo.user.coordinator && (
              <li className='nav-item '>
                <Link className='nav-link p-5' to='/admin/users-list'>
                  <FaUserTie className='me-2' size={'1.5rem'} /> Utilisateurs
                </Link>
              </li>
            )}
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/admin/stages-list'>
                <HiUsers className='me-2' size={'1.5rem'} /> Stagiaires
              </Link>
            </li>
            {userInfo.user.service_rh && (
              <li className='nav-item '>
                <Link className='nav-link p-5' to='/admin/test-psychotechnique'>
                  <GiSecretBook className='me-2 ' size={'1.5rem'} /> Test
                  Psychotechnique
                </Link>
              </li>
            )}
            {userInfo.user.encadrant && (
              <li className='nav-item '>
                <Link className='nav-link p-5' to='/admin/sujet-stage'>
                  <HiUsers className='me-2' size={'1.5rem'} /> Sujet de stage
                </Link>
              </li>
            )}
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/admin/approved-stages'>
                <HiUsers className='me-2' size={'1.5rem'} /> Approuvé Stagiaires
              </Link>
            </li>
          </ul>

          <hr className='navbar-divider my-5 opacity-20' />

          <div className='' />
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <LinkContainer to='/stages/profile'>
                <Nav.Link>
                  <i className='bi bi-person-square' /> Mon Compte
                </Nav.Link>
              </LinkContainer>
            </li>
            <li className='nav-item'>
              <Nav.Link onClick={onLogout}>
                <i className='bi bi-box-arrow-left' /> Se déconnecte
              </Nav.Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
