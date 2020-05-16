import React from 'react';
import { shallow } from 'enzyme';
import LoginMessage from './LoginMessage';
import ENDPOINT from '../../../Constant/Endpoint';

describe('Login Message', () => {
  const wrapper = shallow(<LoginMessage />);
  const messages = wrapper.find('Message');
  const messagesProperties = messages.props();

  describe('render', () => {
    const loginMessageText = 'Don\'t have account? ';
    const expectedText = 'Register';

    it('should have a message component exist', () => {
      expect(messages).toHaveLength(1);
    });

    it(`should have text like ${loginMessageText}`, () => {
      const loginMessage = messagesProperties.children[0];
      expect(loginMessage).toEqual(loginMessageText);
    });

    it('should have a link to jump to register point with text register', () => {
      const teleport = messages.find('Teleport');
      const actualText = teleport.props().component.props.children;
      const actualEndPoint = teleport.props().endpoint;

      expect(actualText).toEqual(expectedText);
      expect(actualEndPoint).toEqual(ENDPOINT.REGISTER);
    });
  });
});
