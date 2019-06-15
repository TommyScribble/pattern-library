import React from 'react';
import ButtonAnchor from '../objects/ButtonAnchor';

const Navigation = props => {
  return (
    <React.Fragment>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'./'}
          anchorClass={'side-nav__link'}
        >
          Homepage
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/buttons'}
          anchorClass={'side-nav__link'}
        >
          Buttons Page
        </ButtonAnchor>
      </li>
    </React.Fragment>
  );
};

export default Navigation;
