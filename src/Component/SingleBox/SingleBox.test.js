import React from 'react';
import { shallow } from 'enzyme';
import SingleBox from './SingleBox';
import GENERAL from '../../Constant/General';

describe('Single Box', () => {
  const { EMPTY_NODE } = GENERAL;

  const wrapper = shallow(<SingleBox><EMPTY_NODE /></SingleBox>);
  const grid = wrapper.find('Grid');
  const gridColumn = wrapper.find('GridColumn');

  describe('render', () => {
    it('should have been rendered', () => {
      expect(wrapper).toHaveLength(1);
    });

    it('should have one grid and one grid column node', () => {
      expect(grid).toHaveLength(1);
      expect(gridColumn).toHaveLength(1);
    });

    describe('Grid', () => {
      const gridProperty = grid.props();

      it(`should have default horizontal align is ${SingleBox.defaultProps.horizontalAlign}`, () => {
        expect(gridProperty.textAlign).toEqual(SingleBox.defaultProps.horizontalAlign);
      });

      it('should have full height display', () => {
        expect(gridProperty.style.height).toEqual('100vh');
      });

      it(`should have vertical align is ${SingleBox.defaultProps.verticalAlign}`, () => {
        expect(gridProperty.verticalAlign).toEqual(SingleBox.defaultProps.verticalAlign);
      });
    });

    describe('Grid Column', () => {
      it(`should have default max width ${SingleBox.defaultProps.width}`, () => {
        const gridColumnProperty = gridColumn.props();

        expect(gridColumnProperty.style.maxWidth).toEqual(SingleBox.defaultProps.width);
      });
    });

    it('should have inputted node as children', () => {
      expect(wrapper.find(EMPTY_NODE)).toHaveLength(1);
    });
  });
});
