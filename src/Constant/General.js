import React from 'react';

const EmptyNode = () => (<div />);

const GENERAL = {
  EMPTY_STRING: '',
  EMPTY_FUNC: () => {},
  EMPTY_NODE: EmptyNode,

  POSITION: {
    LEFT: 'left',
    RIGHT: 'right',
  },

  SIZE: { LARGE: 'large' },

  INPUT_TYPE: {
    TEXT: 'text',
    PASSWORD: 'password',
    NUMBER: 'number',
    DATE: 'date',
    EMAIL: 'email',
  },
};

export default GENERAL;
