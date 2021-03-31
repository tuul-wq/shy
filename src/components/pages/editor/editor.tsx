import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import ImageEditor from './image-editor/image-editor';
import ImageInfo from './image-info/image-info';
import { StoresContext } from '@/store/types';
import styles from './editor.module.scss';

function Editor() {
  const { kittyStore } = useContext(StoresContext);
  const history = useHistory();

  if (!kittyStore.fileImage) {
    history.push('/');

    return null;
  }

  return (
    <>
      <main>
        <ImageEditor />
      </main>
      <aside>
        <ImageInfo />
      </aside>
    </>
  );
}

export default Editor;
