import ID from '../../../Constant/ID';
import GENERAL from '../../../Constant/General';
import COLOR from '../../../Constant/Color';
import ELEMENT from '../../../Constant/Element';

const { POSITION, INPUT_TYPE, SIZE } = GENERAL;

const loginSegmentConfig = {
  emailInput: {
    id: ID.LOGIN.FORM.SEGMENT.EMAIL_INPUT,
    icon: 'mail',
    iconPosition: POSITION.LEFT,
    placeholder: 'E-mail',
    type: INPUT_TYPE.EMAIL,
    name: ELEMENT.LOGIN.EMAIL,
  },

  passwordInput: {
    id: ID.LOGIN.FORM.SEGMENT.PASSWORD_INPUT,
    icon: 'lock',
    iconPosition: POSITION.LEFT,
    placeholder: 'Password',
    type: INPUT_TYPE.PASSWORD,
    name: ELEMENT.LOGIN.PASSWORD,
  },

  loginButton: {
    id: ID.LOGIN.FORM.SEGMENT.LOGIN_BUTTON,
    content: 'Login',
    color: COLOR.COMPONENT.BUTTON,
    size: SIZE.LARGE,
    fluid: true,
  },
};

export default loginSegmentConfig;
