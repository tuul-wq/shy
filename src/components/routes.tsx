import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Editor from './pages/editor/editor';
import Start from './pages/start/start';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/editor" component={Editor} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
