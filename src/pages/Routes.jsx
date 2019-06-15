import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homepage from './homepage';
import buttons from './buttons';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/buttons" component={buttons} />
        <Route path="/" component={homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
