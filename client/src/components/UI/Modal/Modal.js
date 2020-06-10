import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styled from 'styled-components';

const StyledModal = styled.div`
  background-color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);

  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 500;

  width: 70%;
  max-width: 500px;
  border-radius: 5px;
  padding: 1.5em;

  transform: translate(-50%, -50%);
`;

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.clickedBackdrop}></Backdrop>
      {props.show ? <StyledModal>{props.children}</StyledModal> : null}
    </>
  );
};

export default Modal;
