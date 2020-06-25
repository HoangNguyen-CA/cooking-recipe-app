import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

import ErrorDiv from '../../components/Error/ErrorDiv';
import Separator from '../../components/UI/Separator/Separator';

import ModalHeader from '../../components/UI/Modal/ModalHeader/ModalHeader';
import Label from '../../components/Forms/Label';
import TextInput from '../../components/Forms/TextInput';
import Spinner from '../../components/UI/Spinner/Spinner';

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

function RegisterModal(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    props.register(username, email, password);
  };

  let content = (
    <>
      <ModalHeader>Register</ModalHeader>
      <ErrorDiv error={props.error}></ErrorDiv>
      <Separator margin='0.5em 0' />

      <Label htmlFor='register-name'>Username: </Label>
      <TextInput
        type='text'
        id='register-name'
        value={username}
        onChange={handleUsernameChange}
      />
      <Label htmlFor='register-email'>Email: </Label>
      <TextInput
        type='text'
        id='register-email'
        value={email}
        onChange={handleEmailChange}
      />
      <Label htmlFor='register-password'>Password: </Label>
      <TextInput
        type='password'
        id='register-password'
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
