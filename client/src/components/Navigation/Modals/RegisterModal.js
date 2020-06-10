import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

import ModalHeader from '../../UI/Modal/ModalHeader/ModalHeader';
import Label from '../../Forms/Label';
import TextInput from '../../Forms/TextInput';

import styled from 'styled-components';

const SubmitButton = styled(Button)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  margin-top: 2em;
`;

export default function RegisterModal(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Modal show={props.show} clickedBackdrop={props.handleRegisterClose}>
      <ModalHeader>Register</ModalHeader>
      <Label htmlFor='login-name'>Username: </Label>
      <TextInput
        name='name'
        type='text'
        id='login-name'
        value={username}
        onChange={handleUsernameChange}
      />
      <Label htmlFor='login-password'>Password: </Label>
      <TextInput
        name='name'
        type='password'
        id='login-password'
        target={password}
        onChange={handlePasswordChange}
      />
      <SubmitButton>Submit</SubmitButton>
    </Modal>
  );
}
