import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginMessage from '../LoginPage/LoginMessage/LoginMessage';
import Login from '../LoginPage/Login';
import Register from '../../Container/Register/Register';
import ENDPOINT from '../../Constant/Endpoint';
import Logo from '../../Component/Logo/Logo';
import RegisterMessage from '../../Component/RegisterMessage/RegisterMessage';
import SingleBox from '../../Component/SingleBox/SingleBox';
import withRouterMotion from '../../Motion/withRouterMotion/RouterMotion';

const login = (
  <Route path={ENDPOINT.DEFAULT}>
    <Login />
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
