import React, { useState } from 'react';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const HeaderMenuBar = ({ isBurgerButtonActive, turnSideMenuVisibilityFunc }) => {
  const [burgerButtonActive, setBurgerButtonActive] = useState(isBurgerButtonActive);

  const handleBurgerClick = () => {
    turnSideMenuVisibilityFunc();
    setBurgerButtonActive(!burgerButtonActive);
  };

  return (
    <div>
      <Menu attached="top">
        <Menu.Menu position="left">
          <Menu.Item icon="bars" active={burgerButtonActive} onClick={handleBurgerClick} />

          <Menu.Item name="editorials"><b>Portal CCFC</b></Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">

          <Dropdown item text="Jonathan Edward" simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name="dropdown" />
                <span className="text">New</span>

                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                  <Dropdown.Item>Image</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item text="Log out" icon="sign-out" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

HeaderMenuBar.propTypes = {
  isBurgerButtonActive: PropTypes.bool.isRequired,
  turnSideMenuVisibilityFunc: PropTypes.func.isRequired,
};

export default HeaderMenuBar;
