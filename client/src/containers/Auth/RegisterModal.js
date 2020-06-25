import React, { useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

import ModalHeader from '../../components/UI/Modal/ModalHeader/ModalHeader';
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

export default function RegisterModal(props) {
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

  return (
    <StyledModal show={props.show} clickedBackdrop={props.handleRegisterClose}>
      <ModalHeader>Register</ModalHeader>
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
    </StyledModal>
  );
}
