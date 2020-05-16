import React from 'react';
import { motion } from 'framer-motion';
import routerMotionConfig from './RouterMotion.config';

const withRouterMotion = (OriginalComponent) => () => (
  <motion.div {...routerMotionConfig}>
    <OriginalComponent />
  </motion.div>
);

export default withRouterMotion;
