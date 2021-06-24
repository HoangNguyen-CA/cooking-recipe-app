import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styled from 'styled-components';

const StyledModal = styled.div`
  background-color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);

  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 1000;

  width: 70%;
  border-radius: 5px;
  padding: 1.5em;

  overflow: auto;
  max-height: 90%;
  transform: translate(-50%, -50%);
`;

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.clickedBackdrop}></Backdrop>
      {props.show ? (
        <StyledModal className={props.className}>{props.children}</StyledModal>
      ) : null}
    </>
  );
};

export const ModalHeader = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5em;
  text-align: center;
`;

export default Modal;
