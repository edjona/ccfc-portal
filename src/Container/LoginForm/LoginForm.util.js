import { Message } from 'semantic-ui-react';
import React from 'react';
import ErrorMessage from '../../Constant/ErrorMessage';

const getError = (loginError) => ErrorMessage[loginError];
const buildErrorMessage = (errorMessage) => (<Message {...errorMessage} />);
const is = (error) => error !== '';

const handleErrorValidationProps = (error) => {
  if ((error === 'auth/user-not-found') || ((error === 'auth/invalid-email'))) {
    return {
      isUserNotFound: true,
      isWrongPassword: false,
    };
  }

  if (error === 'auth/wrong-password') {
    return {
      isUserNotFound: false,
      isWrongPassword: true,
    };
  }

  return {
    isUserNotFound: false,
    isWrongPassword: false,
  };
};

export { getError, buildErrorMessage, is, handleErrorValidationProps };
