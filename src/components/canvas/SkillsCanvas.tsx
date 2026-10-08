'use client';

import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Points, PointMaterial, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { skillsData, SkillData } from '../sections/SkillsSection';
import gsap from 'gsap';

// --------------------------------------------------------
// Camera Controller (GSAP fly-to logic)
// --------------------------------------------------------
function CameraController({ selectedNode }: { selectedNode: string | null }) {
  const { camera, controls } = useThree();
  
  useEffect(() => {
    if (!controls) return;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const targetObj = (controls as any).target as THREE.Vector3;

    if (selectedNode === 'core') {
      // Zoom into core
      gsap.to(camera.position, { x: 0, y: 0, z: 2.5, duration: 1.5, ease: 'power3.inOut' });
      gsap.to(targetObj, { x: 0, y: 0, z: 0, duration: 1.5, ease: 'power3.inOut' });
    } else if (selectedNode) {
      // Find the specific node in the scene by name (set in the capsule component)
      const scene = camera.parent;
      const node = scene?.getObjectByName(`skill-${selectedNode}`);
      
      if (node) {
        const targetPosition = new THREE.Vector3();
        node.getWorldPosition(targetPosition);
        
        // Offset camera slightly for viewing
        const camPos = targetPosition.clone().add(new THREE.Vector3(2, 1, 2));
        
        gsap.to(camera.position, { x: camPos.x, y: camPos.y, z: camPos.z, duration: 1.5, ease: 'power3.inOut' });
        gsap.to(targetObj, { x: targetPosition.x, y: targetPosition.y, z: targetPosition.z, duration: 1.5, ease: 'power3.inOut' });
      }
    } else {
      // Reset view
      gsap.to(camera.position, { x: 0, y: 3, z: 12, duration: 1.5, ease: 'power3.inOut' });
      gsap.to(targetObj, { x: 0, y: 0, z: 0, duration: 1.5, ease: 'power3.inOut' });
    }
  }, [selectedNode, camera, controls]);

  return null;
}

// --------------------------------------------------------
// AI Core
// --------------------------------------------------------
function AICore({ onSelect }: { onSelect: () => void }) {
  const coreRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      const scale = hovered ? 1.05 + Math.sin(state.clock.elapsedTime * 2) * 0.05 : 1 + Math.sin(state.clock.elapsedTime) * 0.02;
      coreRef.current.scale.setScalar(scale);
    }
  });

  // Inner plasma points
  const [positions, colors] = useMemo(() => {
    const count = 1000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorTheme = [new THREE.Color('#00f2fe'), new THREE.Color('#a18cd1')];
    
    for (let i = 0; i < count; i++) {
      // Deterministic pseudo-random generation based on index
      const seed1 = Math.sin(i * 12.9898) * 43758.5453;
      const rand1 = seed1 - Math.floor(seed1);
      const seed2 = Math.cos(i * 78.233) * 43758.5453;
      const rand2 = seed2 - Math.floor(seed2);
      const seed3 = Math.sin(i * 93.382) * 43758.5453;
      const rand3 = seed3 - Math.floor(seed3);

      const r = 1.2 * Math.cbrt(rand1);
      const theta = rand2 * 2 * Math.PI;
      const phi = Math.acos(2 * rand3 - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      const c = colorTheme[i % colorTheme.length];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  return (
    <group 
      ref={coreRef} 
      onClick={(e) => { e.stopPropagation(); onSelect(); }}
      onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
    >
      <Points positions={positions} colors={colors}>
        <PointMaterial transparent vertexColors size={0.05} depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>
      {/* Outer Shell */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshPhysicalMaterial 
          color="#00f2fe" 
          transmission={0.9} 
          opacity={1} 
          metalness={0.5} 
          roughness={0.1} 
          ior={1.5} 
          thickness={0.5} 
          emissive="#00f2fe" 
          emissiveIntensity={hovered ? 0.5 : 0.2}
          transparent
        />
      </mesh>
      {/* Wireframe shell */}
      <mesh scale={1.35}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#a18cd1" wireframe transparent opacity={hovered ? 0.4 : 0.1} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

// --------------------------------------------------------
// Tech Module (Capsule)
// --------------------------------------------------------
function TechModule({ skill, onSelect, isSelected }: { skill: SkillData, onSelect: () => void, isSelected: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Orbital rotation
      const time = state.clock.elapsedTime * skill.speed + skill.angleOffset;
      const x = Math.cos(time) * skill.radius;
      const z = Math.sin(time) * skill.radius;
      
      // Add slight vertical bobbing
      const y = Math.sin(time * 2) * 0.5;
      
      // Smoothly move to position if not selected (if selected, we might want it to stop, but for now we let it orbit)
      groupRef.current.position.set(x, y, z);
    }
    if (meshRef.current) {
      // Local rotation
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Pulse scale on hover or selected
      const targetScale = hovered || isSelected ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group ref={groupRef} name={`skill-${skill.id}`}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
          onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
        >
          <capsuleGeometry args={[0.3, 0.6, 16, 32]} />
          <meshPhysicalMaterial 
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={hovered || isSelected ? 2 : 0.5}
            metalness={0.8}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.9}
          />
          {/* Label */}
          {(hovered || isSelected) && (
            <Text
              position={[0, 1.2, 0]}
              fontSize={0.2}
              color="white"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="black"
            >
              {skill.name}
            </Text>
          )}
        </mesh>
      </Float>
      
      {/* Orbital Ring Trail indicator */}
      <mesh rotation={[-Math.PI/2, 0, 0]}>
        <ringGeometry args={[skill.radius - 0.02, skill.radius + 0.02, 64]} />
        <meshBasicMaterial color={skill.color} transparent opacity={0.1} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

// --------------------------------------------------------
// Scene Wrapper (Parallax)
// --------------------------------------------------------
function SceneWrapper({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.pointer.x * 0.1;
      group.current.rotation.x = -state.pointer.y * 0.1;
    }
  });
  return <group ref={group}>{children}</group>;
}

// --------------------------------------------------------
// Main Canvas Component
// --------------------------------------------------------
export default function SkillsCanvas({ selectedNode, onSelectNode }: { selectedNode: string | null, onSelectNode: (id: string) => void }) {
  return (
    <Canvas camera={{ position: [0, 3, 12], fov: 60 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        
        {/* Environment & Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#00f2fe" distance={10} />
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

        <SceneWrapper>
          <AICore onSelect={() => onSelectNode('core')} />
          
          {skillsData.map((skill) => (
            <TechModule 
              key={skill.id} 
              skill={skill} 
              onSelect={() => onSelectNode(skill.id)} 
              isSelected={selectedNode === skill.id} 
            />
          ))}
        </SceneWrapper>

        <CameraController selectedNode={selectedNode} />
        
        {/* Controls */}
        <OrbitControls 
          makeDefault 
          enablePan={false} 
          enableZoom={true} 
          minDistance={2} 
          maxDistance={20}
          dampingFactor={0.05}
        />

        {/* Post Processing */}
        <EffectComposer multisampling={0}>
          <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} />
        </EffectComposer>

      </Suspense>
    </Canvas>
  );
}
