import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';

export default function WireframeTerrain() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    mesh.position.z = (state.clock.getElapsedTime() * 1.4) % 2;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshBasicMaterial color="#8DC4FF" wireframe transparent opacity={0.08} />
    </mesh>
  );
}
