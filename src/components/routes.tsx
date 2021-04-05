import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Start from './pages/start/start';
import Editor from './pages/editor/editor';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/editor" component={Editor} />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
