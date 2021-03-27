import React, { ChangeEvent, HTMLAttributes, useEffect, useRef, useState } from 'react';

import addPhoto from '@images/icons/add_photo.svg';
import Canvas from './canvas';
import styles from './canvas-drop.module.scss';

function CanvasDrop({ className }: HTMLAttributes<HTMLDivElement>) {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setSize({
      width: sectionRef.current.clientWidth,
      height: sectionRef.current.clientHeight,
    });
  }, []);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const x = event.target.files;
    console.log('🚀 ~ file: canvas-drop.tsx ~ line 10 ~ handleFile ~ x', x);
  };

  return (
    <section ref={sectionRef} className={styles.dropContainer}>
      {(size.width || size.height) && (
        <Canvas className={className} width={size.width} height={size.height} />
      )}
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
