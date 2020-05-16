import ID from '../../Constant/ID';
import GENERAL from '../../Constant/General';
import COMPONENT_COLOR from '../../Constant/Color';

const { POSITION, INPUT_TYPE, SIZE } = GENERAL;
const { REGISTER_SEGMENT } = ID;
const { BUTTON_COLOR } = COMPONENT_COLOR;

const REGISTER_SEGMENT_CONFIGURATION = {
  fullNameInput: {
    id: REGISTER_SEGMENT.FULL_NAME_ID,
    icon: 'user',
    iconPosition: POSITION.LEFT,
    placeholder: 'Full Name',
    type: INPUT_TYPE.TEXT,
  },

  nicknameInput: {
    id: REGISTER_SEGMENT.NICK_NAME_ID,
    icon: 'user outline',
    iconPosition: POSITION.LEFT,
    placeholder: 'Nickname',
    type: INPUT_TYPE.TEXT,
  },

  birthdayInput: {
    id: REGISTER_SEGMENT.FULL_NAME_ID,
    icon: 'birthday',
    iconPosition: POSITION.LEFT,
    type: INPUT_TYPE.DATE,
  },

  genderSelect: {
    id: REGISTER_SEGMENT.GENDER_ID,
    options: [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ],
    placeholder: 'Gender',
  },

  emailInput: {
    id: REGISTER_SEGMENT.EMAIL_ID,
    icon: 'mail',
    iconPosition: POSITION.LEFT,
    type: INPUT_TYPE.EMAIL,
    placeholder: 'Email',
  },

  passwordInput: {
    id: REGISTER_SEGMENT.PASSWORD_ID,
    icon: 'lock',
    iconPosition: POSITION.LEFT,
    type: INPUT_TYPE.PASSWORD,
    placeholder: 'Password',
  },

  confirmPasswordInput: {
    id: REGISTER_SEGMENT.CONFIRM_PASSWORD_ID,
    icon: 'lock',
    iconPosition: POSITION.LEFT,
    type: INPUT_TYPE.PASSWORD,
    placeholder: 'Confirm Password',
  },

  registerButton: {
    id: REGISTER_SEGMENT.REGISTER_BUTTON_ID,
    content: 'Register',
    color: BUTTON_COLOR,
    size: SIZE.LARGE,
    fluid: true,
  },
};

export default REGISTER_SEGMENT_CONFIGURATION;
