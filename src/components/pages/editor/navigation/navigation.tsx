import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'clsx';

import styles from './navigation.module.scss';

function Navigation() {
  return (
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
    // <nav className={styles.navigation}>
    //   <ul className={styles.navList}>
    //     <li className={styles.navItem}>
    //       <NavLink to="filter" className={styles.link} activeClassName={styles.active}>
    //         <span>Filter</span>
    //       </NavLink>
    //       <div className={styles.cornerContainer}>
    //         <div className={cn(styles.cornerShadow, styles.purple)}></div>
    //       </div>
    //     </li>
    //     <li className={styles.navItem}>
    //       <NavLink to="info" className={styles.link} activeClassName={styles.active}>
    //         <span>Info</span>
    //       </NavLink>
    //       <div className={styles.cornerContainer}>
    //         <div className={cn(styles.cornerShadow, styles.green)}></div>
    //       </div>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Navigation;
