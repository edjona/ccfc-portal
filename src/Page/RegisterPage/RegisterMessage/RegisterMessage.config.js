import React from 'react';
import ID from '../../../Constant/ID';

const { REGISTER_MESSAGE } = ID;

const REGISTER_MESSAGE_CONFIGURATION = {
  MESSAGE_TEXT: 'Already have account? ',
  LOGIN_LINK: <span id={REGISTER_MESSAGE.REGISTER_LINK_ID}>Login</span>,
};

export default REGISTER_MESSAGE_CONFIGURATION;
