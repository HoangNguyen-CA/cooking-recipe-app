import React from 'react';

import FormGroup from './FormGroup';
import PropTypes from 'prop-types';

import { checkValidity } from '../../shared/formAuth';

export const handleControlChange = (event, controlName, controls) => {
  const { valid, msg } = checkValidity(
    event.target.value,
    controls[controlName].validation,
    controlName
  );
  const updatedControls = {
    ...controls,
    [controlName]: {
      ...controls[controlName],
      value: event.target.value,
      msg: msg,
      valid: valid,
      touched: true,
    },
  };
  return updatedControls;
};

const Form = ({ controls, handleInputChanged }) => {
  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <FormGroup
      key={formElement.id}
      label={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      shouldValidate={formElement.config.validation}
      changed={(e) => handleInputChanged(e, formElement.id)}
      valid={formElement.config.valid}
      touched={formElement.config.touched}
      msg={formElement.config.msg}
    />
  ));
  return <>{form}</>;
};

Form.propTypes = {
  controls: PropTypes.objectOf(
    PropTypes.shape({
      elementType: PropTypes.string,
      elementConfig: PropTypes.object,
      validation: PropTypes.object,
      value: PropTypes.string.isRequired,
      msg: PropTypes.string,
      valid: PropTypes.bool,
      touched: PropTypes.bool,
    })
  ),
  handleInputChanged: PropTypes.func.isRequired,
};

export default Form;
