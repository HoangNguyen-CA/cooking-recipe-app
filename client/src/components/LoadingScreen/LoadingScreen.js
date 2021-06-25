import React from 'react';
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

LoadingScreen.propTypes = {
  show: PropTypes.bool,
};
export default LoadingScreen;
