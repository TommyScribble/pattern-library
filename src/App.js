import React from 'react';
import './styles/index.scss';
import Button from './objects/Button';
import Heading from './objects/Heading';

function App() {
  return (
    <body className="pattern-library">
      <header>
        <nav className="top-nav">
          <Heading tagNumber={1} headingText={'This is a heading component'} />
        </nav>
        <ul className="side-nav" />

        <Button btnText={'MY BUTTON'} />
      </header>
      <main />

      <footer />
    </body>
  );
}

export default App;
