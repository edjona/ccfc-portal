import React, { useCallback } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import firebaseAuth from '../../Configuration/FireBaseAuth';
import { useAuthContext } from '../../Configuration/Auth';
import LoginForm from './LoginForm/LoginForm';

const reactRouterPropTypes = require('react-router-prop-types');

const Login = ({ history }) => {
  const { currentUser, setLoginError } = useAuthContext();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { loginEmail, loginPassword } = event.target.elements;

      await firebaseAuth.auth().signInWithEmailAndPassword(loginEmail.value, loginPassword.value)
        .then((user) => {
          history.push('/home');
          console.log(user);
        })
        .catch((error) => {
          setLoginError(error.code);
        });
    }, [history, setLoginError],
  );

  if (currentUser) {
    return <Redirect to="/home" />;
  }
  return <LoginForm handleLogin={handleLogin} />;
};

Login.propTypes = { history: reactRouterPropTypes.history.isRequired };

export default withRouter(Login);
