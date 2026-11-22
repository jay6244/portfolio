import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import CoreOrb from './CoreOrb';
import FloatingParticles from './FloatingParticles';
import WireframeTerrain from './WireframeTerrain';

export default function ThreeScene() {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        boxShadow: 'inset 0 0 150px rgba(12,12,12,0.9)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(118,33,176,0.12), transparent 60%)',
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.75]}
      >
        <color attach="background" args={['#0c0c0c']} />
        <fog attach="fog" args={['#0c0c0c', 8, 30]} />
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} intensity={1.4} color="#B600A8" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4c8dff" />
        <directionalLight position={[0, 5, 5]} intensity={1.2} color="#ffffff" />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <CoreOrb />
          <FloatingParticles />
          <WireframeTerrain />
        </Suspense>
      </Canvas>
    </div>
  );
}
