import React from 'react';

import example1 from '@images/examples/example1.jpg';
import example2 from '@images/examples/example2.jpg';
import example3 from '@images/examples/example3.jpg';
import top from '@images/examples/top.svg';
import bottom from '@images/examples/bottom.svg';
import styles from './examples.module.scss';

function Examples({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={className}>
      <img className={styles.borders} src={top} alt="" />
      <div className={styles.innerContent}>
        <p className={styles.text}>Or try one of these</p>
        <div className={styles.cats}>
          <button type="button">
            <img className={styles.cat} src={example1} alt="cat #1" />
          </button>
          <button type="button">
            <img className={styles.cat} src={example2} alt="cat #2" />
          </button>
          <button type="button">
            <img className={styles.cat} src={example3} alt="cat #3" />
          </button>
        </div>
      </div>
      <img className={styles.borders} src={bottom} alt="" />
    </section>
    // TODO: издать звук при выборе кошака
  );
}

export default Examples;
