import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homepage from './homepage';
import buttons from './buttons';
import accordion from './accordion';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/buttons" component={buttons} />
        <Route path="/accordion" component={accordion} />
        <Route path="/" component={homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
