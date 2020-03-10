import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import uuid from 'uuid';

export default function IngredientsModal({ ingredients, custom }) {
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Button onClick={handleOpen} style={custom}>
        Ingredients
      </Button>

      <Modal show={modal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'poppins' }}>
            Ingredients
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {ingredients.map(name => {
            return <p key={uuid()}>{name}</p>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
