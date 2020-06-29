import React from 'react';

import FormGroup from './FormGroup';

const Form = (props) => {
  const formElementsArray = [];
  for (let key in props.controls) {
    formElementsArray.push({ id: key, config: props.controls[key] });
  }

  let form = formElementsArray.map((formElement) => (
    <FormGroup
      key={formElement.id}
      label={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      shouldValidate={formElement.config.validation}
      changed={(e) => props.handleInputChanged(e, formElement.id)}
      valid={formElement.config.valid}
      touched={formElement.config.touched}
      msg={formElement.config.msg}
    />
  ));
  return <>{form}</>;
};

export default Form;
