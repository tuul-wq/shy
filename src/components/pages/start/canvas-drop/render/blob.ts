import { randomRange } from '@/utils/helpers';

export interface IDrawable {
  draw(): void;
}

type BlobConfig = {
  type: BlobType;

  color: string;
  radius: number;
  speed: number;
  sides: number;

  canvasWidth: number;
  canvasHeight: number;
};

export type BlobType = 'main' | 'secondary';

class Blob implements IDrawable {
  private posX: number;
  private posY: number;
  private sides: Record<string, number>[] = [];
  private percent: number = 0;
  private animateForward: boolean = true;
  private startAngle: number = randomRange(0, 180);

  constructor(private ctx: CanvasRenderingContext2D, private config: BlobConfig) {
    this.posX = this.isMainType
      ? this.config.canvasWidth / 2
      : randomRange(0, this.config.canvasWidth);

    this.posY = this.isMainType
      ? this.config.canvasHeight / 3.5
      : randomRange(0, this.config.canvasHeight);

    this.ctx.fillStyle = this.config.color;

    this.createSides();
  }

  private createSides() {
    for (let index = 0; index < this.config.sides; index++) {
      const radian = (Math.PI * 2) / this.config.sides;
      const startAngle = radian * (index - 1);
      const endAngle = radian * index;

      const x0 = this.getPointXX(startAngle);
      const y0 = this.getPointYY(startAngle);
      const x1 = this.getPointXX((endAngle + startAngle) / 2);
      const y1 = this.getPointYY((endAngle + startAngle) / 2);
      const x2 = this.getPointXX(endAngle);
      const y2 = this.getPointYY(endAngle);

      const midX = this.linearInterpolation(x0, x2, 0.5);
      const midY = this.linearInterpolation(y0, y2, 0.5);

      const cpX = 2 * x1 - x0 / 2 - x2 / 2;
      const cpY = 2 * y1 - y0 / 2 - y2 / 2;

      this.sides.push({ x0, x2, cpX, midX, y0, y2, cpY, midY });
    }
  }

  draw() {
    this.drawSides();

    this.startAngle += 0.1;
    this.percent += (this.animateForward ? 1 : -1) * this.config.speed;

    if (this.percent >= 100) {
      this.animateForward = false;
    }
    if (this.percent <= 0) {
      this.animateForward = true;
    }

    if (!this.isMainType) this.moveToCenter();
  }

  private drawSides() {
    this.ctx.save();
    this.ctx.translate(this.posX, this.posY);
    this.ctx.rotate((Math.PI / 180) * this.startAngle);

    this.ctx.beginPath();
    this.ctx.moveTo(this.sides[0].x0, this.sides[0].y0);
    this.sides.forEach((side) => {
      const cpX = this.linearInterpolation(side.midX, side.cpX, this.percent / 100);
      const cpY = this.linearInterpolation(side.midY, side.cpY, this.percent / 100);
      this.ctx.quadraticCurveTo(cpX, cpY, side.x2, side.y2);
    });
    this.ctx.fill();
    this.ctx.restore();
  }

  private moveToCenter() {}

  private getPointXX(radianAngel: number) {
    return this.config.radius * Math.cos(radianAngel);
  }

  private getPointYY(radianAngel: number) {
    return this.config.radius * Math.sin(radianAngel);
  }

  private linearInterpolation(coordinate1: number, coordinate2: number, stepPercent: number) {
    return coordinate1 + (coordinate2 - coordinate1) * stepPercent;
  }

  get isMainType() {
    return this.config?.type === 'main';
  }
}

export default Blob;
