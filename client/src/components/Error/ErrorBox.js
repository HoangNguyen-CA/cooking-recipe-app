import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  border-radius: ${({ theme }) => theme.radius.medium};
  padding: 0.5em 0.1em;
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
`;

const ErrorDiv = ({ error }) => {
  let element = null;
  if (error) {
    element = <Container>{error}</Container>;
  }
  return <>{element}</>;
};

ErrorDiv.propTypes = {
  error: PropTypes.string,
};

export default ErrorDiv;
