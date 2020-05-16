import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

// eslint-disable-next-line max-lines-per-function
describe('Login Logo', () => {
  // eslint-disable-next-line max-lines-per-function
  describe('render', () => {
    const wrapper = shallow(<Logo />);
    const header = wrapper.find('Header');
    const image = header.find('Image');

    it('should have an image inside a header', () => {
      expect(header).toHaveLength(1);
      expect(image).toHaveLength(1);
    });

    describe('Header', () => {
      const headerTextAlign = 'center';

      it('should have text align of center', () => {
        const headerProperty = header.props();
        expect(headerProperty.textAlign).toEqual(headerTextAlign);
      });
    });

    // eslint-disable-next-line max-lines-per-function
    describe('Image', () => {
      const imageProperties = image.props();
      const imageName = 'ccfc-logo.png';
      const imageFontSize = 100;
      const imageSize = 'massive';

      it(`should have an image of ${imageName}`, () => {
        expect(imageProperties.src).toEqual(imageName);
      });

      it(`should have font size of ${imageFontSize}`, () => {
        expect(imageProperties.style['font-size']).toEqual(imageFontSize);
      });

      it('should have a large size', () => {
        expect(imageProperties.size).toEqual(imageSize);
      });
    });
  });
});
