import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Filter from './filter/filter';
import Info from './info/info';
import styles from './editor.module.scss';

function Editor() {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="filter" className={styles.link} activeClassName={styles.active}>
              Filter
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="info" className={styles.link} activeClassName={styles.active}>
              Info
            </NavLink>
          </li>
        </ul>
      </nav>
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
