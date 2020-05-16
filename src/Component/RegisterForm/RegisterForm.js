import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import RegisterSegment from '../RegisterSegment/RegisterSegment';

const passwordViolationError = (
  <Message
    error
    header="Password Violation"
    content="Your password did not match with confirmation password. Please re-type your password."
  />
);

const RegisterForm = ({ isPasswordViolation, handleRegister }) => (
  <Form size="large" onSubmit={handleRegister} error={isPasswordViolation}>
    <RegisterSegment isPasswordViolation={isPasswordViolation} />
    {passwordViolationError}
  </Form>
);

RegisterForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  isPasswordViolation: PropTypes.bool.isRequired,
};

export default RegisterForm;
