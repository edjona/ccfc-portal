import React from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import loginSegmentConfig from './LoginSegment.config';

const { emailInput, passwordInput, loginButton } = loginSegmentConfig;
const { Input } = Form;

const LoginSegment = ({ isUserNotFound, isWrongPassword }) => (
  <Segment>
    <Input {...emailInput} error={isUserNotFound} />
    <Input {...passwordInput} error={isWrongPassword} />
    <Button {...loginButton} />
  </Segment>
);

LoginSegment.propTypes = {
  isUserNotFound: PropTypes.bool.isRequired,
  isWrongPassword: PropTypes.bool.isRequired,
};

export default LoginSegment;
