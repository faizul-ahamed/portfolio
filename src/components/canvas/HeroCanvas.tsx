'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// --------------------------------------------------------
// Custom Holographic Core (Particles)
// --------------------------------------------------------
function HolographicCore() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate a sphere of points
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorTheme = [
      new THREE.Color('#00f2fe'), // Cyan
      new THREE.Color('#4facfe'), // Light Blue
      new THREE.Color('#a18cd1'), // Violet
      new THREE.Color('#fbc2eb'), // Magenta
    ];

    for (let i = 0; i < count; i++) {
      // Golden ratio spiral for even distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const r = 1.5; // Radius
      
      positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      const c = colorTheme[Math.floor(Math.random() * colorTheme.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Gentle breathing (scale) animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      ref.current.scale.set(scale, scale, scale);
      
      // Slow continuous rotation
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// --------------------------------------------------------
// Orbiting Energy Rings & Satellites
// --------------------------------------------------------
function EnergySystem() {
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      ringsRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={ringsRef}>
      {/* Ring 1 */}
      <Torus args={[2.5, 0.01, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00f2fe" wireframe transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </Torus>
      {/* Ring 2 */}
      <Torus args={[3.2, 0.005, 16, 100]} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
        <meshBasicMaterial color="#fbc2eb" wireframe transparent opacity={0.2} blending={THREE.AdditiveBlending} />
      </Torus>
      
      {/* Floating Satellites / Nodes */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[0.08, 16, 16]} position={[2.5, 0, 0]}>
          <meshBasicMaterial color="#00f2fe" toneMapped={false} />
        </Sphere>
      </Float>
      <Float speed={3} rotationIntensity={1} floatIntensity={3}>
        <Sphere args={[0.05, 16, 16]} position={[-2, 1.5, -1]}>
          <meshBasicMaterial color="#a18cd1" toneMapped={false} />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={3} floatIntensity={1}>
        <Sphere args={[0.1, 16, 16]} position={[1, -2, 2]}>
          <meshBasicMaterial color="#fbc2eb" toneMapped={false} />
        </Sphere>
      </Float>
    </group>
  );
}

// --------------------------------------------------------
// Scene Rig for Parallax
// --------------------------------------------------------
function CameraRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (group.current) {
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y * 0.2, state.pointer.x * 0.2, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
}

// --------------------------------------------------------
// Main Canvas Component
// --------------------------------------------------------
export default function HeroCanvas() {
  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none opacity-20"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <Suspense fallback={null}>
          <CameraRig>
            <HolographicCore />
            <EnergySystem />
          </CameraRig>
          
          <EffectComposer multisampling={0}>
            <Bloom 
              luminanceThreshold={0.2} 
              mipmapBlur 
              intensity={2} 
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
