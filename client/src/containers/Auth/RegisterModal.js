import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInputs from '../../components/Forms/FormInputs';
import AuthTemplate from './AuthTemplate';

import PropTypes from 'prop-types';

import { checkSubmitValidity, checkValidity } from '../../shared/formAuth';

function RegisterModal({
  show,
  handleRegisterClose,
  register,
  error,
  loading,
}) {
  const [controls, setControls] = useState({
    username: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
      },
      validation: {
        required: true,
        maxLength: 15,
      },
      value: '',
      msg: '',
      valid: false,
      touched: false,
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
      },
      validation: {
        required: true,
        isEmail: true,
      },
      value: '',
      msg: '',
      valid: false,
      touched: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
      },
      validation: {
        required: true,
        minLength: 5,
      },
      value: '',
      msg: '',
      valid: false,
      touched: false,
    },
  });

  const handleInputChanged = (event, controlName) => {
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
    setControls(updatedControls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkSubmitValidity(controls)) {
      register(
        controls.username.value,
        controls.email.value,
        controls.password.value
      );
    }
  };

  return (
    <AuthTemplate
      handleSubmit={handleSubmit}
      error={error}
      header='Register'
      show={show}
      handleClose={handleRegisterClose}
    >
      <FormInputs
        controls={controls}
        handleInputChanged={handleInputChanged}
      ></FormInputs>
    </AuthTemplate>
  );
}

const mapStateToProps = (state) => ({
  error: state.auth.registerError,
  loading: state.auth.loading,
});

RegisterModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleRegisterClose: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(RegisterModal);
