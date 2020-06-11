import React from 'react';
import Button from '../../../UI/Button/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  margin: 0.5em;
`;

const ExcludeItem = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default ExcludeItem;
