import React from 'react';
import styled from 'styled-components';
import Modal, { ModalHeader } from '../../components/UI/Modal/Modal';
import ErrorBox from '../../components/Error/ErrorBox';
import Button from '../../components/UI/Button/Button';

import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

import PropTypes from 'prop-types';

const StyledModal = styled(Modal)`
  max-width: 350px;
  width: 80%;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 0.7em;
`;

const AuthTemplate = ({
  header,
  error,
  children,
  handleSubmit,
  show,
  handleClose,
  loading,
}) => {
  return (
    <StyledModal show={show} clickedBackdrop={handleClose}>
      <LoadingScreen show={loading}></LoadingScreen>
      <ModalHeader>{header}</ModalHeader>
      <ErrorBox error={error}></ErrorBox>
      <form onSubmit={handleSubmit}>
        {children}
        <SubmitButton primary submit>
          Submit
        </SubmitButton>
      </form>
    </StyledModal>
  );
};

AuthTemplate.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,

  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AuthTemplate;
