import React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';
import Main from './Components/Main';

export default (props) => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="./Components/program" component={Program} />
    </Switch>
  </HashRouter>
);
