import React from 'react';
import { Message } from 'semantic-ui-react';
import ID from '../../Constant/ID';
import loginMessageConfiguration from './LoginMessage.config';
import ENDPOINT from '../../Constant/Endpoint';
import Teleport from '../Teleport/Teleport';

const { LOGIN_MESSAGE } = ID;
const { REGISTER_LINK, MESSAGE_TEXT } = loginMessageConfiguration;

const LoginMessage = () => (
  <Message id={LOGIN_MESSAGE.MESSAGE_ID}>
    { MESSAGE_TEXT }
    <Teleport component={REGISTER_LINK} endpoint={ENDPOINT.REGISTER} />
  </Message>
);

export default LoginMessage;
