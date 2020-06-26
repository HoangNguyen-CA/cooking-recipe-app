import React from 'react';
import styled from 'styled-components';

import TextInput from './TextInput';
import Label from './Label';

const ValidatedInput = styled(TextInput)`
  ${(props) =>
    !props.valid && props.touched
      ? `border: 1.5px solid ${props.theme.colors.danger};`
      : ''}

  &:focus {
    ${(props) =>
      !props.valid && props.touched
        ? `border: 1.5px solid ${props.theme.colors.danger};`
        : ''}
  }
`;

const Group = styled.div``;

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <ValidatedInput
          {...props.elementConfig}
          valid={props.valid}
          touched={props.touched}
          value={props.value}
          onChange={props.changed}
        ></ValidatedInput>
      );
      break;
    default:
      inputElement = (
        <ValidatedInput
          {...props.elementConfig}
          valid={props.valid}
          value={props.value}
          onChange={props.changed}
        ></ValidatedInput>
      );
  }
  return (
    <Group>
      <Label>{props.label}</Label>
      {inputElement}
    </Group>
  );
};

export default Input;
