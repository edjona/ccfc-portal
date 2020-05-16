import React from 'react';
import { shallow } from 'enzyme';
import withRouterMotion from './RouterMotion';

// eslint-disable-next-line max-lines-per-function
describe('Router Motion', () => {
  let mockedComponent;
  let WithRouterMotionComponent;
  let wrapper;

  beforeEach(() => {
    mockedComponent = jest.fn();
    WithRouterMotionComponent = withRouterMotion(mockedComponent);
    wrapper = shallow(<WithRouterMotionComponent />);
    jest.clearAllMocks();
  });

  // eslint-disable-next-line max-lines-per-function
  describe('render', () => {
    it('should render high order component of withRouterMotion', () => {
      expect(wrapper).toHaveLength(1);
    });

    it('should have a motion component', () => {
      expect(wrapper.find('ForwardRef(MotionComponent)')).toHaveLength(1);
    });

    it('should render the given component', () => {
      expect(wrapper.find(mockedComponent)).toHaveLength(1);
    });
  });

  // eslint-disable-next-line max-lines-per-function
  describe('props', () => {
    const initialOpacity = 0;
    const initialX = 100;
    const animateOpacity = 1;
    const animateX = 0;
    const exitOpacity = 0;
    const exitX = -100;
    const transitionDuration = 0.5;

    it(`should have initial state of opacity ${initialOpacity} and x position is ${initialX}`, () => {
      expect(wrapper.props().variants.initial.opacity).toEqual(initialOpacity);
      expect(wrapper.props().variants.initial.x).toEqual(initialX);
    });

    it(`should have animate state of opacity ${animateOpacity} and x position is ${animateX}`, () => {
      expect(wrapper.props().variants.animate.opacity).toEqual(animateOpacity);
      expect(wrapper.props().variants.animate.x).toEqual(animateX);
    });

    it(`should have exit state of opacity ${exitOpacity} and x position is ${exitX}`, () => {
      expect(wrapper.props().variants.exit.opacity).toEqual(exitOpacity);
      expect(wrapper.props().variants.exit.x).toEqual(exitX);
    });

    it(`should have transition duration of ${transitionDuration} second`, () => {
      expect(wrapper.props().variants.transition.duration).toEqual(transitionDuration);
    });
  });
});
