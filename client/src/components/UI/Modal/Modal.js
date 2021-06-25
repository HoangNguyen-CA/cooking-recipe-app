import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;

  border-radius: 5px;
  padding: 1.5em;

  overflow: auto;
  max-height: 90%;
`;

const Modal = ({ show, clickedBackdrop, children, className }) => {
  return (
    <>
      <Backdrop show={show} clicked={clickedBackdrop}></Backdrop>
      {show ? (
        <StyledModal className={className}>{children}</StyledModal>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  clickedBackdrop: PropTypes.func,
  children: PropTypes.node,
};

export const ModalHeader = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5em;
  text-align: center;
`;

export default Modal;
