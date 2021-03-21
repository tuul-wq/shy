import React from 'react';

import Logo from '@/components/common/logo/logo';
import Examples from './examples/examples';
import CanvasDrop from './canvas-drop/canvas-drop';
import styles from './start.module.scss';

function Start() {
  return (
    <main className={styles.startContainer}>
      <Logo />
      <CanvasDrop className={styles.canvas} />
      <Examples className={styles.examples} />
    </main>
  );
}

export default Start;
