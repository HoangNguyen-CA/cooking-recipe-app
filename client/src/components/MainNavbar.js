import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function MainNavbar() {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
      <Nav className='ml-auto'>
        <LoginModal></LoginModal>
        <RegisterModal></RegisterModal>
      </Nav>
    </Navbar>
  );
}
