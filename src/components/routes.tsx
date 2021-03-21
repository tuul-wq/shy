import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Editor from './pages/editor/editor';
import Start from './pages/start/start';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/editor">
          <Editor />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
