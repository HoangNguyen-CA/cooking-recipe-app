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
import { register } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../../actions/errorActions';

export default function RegisterModal() {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');

  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

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
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    dispatch(register(user));
  };

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setMessage(error.msg.msg);
    } else {
      setMessage('');
    }
  }, [error]);

  return (
    <>
      <Nav.Link onClick={handleOpen}>Register</Nav.Link>

      <Modal show={modal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'poppins' }}>
            Register for an account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message ? <Alert variant='danger'>{message}</Alert> : ''}
          <Form.Group>
            <FormLabel>Name</FormLabel>
            <FormControl placeholder='name' ref={nameRef}></FormControl>
          </Form.Group>

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
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
