import React from 'react';
import styled from 'styled-components';

import Label from './Label';
import TextInput from './TextInput';

import PropTypes from 'prop-types';

const Container = styled.div`
  margin-top: 0;
  font-size: 1rem;
  width: 100%;
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

  switch (elementType) {
    case 'input':
      inputElement = (
        <ValidatedInput
          {...elementConfig}
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
          valid={valid}
          touched={touched}
          value={value}
          onChange={changed}
        ></ValidatedInput>
      );
  }
  return (
    <Container>
      <Label>
        {label}:{inputElement}
      </Label>

      <Message valid={valid} touched={touched}>
        {msg || '_'}
      </Message>
    </Container>
  );
};

FormGroup.propTypes = {
  elementType: PropTypes.string,
  elementConfig: PropTypes.object,
  valid: PropTypes.bool,
  touched: PropTypes.bool,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  msg: PropTypes.string,
};

export default FormGroup;
