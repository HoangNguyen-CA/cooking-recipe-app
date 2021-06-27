import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInputs from '../../components/Forms/FormInputs';

import PropTypes from 'prop-types';

import { checkValidity, checkSubmitValidity } from '../../shared/formAuth';
import AuthTemplate from './AuthTemplate';

function LoginModal({ show, handleLoginClose, login, error, loading }) {
  const [controls, setControls] = useState({
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
      login(controls.email.value, controls.password.value);
    }
  };

  return (
    <AuthTemplate
      header='Sign In'
      handleSubmit={handleSubmit}
      error={error}
      show={show}
      handleClose={handleLoginClose}
      loading={loading}
    >
      <FormInputs
        controls={controls}
        handleInputChanged={handleInputChanged}
      ></FormInputs>
    </AuthTemplate>
  );
}

const mapStateToProps = (state) => ({
  error: state.auth.loginError,
  loading: state.auth.loading,
});

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleLoginClose: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps)(LoginModal);
