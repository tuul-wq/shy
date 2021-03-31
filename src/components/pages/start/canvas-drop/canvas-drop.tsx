import React, { useEffect, useRef, useState } from 'react';

import Drop from './drop/drop';
import Canvas from './canvas/canvas';

function CanvasDrop() {
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
      {(size.width || size.height) && <Canvas width={size.width} height={size.height} />}
      <Drop />
    </section>
  );
}

export default CanvasDrop;
