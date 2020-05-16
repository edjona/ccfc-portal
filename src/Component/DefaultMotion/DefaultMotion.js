import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const DefaultMotion = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    { children }
  </motion.div>
);

DefaultMotion.propTypes = { children: PropTypes.node.isRequired };

export default DefaultMotion;
