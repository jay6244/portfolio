import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import type { Mesh } from 'three';

export default function CoreOrb() {
  const ref = useRef<Mesh>(null);
  const { viewport, pointer } = useThree();

  const isMobile = viewport.width < 6;
  const scale = isMobile ? 0.6 : 1.15;
  const x = isMobile ? 0 : 3.4;
  const y = isMobile ? -3.6 : 0;

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = state.clock.getElapsedTime();
    mesh.position.y = y + Math.sin(t * 0.5) * 0.2;
    mesh.rotation.y = t * 0.22;
    mesh.rotation.x = pointer.y * 0.15;
    mesh.rotation.z = pointer.x * -0.1;
  });

  return (
    <mesh ref={ref} position={[x, y, 0]} scale={scale}>
      <icosahedronGeometry args={[1.6, 12]} />
      <MeshDistortMaterial
        color="#c3cfda"
        emissive="#7621B0"
        emissiveIntensity={0.35}
        metalness={0.75}
        roughness={0.18}
        distort={0.32}
        speed={1.6}
      />
    </mesh>
  );
}
