import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginMessage from '../LoginPage/LoginMessage/LoginMessage';
import Register from '../../Container/Register/Register';
import ENDPOINT from '../../Constant/Endpoint';
import Logo from '../../Component/Logo/Logo';
import RegisterMessage from '../RegisterPage/RegisterMessage/RegisterMessage';
import SingleBox from '../../Component/SingleBox/SingleBox';
import withRouterMotion from '../../Motion/withRouterMotion/RouterMotion';
import LoginPage from '../LoginPage/LoginPage';

const login = (
  <Route path={ENDPOINT.DEFAULT}>
    <LoginPage />
    <LoginMessage />
  </Route>
);

const register = (
  <Route exact path={ENDPOINT.REGISTER}>
    <Register />
    <RegisterMessage />
  </Route>
);

const InitialPage = () => (
  <SingleBox>
    <Logo />
    <Switch>
      { login }
      { register }
    </Switch>
  </SingleBox>
);

export default withRouterMotion(InitialPage);
