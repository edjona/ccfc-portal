import React from 'react';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import registerFormConfiguration from './RegisterForm.config';

const { Input, Select } = Form;
const {
  fullNameInput, nicknameInput, birthdayInput, genderSelect, emailInput, passwordInput,
  confirmPasswordInput, registerButton,
} = registerFormConfiguration;

const registerSegment = (isPasswordViolation) => (
  <Segment>
    <Input {...fullNameInput} />
    <Input {...nicknameInput} />
    <Input {...birthdayInput} />
    <Select {...genderSelect} />
    <Input {...emailInput} />
    <Input {...passwordInput} error={isPasswordViolation} />
    <Input {...confirmPasswordInput} error={isPasswordViolation} />
    <Button {...registerButton} />
  </Segment>
);

const passwordViolationError = (
  <Message
    error
    header="Password Violation"
    content="Your password did not match with confirmation password. Please re-type your password."
  />
);

const RegisterForm = ({ isPasswordViolation, handleRegister }) => (
  <Form size="large" onSubmit={handleRegister} error={isPasswordViolation}>
    {registerSegment(isPasswordViolation)}
    {passwordViolationError}
  </Form>
);

RegisterForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  isPasswordViolation: PropTypes.bool.isRequired,
};

export default RegisterForm;
