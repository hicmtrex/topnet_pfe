import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Banner from './banner/banner';
import Contact from './contact/contact';
import Features from './features/lading-page/lading-page';
import Footer from './footer/footer';
import Header from './navbar/navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === '/' && <Banner />}
      {location.pathname === '/' && <Features />}
      <Container className='main__home py-3'>{children}</Container>
      {location.pathname === '/' && <Contact />}
      <Footer />
    </>
  );
};

export default Layout;
