import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 7px 7px ${({ theme }) => theme.colors.darkLight};

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;

  border-radius: ${({ theme }) => theme.radius.medium};
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
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1em;
  text-align: center;
`;

export default Modal;
