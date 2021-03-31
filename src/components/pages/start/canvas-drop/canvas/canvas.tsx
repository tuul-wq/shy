import React, { CanvasHTMLAttributes, useEffect, useRef } from 'react';

import Drawer from '../render/drawer';
import styles from './canvas.module.scss';

function Canvas({ width, height }: CanvasHTMLAttributes<HTMLCanvasElement>) {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    scaleCanvas(canvasRef.current);

    const drawer = new Drawer(canvasRef.current);
    drawer.start();
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} width={width} height={height}></canvas>;
}

function scaleCanvas(canvas: HTMLCanvasElement) {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.getContext('2d')!.scale(dpr, dpr);
}

export default Canvas;
