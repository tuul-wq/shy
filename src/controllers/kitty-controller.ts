import { KittyStoreType } from '@/store/kitty-store';

class KittyController {
  constructor(private kittyStore: KittyStoreType, private worker: Worker) {
    console.log('🚀 ~ file: worker', worker);
  }

  // TODO: work with file transformation here
  handleNewFile(newFile: File) {
    this.kittyStore.setFileImage(newFile);

    console.log('start web worker');
  }
}

export default KittyController;
