import React, { useCallback, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebaseAuth from '../../Configuration/FireBaseAuth';
import RegisterForm from '../../Component/RegisterForm/RegisterForm';
import { AuthContext } from '../../Configuration/Auth';

const passwordHandling = (password, confirmPassword, setPasswordViolation) => {
  const isPasswordMatch = password.value === confirmPassword.value;
  setPasswordViolation(!isPasswordMatch);
};

const Register = ({ history }) => {
  const { currentUser } = useContext(AuthContext);

  const [passwordViolation, setPasswordViolation] = useState(false);


  const handleRegister = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, confirmPassword } = event.target.elements;

      passwordHandling(password, confirmPassword, setPasswordViolation);

      console.log(email.value, password.value);
      await firebaseAuth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [history],
  );


  if (currentUser) {
    return <Redirect to="/home" />;
  }
  return (<RegisterForm handleRegister={handleRegister} isPasswordViolation={passwordViolation} />);
};

export default Register;
