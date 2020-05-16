const ErrorMessage = {
  'auth/wrong-password': {
    error: true,
    header: 'Wrong Password',
    content: 'The provided value for the password user property is invalid. It must be at least six characters. ',
  },
  'auth/user-not-found': {
    error: true,
    header: 'User Not Found',
    content: 'The provided of username is not found. Input the correct username in the form of email. ',
  },
  'auth/too-many-requests': {
    error: true,
    header: 'Server is Busy',
    content: 'Please wait a moment to make a login. ',
  },
  'auth/invalid-email': {
    error: true,
    header: 'Invalid Email',
    content: 'Please make sure you write the correct email.',
  },
};

export default ErrorMessage;
