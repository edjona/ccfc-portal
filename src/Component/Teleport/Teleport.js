import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Teleport = ({ component, endpoint }) => (
  <Link to={endpoint}>
    { component }
  </Link>
);

Teleport.propTypes = {
  component: PropTypes.node.isRequired,
  endpoint: PropTypes.string.isRequired,
};

export default Teleport;
