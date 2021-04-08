import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Filter from './filter/filter';
import Info from './info/info';
import Navigation from './navigation/navigation';

function Editor() {
  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route path="/editor/filter" component={Filter} />
          <Route path="/editor/info" component={Info} />

          <Redirect from="/editor" to="/editor/filter" />
        </Switch>
      </main>
    </>
  );
}

export default Editor;
