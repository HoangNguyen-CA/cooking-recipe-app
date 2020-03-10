import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import LogoutModal from './auth/LogoutModal';
import FavoritesModal from './FavoritesModal';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 1.6rem;
  display: inline;
  font-family: poppins;
`;

export default function MainNavbar() {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand>
        <Title className='text-primary'>Recipe Search</Title>
      </Navbar.Brand>
      <Nav className='ml-auto'>
        {isAuthenticated ? (
          <>
            <Nav.Item className='navbar-text text-success mr-3'>
              Logged in as {user.name}
            </Nav.Item>
            <FavoritesModal></FavoritesModal>
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
