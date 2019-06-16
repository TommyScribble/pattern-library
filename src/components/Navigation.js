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
          Buttons
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/accordion'}
          anchorClass={'side-nav__link'}
        >
          Accordion
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/text'}
          anchorClass={'side-nav__link'}
        >
          Text
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/icons'}
          anchorClass={'side-nav__link'}
        >
          Icons
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/progress-bar'}
          anchorClass={'side-nav__link'}
        >
          Progress Bar
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/spinner'}
          anchorClass={'side-nav__link'}
        >
          Spinner
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/tooltip'}
          anchorClass={'side-nav__link'}
        >
          Tooltip
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/radio'}
          anchorClass={'side-nav__link'}
        >
          Radio
        </ButtonAnchor>
      </li>
      <li className="side-nav__item">
        <ButtonAnchor
          navigation={true}
          path={'/checkbox'}
          anchorClass={'side-nav__link'}
        >
          Checkbox
        </ButtonAnchor>
      </li>
    </React.Fragment>
  );
};

export default Navigation;
