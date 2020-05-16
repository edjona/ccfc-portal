import React from 'react';
import { mount } from 'enzyme';
import LoginForm from './LoginForm';
import * as AuthContext from '../../Configuration/Auth';

describe('Login Form', () => {
  let wrapper;
  const buildContextWrapper = (value) => {
    jest
      .spyOn(AuthContext, 'useAuthContext')
      .mockReturnValue({ loginError: value });

    const defaultProps = { handleLogin: () => {} };
    wrapper = mount(<LoginForm {...defaultProps} />);
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('render', () => {
    it('should render login segment ', () => {
      buildContextWrapper('');
      const loginForm = wrapper.find('LoginSegment');

      expect(loginForm).toHaveLength(1);
    });

    it('should render message of user not found', () => {
      buildContextWrapper('auth/user-not-found');
      const message = wrapper.find('Message');

      expect(message).toHaveLength(1);
      expect(message.props().header).toEqual('User Not Found');
    });

    it('should render message of wrong password', () => {
      buildContextWrapper('auth/wrong-password');
      const message = wrapper.find('Message');

      expect(message).toHaveLength(1);
      expect(message.props().header).toEqual('Wrong Password');
    });
  });
});
