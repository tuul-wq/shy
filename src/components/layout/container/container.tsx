import React, { PropsWithChildren } from 'react';

import styles from './container.module.scss';

function Container({ children }: PropsWithChildren<any>): JSX.Element {
  return (
    <div className={styles.centerWrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Container;
