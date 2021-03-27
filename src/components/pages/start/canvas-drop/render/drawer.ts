import Blob, { BlobType, IDrawable } from './blob';
import { randomColor, randomRange } from '@/utils/helpers';

class Drawer {
  private ctx: CanvasRenderingContext2D;
  private canvasWidth: number;
  private canvasHeight: number;
  private canvasObjects: IDrawable[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')!;
    this.canvasWidth = this.ctx.canvas.width / (window.devicePixelRatio || 1);
    this.canvasHeight = this.ctx.canvas.height / (window.devicePixelRatio || 1);

    this.createCanvasObjects();
  }

  private createCanvasObjects() {
    const { canvasWidth, canvasHeight } = this;
    const sides = randomRange(5, 8);
    const color = randomColor();

    const configureObject = (length: number, type: BlobType) => {
      const isMainType = type === 'main';

      return Array.from({ length }).map((_) => {
        const radius = isMainType ? randomRange(80, 150) : randomRange(10, 50);
        const speed = isMainType ? randomRange(0.1, 0.5, true) : randomRange(0.3, 0.8, true);

        return new Blob(this.ctx, { type, canvasWidth, canvasHeight, color, sides, radius, speed });
      });
    };

    const mainBlobs = configureObject(4, 'main');
    const secondaryBlobs = configureObject(randomRange(15, 25), 'secondary');

    this.canvasObjects.push(...mainBlobs, ...secondaryBlobs);
  }

  start() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.canvasObjects.forEach((object) => object.draw());

    requestAnimationFrame(this.start.bind(this));
  }
}

export default Drawer;
