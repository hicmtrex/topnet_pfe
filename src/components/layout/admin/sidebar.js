import React from 'react';
import { Nav, Image, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { AiFillHome, AiFillDashboard } from 'react-icons/ai';
import { FaUserTie, FaUser, FaUserCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav
      style={{ backgroundColor: 'rgba(22, 34, 57, 0.95)' }}
      className='navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-dark  border-bottom border-bottom-lg-0 '
      id='navbarVertical'
    >
      <Container fluid>
        {/* Toggler */}{' '}
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
            className=''
          />
          <span className='logo text-white'>
            <em>Top</em> Stage
          </span>
        </Link>
        <div className='navbar-user d-lg-none'>
          <div className='dropdown'>
            <a
              href='#'
              id='sidebarAvatar'
              role='button'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <div className='avatar-parent-child'>
                <img
                  alt='Image Placeholder'
                  src='https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                  className='avatar avatar- rounded-circle'
                />
                <span className='avatar-child avatar-badge bg-success' />
              </div>
            </a>{' '}
            <div
              className='dropdown-menu dropdown-menu-end'
              aria-labelledby='sidebarAvatar'
            >
              <a href='#' className='dropdown-item'>
                Profile
              </a>
              <a href='#' className='dropdown-item'>
                Settings
              </a>
              <a href='#' className='dropdown-item'>
                Billing
              </a>
              <hr className='dropdown-divider' />{' '}
              <button className='dropdown-item'>Logout</button>
            </div>
          </div>
        </div>
        <div className='collapse navbar-collapse' id='sidebarCollapse'>
          <ul className='navbar-nav'>
            <li className='nav-item  '>
              <Link className='nav-link p-5' to='/'>
                <AiFillHome className='me-2' size={'1.5rem'} /> Home
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/admin/dashboard'>
                <AiFillDashboard className='me-2' size={'1.5rem'} /> Dashboard
              </Link>
            </li>

            <li className='nav-item '>
              <Link className='nav-link p-5' to='/admin/users-list'>
                <FaUserTie className='me-2' size={'1.5rem'} /> Users
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/admin/stages-list'>
                <FaUser className='me-2' size={'1.5rem'} /> Strategies
              </Link>
            </li>
          </ul>

          <hr className='navbar-divider my-5 opacity-20' />
          <ul className='navbar-nav mb-md-4'>
            <li>
              <div
                className='nav-link text-xs font-semibold text-uppercase text-muted ls-wide'
                href='#'
              >
                Contacts
                <span className='badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4'>
                  13
                </span>
              </div>
            </li>
            <li>
              <a href='#' className='nav-link d-flex align-items-center'>
                <div className='me-4'>
                  <div className='position-relative d-inline-block text-white'>
                    <img
                      alt='Image Placeholder'
                      src='https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                      className='avatar rounded-circle'
                    />
                    <span className='position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle' />{' '}
                  </div>
                </div>
                <div>
                  <span className='d-block text-sm font-semibold'>
                    Marie Claire
                  </span>
                  <span className='d-block text-xs text-muted font-regular'>
                    Paris, FR
                  </span>
                </div>
                <div className='ms-auto'>
                  <i className='bi bi-chat' />
                </div>
              </a>
            </li>
            <li>
              <a href='#' className='nav-link d-flex align-items-center'>
                <div className='me-4'>
                  <div className='position-relative d-inline-block text-white'>
                    <span className='avatar bg-soft-warning text-warning rounded-circle'>
                      JW
                    </span>
                    <span className='position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle' />{' '}
                  </div>
                </div>
                <div>
                  <span className='d-block text-sm font-semibold'>
                    Michael Jordan
                  </span>
                  <span className='d-block text-xs text-muted font-regular'>
                    Bucharest, RO
                  </span>
                </div>
                <div className='ms-auto'>
                  <i className='bi bi-chat' />
                </div>
              </a>
            </li>
            <li>
              <a href='#' className='nav-link d-flex align-items-center'>
                <div className='me-4'>
                  <div className='position-relative d-inline-block text-white'>
                    <Image
                      alt='...'
                      src='https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                      className='avatar rounded-circle'
                    />
                    <span className='position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle' />{' '}
                  </div>
                </div>
                <div>
                  <span className='d-block text-sm font-semibold'>
                    Heather Wright
                  </span>
                  <span className='d-block text-xs text-muted font-regular'>
                    London, UK
                  </span>
                </div>
                <div className='ms-auto'>
                  <i className='bi bi-chat' />
                </div>
              </a>
            </li>
          </ul>
          <div className='mt-auto' />
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <LinkContainer to='/users/profile'>
                <Nav.Link>
                  <i className='bi bi-person-square' /> My Account
                </Nav.Link>
              </LinkContainer>
            </li>
            <li className='nav-item'>
              <Nav.Link>
                <i className='bi bi-box-arrow-left' /> Logout
              </Nav.Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Sidebar;
