import React, { useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import LogoutModal from './auth/LogoutModal';

import { useSelector } from 'react-redux';

export default function MainNavbar() {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand>Recipe Search</Navbar.Brand>
      <Nav className='ml-auto'>
        {isAuthenticated ? (
          <>
            <Nav.Item className='navbar-text text-success mr-3'>
              Logged in as {user.name}
            </Nav.Item>
            <LogoutModal className=''></LogoutModal>
          </>
        ) : (
          <>
            <LoginModal></LoginModal>
            <RegisterModal></RegisterModal>
          </>
        )}
      </Nav>
    </Navbar>
  );
}
