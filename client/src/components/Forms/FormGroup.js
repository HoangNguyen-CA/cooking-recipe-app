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

const Message = styled.small`
  display: block;
  padding-left: 1em;
  color: ${(props) => props.theme.colors.danger};
  font-size: 0.8rem;
  text-transform: capitalize;
  ${(props) => {
    if (!props.valid && props.touched && props.msg !== '') {
      return 'opacity: 1;';
    } else {
      return 'opacity: 0;';
    }
  }}
`;

const NoMarginLabel = styled(Label)`
  margin-top: 0;
`;

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
          touched={props.touched}
          value={props.value}
          onChange={props.changed}
        ></ValidatedInput>
      );
  }
  return (
    <Group>
      <NoMarginLabel>{props.label}</NoMarginLabel>
      {inputElement}
      <Message valid={props.valid} touched={props.touched} msg={props.msg}>
        {props.msg || '_'}
      </Message>
    </Group>
  );
};

export default Input;
