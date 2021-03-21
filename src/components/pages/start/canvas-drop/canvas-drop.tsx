import React, { ChangeEvent, HTMLAttributes } from 'react';
import cn from 'clsx';

import addPhoto from '@images/icons/add_photo.svg';
import styles from './canvas-drop.module.scss';

function CanvasDrop({ className }: HTMLAttributes<HTMLDivElement>) {
  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const x = event.target.files;
    console.log('🚀 ~ file: canvas-drop.tsx ~ line 10 ~ handleFile ~ x', x);
  };

  return (
    <section className={styles.dropContainer}>
      <canvas className={cn(styles.canvas, className)}></canvas>
      <div className={styles.helperArea}>
        <input
          id="file"
          className={styles.fileInput}
          type="file"
          accept="image/*"
          onChange={handleFile}
        />
        <label className={styles.fileLabel} htmlFor="file">
          <img className={styles.image} src={addPhoto} alt="" width="70" height="65" />
          <p className={styles.text}>Drop image</p>
          {/* <p className={styles.text}>Drop or paste</p> */}
        </label>
      </div>
    </section>
  );
}

export default CanvasDrop;
