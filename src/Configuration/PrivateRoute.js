import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...restProps }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...restProps}
      render={(routeProps) => (currentUser ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to="/login" />
      ))}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PrivateRoute;
