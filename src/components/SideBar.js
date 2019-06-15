import React from 'react';
import myLogo from '../assets/scribble_logo.png';
import Logo from './../objects/Logo';
import Navigation from './Navigation';

const SideBar = props => {
  return (
    <ul className="side-nav">
      <li className="logo">
        <Logo anchor={'/'} logo={myLogo} altText={'Pattern Library 2019'} />
      </li>
      <li className="version">Version 1.0.0</li>
      <Navigation />
    </ul>
  );
};

export default SideBar;
