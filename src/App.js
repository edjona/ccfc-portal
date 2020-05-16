import React from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import 'semantic-ui-css/semantic.min.css';
import InitialPage from './Page/InitialPage/InitialPage';
import HomePage from './Page/HomePage/HomePage';
import ErrorPage from './Page/ErrorPage/ErrorPage';
import { AuthProvider } from './Configuration/Auth';
import PrivateRoute from './Configuration/PrivateRoute';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <AuthProvider>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/(|login|register)" component={InitialPage} />
            <PrivateRoute exact path="/home" component={HomePage} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
        </AnimatePresence>
      </AuthProvider>
    </div>
  );
};

export default App;
