import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Login Logo', () => {
  describe('render', () => {
    const wrapper = shallow(<Logo />);
    const header = wrapper.find('Header');
    const image = header.find('Image');

    it('should have an image inside a header', () => {
      expect(header).toHaveLength(1);
      expect(image).toHaveLength(1);
    });
  });
});
