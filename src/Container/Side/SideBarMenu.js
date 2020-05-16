import React, { useEffect, useState } from 'react';
import {
  Header, Image, Menu, Segment, Sidebar,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';

const SideBarMenu = ({ visibility }) => {
  const [visible, setVisible] = useState(visibility);

  const handleSidebarHide = () => setVisible(false);

  useEffect(() => {
    setVisible(visibility);
  });

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="left"
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">
            Home
          </Menu.Item>
          <Menu.Item as="a">
            Games
          </Menu.Item>
          <Menu.Item as="a">
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          inverted
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a" header>
            File Permissions
          </Menu.Item>
          <Menu.Item as="a">Share on Social</Menu.Item>
          <Menu.Item as="a">Share by E-mail</Menu.Item>
          <Menu.Item as="a">Edit Permissions</Menu.Item>
          <Menu.Item as="a">Delete Permanently</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic loading>
            <div style={{ height: '92.4vh' }}>
              <Header as="h3">Application Contents</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </div>

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};

SideBarMenu.propTypes = {
  visibility: PropTypes.bool.isRequired,
};

export default SideBarMenu;
