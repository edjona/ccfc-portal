import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HeaderMenuBar from '../../Container/Head/HeaderMenuBar';
import firebaseAuth from '../../Configuration/FireBaseAuth';

const HomePage = () => {
  const someHandle = () => {};

  return (
    <>
      <HeaderMenuBar turnSideMenuVisibilityFunc={someHandle} isBurgerButtonActive />
      <Link to="/">
        <Input label="Full Name" placeholder="mysite.com" />
        <Button onClick={() => { firebaseAuth.auth().signOut(); }} content="Sign Out" />
      </Link>
    </>
  );
};

export default HomePage;
