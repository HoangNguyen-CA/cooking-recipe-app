import React, { useState } from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import uuid from 'uuid';

export default function NutrientsModal({ nutrients }) {
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Nutrients</Button>

      <Modal show={modal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Nutrients</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {nutrients.map(nut => {
            return (
              <span key={uuid()}>
                <p className='lead'>{nut.label}</p>
                <p>
                  Total: {Math.round(nut.total)}
                  {nut.unit}
                </p>
                <p>Daily: {Math.round(nut.daily)}%</p>
                <hr></hr>
              </span>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
