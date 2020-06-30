import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Backdrop = (props) => {
  return props.show ? (
    <StyledBackdrop
      onClick={props.clicked}
      className={props.className}
    ></StyledBackdrop>
  ) : (
    ''
  );
};

export default Backdrop;
