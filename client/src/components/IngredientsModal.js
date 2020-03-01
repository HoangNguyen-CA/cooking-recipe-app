import React, { useState } from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';

export default function IngredientsModal({ ingredients }) {
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Ingredients</Button>

      <Modal show={modal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredients</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {ingredients.map(name => {
            return <p>{name}</p>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
