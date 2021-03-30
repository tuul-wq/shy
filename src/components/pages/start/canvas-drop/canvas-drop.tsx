import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';

import Drop from './drop/drop';
import Canvas from './canvas/canvas';
import kittyStore from '@/store/kitty-store';

function CanvasDrop({ className }: HTMLAttributes<HTMLDivElement>) {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setSize({
      width: sectionRef.current.clientWidth,
      height: sectionRef.current.clientHeight,
    });
  }, []);

  return (
    <section ref={sectionRef}>
      {(size.width || size.height) && (
        <Canvas className={className} width={size.width} height={size.height} />
      )}
      <Drop store={kittyStore} />
    </section>
  );
}

export default CanvasDrop;
