import React from 'react';
import { shallow } from 'enzyme';
import RegisterSegment from './RegisterSegment';
import regiterSegmentConfiguration from './RegisterSegment.config';

const {
  fullNameInput, nicknameInput, birthdayInput, genderSelect, emailInput, passwordInput,
  confirmPasswordInput, registerButton,
} = regiterSegmentConfiguration;

describe('Register Segment', () => {
  const defaultProps = { isPasswordViolation: false };
  const wrapper = shallow(<RegisterSegment {...defaultProps} />);

  describe('render', () => {
    it('should render all input component on it', () => {
      expect(wrapper.find(fullNameInput)).toHaveLength(1);
      expect(wrapper.find(nicknameInput)).toHaveLength(1);
      expect(wrapper.find(birthdayInput)).toHaveLength(1);
      expect(wrapper.find(genderSelect)).toHaveLength(1);
      expect(wrapper.find(emailInput)).toHaveLength(1);
      expect(wrapper.find(passwordInput)).toHaveLength(1);
      expect(wrapper.find(confirmPasswordInput)).toHaveLength(1);
    });

    it('should render register button', () => {
      const button = wrapper.find('Button');

      expect(button).toHaveLength(1);
      expect(button.props()).toMatchObject(registerButton);
    });
  });
});
