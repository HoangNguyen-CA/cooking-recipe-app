import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  padding: 0.5em 0.5em;
  border-radius: 4px;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  z-index: 100000000;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const ErrorDisplay = (props) => {
  let El;
  if (props.show) {
    El = (
      <Container {...props}>
        <Text>Error: {props.error}</Text>
      </Container>
    );
  } else {
    El = null;
  }
  return El;
};

const mapStateToProps = (state) => ({
  error: state.error.error,
  show: state.error.show,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDisplay);
