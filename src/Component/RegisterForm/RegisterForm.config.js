// eslint-disable-next-line max-lines
import ID from '../../Constant/ID';
import GENERAL from '../../Constant/General';
import COLOR from '../../Constant/Color';

const { POSITION, INPUT_TYPE, SIZE } = GENERAL;
const { REGISTER_FORM } = ID;
const { BUTTON_COLOR } = COLOR;

const registerFormConfiguration = {
  fullNameInput: {
    id: REGISTER_FORM.FULL_NAME_ID,
    icon: 'user',
    iconPosition: POSITION.LEFT,
    placeholder: 'Full Name',
    type: INPUT_TYPE.TEXT,
    name: 'fullName',
  },

  nicknameInput: {
    id: REGISTER_FORM.NICK_NAME_ID,
    icon: 'user outline',
    iconPosition: POSITION.LEFT,
    placeholder: 'Nickname',
    type: INPUT_TYPE.TEXT,
    name: 'nickname',
  },

  birthdayInput: {
    id: REGISTER_FORM.FULL_NAME_ID,
    icon: 'birthday',
    iconPosition: POSITION.LEFT,
    type: INPUT_TYPE.DATE,
    name: 'birthday',
  },

  genderSelect: {
    id: REGISTER_FORM.GENDER_ID,
    options: [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ],
    placeholder: 'Gender',
    name: 'gender',
  },

  emailInput: {
    id: REGISTER_FORM.EMAIL_ID,
    icon: 'mail',
    iconPosition: POSITION.LEFT,
    type: INPUT_TYPE.EMAIL,
    placeholder: 'Email',
    name: 'email',
  },

  passwordInput: {
    id: REGISTER_FORM.PASSWORD_ID,
    icon: 'lock',
    iconPosition: POSITION.LEFT,
    type: INPUT_TYPE.PASSWORD,
    placeholder: 'Password',
    name: 'password',
  },

  confirmPasswordInput: {
    id: REGISTER_FORM.CONFIRM_PASSWORD_ID,
    icon: 'lock',
    iconPosition: POSITION.LEFT,
    type: INPUT_TYPE.PASSWORD,
    placeholder: 'Confirm Password',
    name: 'confirmPassword',
  },

  registerButton: {
    id: REGISTER_FORM.REGISTER_BUTTON_ID,
    content: 'Register',
    color: BUTTON_COLOR,
    size: SIZE.LARGE,
    fluid: true,
  },
};

export default registerFormConfiguration;
