import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginMessage from '../../Component/LoginMessage/LoginMessage';
import Login from '../../Container/Login/Login';
import Register from '../../Container/Register/Register';
import ENDPOINT from '../../Constant/Endpoint';
import Logo from '../../Component/Logo/Logo';
import RegisterMessage from '../../Component/RegisterMessage/RegisterMessage';
import SingleBox from '../../Component/SingleBox/SingleBox';
import withRouterMotion from '../../Motion/withRouterMotion/RouterMotion';

const routeToLogin = (
  <Route path={ENDPOINT.DEFAULT}>
    <Login />
    <LoginMessage />
  </Route>
);

const routeToRegister = (
  <Route exact path={ENDPOINT.REGISTER}>
    <Register />
    <RegisterMessage />
  </Route>
);

const InitialPage = () => (
  <SingleBox>
    <Logo />
    <Switch>
      { routeToLogin }
      { routeToRegister}
    </Switch>
  </SingleBox>
);

export default withRouterMotion(InitialPage);
