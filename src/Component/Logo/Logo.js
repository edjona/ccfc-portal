import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import logoConfiguration from './Logo.config';

const { logoHeader, logoImage } = logoConfiguration;

const Logo = () => (
  <Header {...logoHeader}>
    <Image {...logoImage} />
  </Header>
);

export default Logo;
