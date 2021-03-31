import React, { useContext } from 'react';

import { StoresContext } from '@/store/types';
import styles from './image-info.module.scss';

function ImageInfo() {
  const { kittyStore } = useContext(StoresContext);

  return (
    <div>
      {Object.entries(kittyStore.fileInfo).map(([key, value], index) => (
        <div key={index}>
          {key} - {value}
        </div>
      ))}
    </div>
  );
}

export default ImageInfo;
