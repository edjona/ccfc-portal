import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import regiterSegmentConfiguration from './RegisterSegment.config';

const { Input, Select } = Form;
const {
  fullNameInput, nicknameInput, birthdayInput, genderSelect, emailInput, passwordInput,
  confirmPasswordInput, registerButton,
} = regiterSegmentConfiguration;

const RegisterSegment = ({ isPasswordViolation }) => (
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

RegisterSegment.propTypes = { isPasswordViolation: PropTypes.bool.isRequired };

export default RegisterSegment;
