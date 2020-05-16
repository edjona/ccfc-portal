import React, { useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useAuthContext } from '../../../Configuration/Auth';
import { buildErrorMessage, getError, is, handleErrorValidationProps } from './LoginForm.util';
import LoginSegment from '../LoginSegment/LoginSegment';

const LoginForm = ({ handleLogin }) => {
  const { loginError } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    if (loginError) {
      console.log(loginError);
      const errorData = getError(loginError);
      setError(loginError);
      setErrorMessage(errorData);
    } else {
      setError('');
      setErrorMessage({});
    }
  }, [loginError]);

  return (
    <Form size="large" onSubmit={handleLogin} error={is(error)}>
      <LoginSegment {...handleErrorValidationProps(error)} />
      { !_.isEmpty(errorMessage) && buildErrorMessage(errorMessage)}
    </Form>
  );
};

LoginForm.propTypes = { handleLogin: PropTypes.func.isRequired };

export default LoginForm;
