import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Object3D, type InstancedMesh } from 'three';

const COUNT = 150;

const PARTICLES = Array.from({ length: COUNT }, () => ({
  x: (Math.random() - 0.5) * 32,
  y: (Math.random() - 0.5) * 32,
  z: Math.random() * -28 - 5,
  scale: Math.random() * 0.22 + 0.06,
  speed: Math.random() * 0.6 + 0.2,
  offset: Math.random() * Math.PI * 2,
}));

const dummy = new Object3D();

export default function FloatingParticles() {
  const ref = useRef<InstancedMesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = state.clock.getElapsedTime();

    for (let i = 0; i < COUNT; i++) {
      const p = PARTICLES[i];
      dummy.position.set(
        p.x + Math.sin(t * p.speed + p.offset) * 1.2 - pointer.x * 1.5,
        p.y + Math.cos(t * p.speed * 0.8 + p.offset) * 1.2 - pointer.y * 1.5,
        p.z,
      );
      dummy.rotation.set(t * p.speed * 0.3, t * p.speed * 0.2, 0);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, COUNT]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#12141a"
        emissive="#B600A8"
        emissiveIntensity={0.55}
        roughness={0.15}
        metalness={0.85}
      />
    </instancedMesh>
  );
}
