import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Modal from '../../components/UI/Modal/Modal';
import ModalHeader from '../../components/UI/Modal/ModalHeader/ModalHeader';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import ErrorDiv from '../../components/Error/ErrorDiv';

import FormInputs from '../../components/Forms/FormInputs';

import { checkSubmitValidity, checkValidity } from '../../shared/formAuth';

const StyledModal = styled(Modal)`
  max-width: 400px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  margin-top: 2em;
`;

function RegisterModal(props) {
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
      props.register(
        controls.username.value,
        controls.email.value,
        controls.password.value
      );
    }
  };

  let content = (
    <>
      <ModalHeader>Register</ModalHeader>
      <ErrorDiv error={props.error}></ErrorDiv>
      <form onSubmit={handleSubmit}>
        <FormInputs
          controls={controls}
          handleInputChanged={handleInputChanged}
        ></FormInputs>
        <SubmitButton type='submit'>Submit</SubmitButton>
      </form>
    </>
  );

  if (props.loading) {
    content = <Spinner />;
  }

  return (
    <StyledModal show={props.show} clickedBackdrop={props.handleRegisterClose}>
      {content}
    </StyledModal>
  );
}

const mapStateToProps = (state) => ({
  error: state.auth.registerError,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(RegisterModal);
