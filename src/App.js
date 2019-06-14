import React from 'react';
import './styles/index.scss';
import Button from './objects/Button';
import Heading from './objects/Heading';
import myLogo from './assets/scribble_logo.png';
import Logo from './objects/Logo';

function App() {
  return (
    <body className="pattern-library">
      <header>
        <nav className="top-nav">
          <Heading tagNumber={1} headingText={'This is a heading component'} />
        </nav>
        <ul className="side-nav">
          <li className="logo">
            <Logo
              anchor={'http://www.scribbledesign.co.uk'}
              logo={myLogo}
              altText={'Pattern Library 2019'}
            />
          </li>
          <li className="version" />
          <li className="side-nav__item" />
          <li className="side-nav__item" />
          <li className="side-nav__item" />
          <li className="side-nav__item" />
        </ul>

        <Button btnClass={'btn-secondary'} btnText={'MY BUTTON'} />
      </header>
      <main />

      <footer />
    </body>
  );
}

export default App;
