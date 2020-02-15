import React, { useState } from 'react';
import {
  Nav,
  Modal,
  Button,
  Form,
  FormControl,
  FormLabel
} from 'react-bootstrap';

export default function RegisterModal() {
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  const handleSubmit = () => {};

  return (
    <>
      <Nav.Link onClick={handleOpen}>Login</Nav.Link>

      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to an account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <FormLabel>Email</FormLabel>
            <FormControl type='email' placeholder='email'></FormControl>
          </Form.Group>

          <Form.Group>
            <FormLabel>Password</FormLabel>
            <FormControl placeholder='password'></FormControl>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
