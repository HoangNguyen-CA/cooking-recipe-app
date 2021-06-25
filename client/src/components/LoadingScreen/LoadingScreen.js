import React from 'react';
import Spinner from '../UI/Spinner/Spinner';

import Modal from '../UI/Modal/Modal';

import styled from 'styled-components';

const TransparentModal = styled(Modal)`
  background: transparent;
  box-shadow: none;
`;

const LoadingScreen = ({ show }) => {
  return (
    <>
      <TransparentModal show={show}>
        <Spinner></Spinner>
      </TransparentModal>
    </>
  );
};

export default LoadingScreen;
