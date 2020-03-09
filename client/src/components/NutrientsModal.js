import React, { useState } from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import uuid from 'uuid';
import styled from 'styled-components';

const Lead = styled.p`
  font-size: 1.3rem;
`;

const Para = styled.p`
  font-size: 1rem;
`;

export default function NutrientsModal({ nutrients, custom }) {
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
        Nutrients
      </Button>

      <Modal show={modal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'poppins' }}>Nutrients</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {nutrients.map(nut => {
            return (
              <span key={uuid()}>
                {nutrients[0].label == nut.label ? '' : <hr></hr>}

                <Lead>{nut.label}</Lead>
                <Para>
                  Total: {Math.round(nut.total)}
                  {nut.unit}
                </Para>
                <Para>Daily: {Math.round(nut.daily)}%</Para>
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
