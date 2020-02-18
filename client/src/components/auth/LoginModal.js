import React, { useState, useRef, useEffect } from 'react';
import {
  Nav,
  Modal,
  Button,
  Form,
  FormControl,
  FormLabel,
  Alert
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

export default function RegisterModal() {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const error = useSelector(state => state.error);

  const handleOpen = () => {
    setModal(true);
    dispatch(clearErrors());
  };
  const handleClose = () => {
    setModal(false);
    dispatch(clearErrors());
  };

  const handleSubmit = () => {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    dispatch(login(user));
  };

  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
      setMessage(error.msg.msg);
    } else {
      setMessage('');
    }
  }, [error]);
  return (
    <>
      <Nav.Link onClick={handleOpen}>Login</Nav.Link>

      <Modal show={modal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login to an account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {message ? <Alert variant='danger'>{message}</Alert> : ''}

          <Form.Group>
            <FormLabel>Email</FormLabel>
            <FormControl
              type='email'
              placeholder='email'
              ref={emailRef}
            ></FormControl>
          </Form.Group>

          <Form.Group>
            <FormLabel>Password</FormLabel>
            <FormControl placeholder='password' ref={passwordRef}></FormControl>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
