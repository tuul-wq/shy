import React, { ChangeEvent, DragEvent, useCallback, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import cn from 'clsx';

import addPhoto from '@images/icons/add_photo.svg';
import { ControllersContext } from '@/controllers/types';
import styles from './drop.module.scss';

function Drop() {
  const history = useHistory();
  const [dropZone, setDropZone] = useState(false);
  const { kittyController } = useContext(ControllersContext);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!dropZone) {
      setDropZone(true);
    }
    // console.log("🚀 ~ files", event.dataTransfer)
    // if (event.dataTransfer.types.includes('image/*')) {
    //   setDropZone(true);
    // }
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDropZone(false);
  }, []);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files.item(0)!;

    setDropZone(false);
    kittyController.handleNewFile(file);
    history.push('editor');
  }, []);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files!.item(0)!;

    kittyController.handleNewFile(file);
    history.push('editor');
  };

  return (
    // <div className={cn(styles.dropArea, styles.active)}>
    <div
      className={cn(styles.dropArea, { [styles.active]: dropZone })}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={styles.inputContainer}>
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
        </label>
      </div>
    </div>
  );
}

export default observer(Drop);
