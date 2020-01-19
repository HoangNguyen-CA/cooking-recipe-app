import React, { useState } from 'react';
import { Nav, Modal, Button } from 'react-bootstrap';

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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
