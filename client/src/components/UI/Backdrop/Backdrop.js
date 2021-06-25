import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Backdrop = ({ clicked, show, className }) => {
  return show ? (
    <StyledBackdrop onClick={clicked} className={className}></StyledBackdrop>
  ) : (
    ''
  );
};

Backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
};

export default Backdrop;
