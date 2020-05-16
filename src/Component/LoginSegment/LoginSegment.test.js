import React from 'react';
import { shallow } from 'enzyme';
import LoginSegment from './LoginSegment';

describe('Login Segment', () => {
  const wrapper = shallow(<LoginSegment />);

  describe('render', () => {
    it('should render two input and one button', () => {
      expect(wrapper.find('FormInput')).toHaveLength(2);
      expect(wrapper.find('Button')).toHaveLength(1);
    });
  });
});
