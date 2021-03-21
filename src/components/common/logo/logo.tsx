import React from 'react';

import logo from '@images/icons/logo.svg';
import styles from './logo.module.scss';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={logo} alt="Shy Kitty logo" />
    </div>
  );
}

export default Logo;
