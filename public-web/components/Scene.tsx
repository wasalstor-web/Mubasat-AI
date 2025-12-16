'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

function AnimatedSphere() {
  const sphereRef = useRef<any>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.2;
      sphereRef.current.rotation.y = t * 0.3;
      sphereRef.current.position.y = Math.sin(t) * 0.1;
    }
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.2} ref={sphereRef}>
      <MeshDistortMaterial
        color="#ededed"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.9}
      />
    </Sphere>
  );
}

export default function Scene() {
  return (
    <div className="h-full w-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}