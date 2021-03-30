import { makeAutoObservable } from 'mobx';

class KittyStore {
  public fileImage: File | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setFileImage(newFile: File) {
    console.log('🚀 ~ file: ~ newFile', newFile);
    this.fileImage = newFile;
  }

  clearFileImage() {
    this.fileImage = null;
  }

  get fileInfo() {
    return {
      name: this.fileImage?.name,
      type: this.fileImage?.type,
      size: readableFileSize(this.fileImage?.size || 0),
      lastModified: this.fileImage?.lastModified,
    };
  }
}

function readableFileSize(fileSize: number) {
  if (!fileSize) return '0 bytes';

  return fileSize + 'bytes';
}

export type KittyStoreType = KittyStore;
export default KittyStore;
