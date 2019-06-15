import React from 'react';
import Button from '../objects/Button';
import Heading from '../objects/Heading';
import ButtonAnchor from '../objects/ButtonAnchor';
import SideBar from './SideBar';

const Header = props => {
  return (
    <header>
      <nav className="top-nav">
        <Heading tagNumber={1} headingText={'This is a heading component'} />
      </nav>
      <SideBar />
      <Button btnClass={'btn-secondary'} btnText={'MY BUTTON'} />
      <ButtonAnchor path={'/'} anchorClass={'button-anchor'} internal={true}>
        Click for a googlgy experience
      </ButtonAnchor>
    </header>
  );
};

export default Header;
