import React from 'react';
import ID from '../../Constant/ID';

const { LOGIN_MESSAGE } = ID;

const loginMessageConfiguration = {
  MESSAGE_TEXT: 'Don\'t have account? ',
  REGISTER_LINK: <span id={LOGIN_MESSAGE.REGISTER_LINK_ID}>Register</span>,
};

export default loginMessageConfiguration;
