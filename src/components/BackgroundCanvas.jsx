import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const InkDropEffect = () => {
  const ref = useRef();
  const particleCount = 3000;
  
  // Generate particles that form an ink drop shape
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      // Create a more concentrated center with spreading edges
      const concentration = Math.pow(Math.random(), 3) * radius;
      
      positions[i3] = concentration * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = concentration * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = concentration * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = Math.sin(t / 4) * 0.3;
    ref.current.rotation.y = Math.sin(t / 2) * 0.2;
    ref.current.rotation.z = Math.sin(t / 3) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#111111"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
};

const BackgroundCanvas = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <InkDropEffect />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;