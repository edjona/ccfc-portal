import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import firebaseAuth from './FireBaseAuth';

export const AuthContext = React.createContext(undefined);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    firebaseAuth.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loginError, setLoginError }}>
      { children }
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = { children: PropTypes.node.isRequired };
