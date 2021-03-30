import React, { ChangeEvent, DragEvent, useCallback, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'clsx';

import addPhoto from '@images/icons/add_photo.svg';
import styles from './drop.module.scss';
import { StoresContext } from '@/store/types';

function Drop() {
  const [dropZone, setDropZone] = useState(false);
  const { kittyStore } = useContext(StoresContext);

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

  // const handleDrop = useCallback((event: DragEvent) => {
  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files.item(0)!;

    kittyStore.setFileImage(file);
    setDropZone(false);
  }, []);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files!.item(0)!;

    kittyStore.setFileImage(file);
    // setNewKitty(file);
    // setNew
    // lastModified: 1617034578000
    // name: "Screenshot 2021-03-29 at 7.16.15 PM.png"
    // size: 57013
    // type: "image/png"
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
