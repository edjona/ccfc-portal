import React from 'react';
import { shallow } from 'enzyme';
import RegisterMessage from './RegisterMessage';
import ID from '../../../Constant/ID';
import ENDPOINT from '../../../Constant/Endpoint';
import REGISTER_MESSAGE_CONFIGURATION from './RegisterMessage.config';

// eslint-disable-next-line max-lines-per-function
describe('Login Message', () => {
  const { REGISTER_MESSAGE } = ID;
  const { LOGIN_LINK, MESSAGE_TEXT } = REGISTER_MESSAGE_CONFIGURATION;

  const wrapper = shallow(<RegisterMessage />);
  const messages = wrapper.find('Message');
  const messagesProperties = messages.props();

  // eslint-disable-next-line max-lines-per-function
  describe('render', () => {
    it('should have a message component exist', () => {
      expect(messages).toHaveLength(1);
    });

    it(`should have a message component with id ${REGISTER_MESSAGE.MESSAGE_ID}`, () => {
      expect(messagesProperties.id).toEqual(REGISTER_MESSAGE.MESSAGE_ID);
    });

    it(`should have text like ${MESSAGE_TEXT}`, () => {
      const loginMessage = messagesProperties.children[0];
      expect(loginMessage).toEqual(MESSAGE_TEXT);
    });

    it('should have a link to jump to register point with text register', () => {
      const teleport = messages.find('Teleport');
      const expectedText = teleport.props().component.props.children;
      const expectedEndpoint = teleport.props().endpoint;

      expect(expectedText).toEqual(LOGIN_LINK.props.children);
      expect(expectedEndpoint).toEqual(ENDPOINT.LOGIN);
    });
  });
});
