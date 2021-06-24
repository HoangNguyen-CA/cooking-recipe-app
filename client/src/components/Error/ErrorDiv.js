import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  border-radius: 3px;
  padding: 0.5em 0.1em;
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
`;

const ErrorDiv = (props) => {
  let element = null;
  if (props.error) {
    element = <Container>{props.error}</Container>;
  }
  return <>{element}</>;
};

export default ErrorDiv;
