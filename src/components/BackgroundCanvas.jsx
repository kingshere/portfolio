import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const InkDropEffect = () => {
  const ref = useRef();
  const particleCount = 5000; // Increased particle count for more density
  
  // Generate particles that form a more pronounced ink drop shape
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 7; // Increased radius for wider spread
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      // Create a more concentrated center with spreading edges
      // Using a more aggressive power function for more dramatic ink drop effect
      const concentration = Math.pow(Math.random(), 2.5) * radius;
      
      positions[i3] = concentration * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = concentration * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = concentration * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = Math.sin(t / 4) * 0.4; // Increased rotation amplitude
    ref.current.rotation.y = Math.sin(t / 2) * 0.3;
    ref.current.rotation.z = Math.sin(t / 3) * 0.2;
    
    // Add subtle pulsing effect to simulate ink diffusion
    ref.current.scale.x = 1 + Math.sin(t) * 0.05;
    ref.current.scale.y = 1 + Math.sin(t + 1) * 0.05;
    ref.current.scale.z = 1 + Math.sin(t + 2) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#111111"
        size={0.02} // Slightly larger particles
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8} // Increased opacity for more visibility
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