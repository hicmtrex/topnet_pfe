import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { stageLogout } from '../../../store/stages/stage-loginSlice';
import './navbar.css';
import { userLogout } from '../../../store/users/user-loginSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { userInfo } = useSelector((state) => state.stageLogin);
  const { userInfo: admin } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(stageLogout());
    dispatch(userLogout());
    navigate('/stages/auth-login');
  };

  return (
    <header>
      <Navbar
        className='navbar__top'
        collapseOnSelect
        expand='lg'
        variant='dark'
      >
        <Container fluid className='mx-5'>
          <img width={60} src='/assets/images/top_netlogo.png' alt='...' />
          <Navbar.Brand>
            <span className='logo'>
              <span style={{ color: '#f5a425' }}>op</span> Stage
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/' className='ms-2'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <Nav.Link href='/#features'>Features</Nav.Link>

              <Nav.Link href='/#contact'>Contact</Nav.Link>
            </Nav>
            {userInfo?.user.status === true || admin?.user.status === true ? (
              <Nav className='d-flex align-items-center mx-5'>
                <NavDropdown
                  title={
                    userInfo?.user.first_name.toUpperCase() ||
                    admin?.user.first_name.toUpperCase()
                  }
                  id='collasible-nav-dropdown'
                >
                  {admin?.user.coordinator ||
                  admin?.user.service_rh ||
                  userInfo?.user.service_rh ||
                  userInfo?.user.service_rh ? (
                    <LinkContainer to='/admin/dashboard'>
                      <NavDropdown.Item className='text-dark'>
                        Dashboard
                      </NavDropdown.Item>
                    </LinkContainer>
                  ) : null}
                  <LinkContainer to='/stages/profile'>
                    <NavDropdown.Item className='text-dark'>
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
                <a href='#' className='text-white mx-2'>
                  <FaUserAlt size={'1.3rem'} />
                </a>
              </Nav>
            ) : (
              <Nav>
                <LinkContainer to='/stages/auth-login'>
                  <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/stages/auth-register'>
                  <Nav.Link>Sign up</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
