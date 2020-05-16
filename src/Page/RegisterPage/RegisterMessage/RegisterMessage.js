import React from 'react';
import { Message } from 'semantic-ui-react';
import ID from '../../../Constant/ID';
import ENDPOINT from '../../../Constant/Endpoint';
import Teleport from '../../../Component/Teleport/Teleport';
import REGISTER_MESSAGE_CONFIGURATION from './RegisterMessage.config';

const { REGISTER_MESSAGE } = ID;
const { LOGIN_LINK, MESSAGE_TEXT } = REGISTER_MESSAGE_CONFIGURATION;

const RegisterMessage = () => (
  <Message id={REGISTER_MESSAGE.MESSAGE_ID}>
    { MESSAGE_TEXT }
    <Teleport component={LOGIN_LINK} endpoint={ENDPOINT.LOGIN} />
  </Message>
);

export default RegisterMessage;
