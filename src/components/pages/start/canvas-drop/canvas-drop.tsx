import React from 'react';
import cn from 'clsx';

import addPhoto from '@images/icons/add_photo.svg';
import styles from './canvas-drop.module.scss';

function CanvasDrop({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={styles.dropContainer}>
      {/* <input type="file" name="" id=""/> */}
      <canvas className={cn(styles.canvas, className)}></canvas>
      <div className={styles.helperArea}>
        <button className={styles.btn} type="button">
          <img className={styles.image} src={addPhoto} alt="" />
          <p className={styles.text}>Drop or paste</p>
        </button>
      </div>
    </section>
  );
}

export default CanvasDrop;
