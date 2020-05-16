import React, { PureComponent } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import REGISTER_SEGMENT_CONFIGURATION from './RegisterSegmentConfiguration';

export default class RegisterSegment extends PureComponent {
  render() {
    const { Input, Select } = Form;
    const {
      fullNameInput, nicknameInput, birthdayInput, genderSelect, emailInput, passwordInput,
      confirmPasswordInput, registerButton,
    } = REGISTER_SEGMENT_CONFIGURATION;

    return (
      <Segment>
        <Input {...fullNameInput} />
        <Input {...nicknameInput} />
        <Input {...birthdayInput} />
        <Select {...genderSelect} />
        <Input {...emailInput} />
        <Input {...passwordInput} />
        <Input {...confirmPasswordInput} />
        <Button {...registerButton} />
      </Segment>
    );
  }
}
