import React, { useState } from 'react';
import styled from 'styled-components';

import Label from './Label';
import TextInput from './TextInput';

import { v4 as uuidv4 } from 'uuid';

const Group = styled.div`
  margin-top: 0.5em;
  font-size: 1rem;
`;

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

const Message = styled.small`
  display: block;

  color: ${(props) => props.theme.colors.danger};
  font-size: 0.8em;
  text-transform: capitalize;
  ${(props) => {
    if (!props.valid && props.touched) {
      return 'opacity: 1;';
    } else {
      return 'opacity: 0;';
    }
  }}
`;

const FormGroup = ({
  elementType,
  elementConfig,
  valid,
  touched,
  value,
  changed,
  label,
  msg,
}) => {
  let inputElement = null;
  const [uuid] = useState(uuidv4());

  switch (elementType) {
    case 'input':
      inputElement = (
        <ValidatedInput
          {...elementConfig}
          id={uuid}
          valid={valid}
          touched={touched}
          value={value}
          onChange={changed}
        ></ValidatedInput>
      );
      break;
    default:
      inputElement = (
        <ValidatedInput
          {...elementConfig}
          id={uuid}
          valid={valid}
          touched={touched}
          value={value}
          onChange={changed}
        ></ValidatedInput>
      );
  }
  return (
    <Group>
      <Label htmlFor={uuid}>{label}:</Label>
      {inputElement}
      <Message valid={valid} touched={touched}>
        {msg || ''}
      </Message>
    </Group>
  );
};

export default FormGroup;
