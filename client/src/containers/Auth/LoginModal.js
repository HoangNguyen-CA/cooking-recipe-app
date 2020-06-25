import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import Separator from '../../components/UI/Separator/Separator';

import ModalHeader from '../../components/UI/Modal/ModalHeader/ModalHeader';
import ErrorDiv from '../../components/Error/ErrorDiv';
import Spinner from '../../components/UI/Spinner/Spinner';

import Label from '../../components/Forms/Label';
import TextInput from '../../components/Forms/TextInput';

import styled from 'styled-components';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    props.login(email, password);
  };

  let content = (
    <>
      <ModalHeader>Login</ModalHeader>
      <ErrorDiv error={props.error}></ErrorDiv>
      <Separator margin='0.5em 0' />

      <Label htmlFor='login-name'>Email: </Label>
      <TextInput
        type='text'
        id='login-email'
        value={email}
        onChange={handleUsernameChange}
      />
      <Label htmlFor='login-password'>Password: </Label>
      <TextInput
        type='password'
        id='login-password'
        target={password}
        onChange={handlePasswordChange}
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
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
