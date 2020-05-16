import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { motion } from 'framer-motion';
import SingleBox from '../../Component/SingleBox/SingleBox';
import RegisterMessage from '../RegisterPage/RegisterMessage/RegisterMessage';


const ErrorPage = () => (
  <SingleBox>
    <motion.div whileHover={{ scale: 1.1 }}>
      <Header as="h1" attached="top">
        HTTP 404
      </Header>

      <Segment attached>
        Sorry Page not Found
      </Segment>
    </motion.div>
    <RegisterMessage />
  </SingleBox>
);

export default ErrorPage;
