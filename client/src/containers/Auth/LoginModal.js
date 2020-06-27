import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Modal from '../../components/UI/Modal/Modal';
import ErrorDiv from '../../components/Error/ErrorDiv';

import Button from '../../components/UI/Button/Button';
import Separator from '../../components/UI/Separator/Separator';

import ModalHeader from '../../components/UI/Modal/ModalHeader/ModalHeader';
import Spinner from '../../components/UI/Spinner/Spinner';

import FormInputs from '../../components/Forms/FormInputs';

import { checkValidity, checkSubmitValidity } from '../../shared/formAuth';

const StyledModal = styled(Modal)`
  max-width: 400px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  margin-top: 2em;
`;

function LoginModal(props) {
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
      valid: false,
      touched: false,
    },
  });

  const handleInputChanged = (event, controlName) => {
    const updatedControls = {
      ...controls,
      [controlName]: {
        ...controls[controlName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true,
      },
    };
    setControls(updatedControls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkSubmitValidity(controls)) {
      props.login(controls.email.value, controls.password.value);
    }
  };

  let content = (
    <>
      <ModalHeader>Login</ModalHeader>
      <ErrorDiv error={props.error}></ErrorDiv>
      <Separator margin='0.5em 0' />
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
    <StyledModal show={props.show} clickedBackdrop={props.handleLoginClose}>
      {content}
    </StyledModal>
  );
}

const mapStateToProps = (state) => ({
  error: state.auth.loginError,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(LoginModal);
