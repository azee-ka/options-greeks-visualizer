'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Text } from '@react-three/drei';
import * as THREE from 'three';
import { OptionParams, generate3DSurface } from '@/lib/blackScholes';
import { Box, Sparkles } from 'lucide-react';

interface Surface3DProps {
  params: Omit<OptionParams, 'K' | 'T'>;
}

function OptionSurface({ params }: Surface3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const surfaceData = useMemo(() => {
    const strikeMin = params.S * 0.7;
    const strikeMax = params.S * 1.3;
    const timeMin = 0.01;
    const timeMax = 1;

    return generate3DSurface(
      params,
      { min: strikeMin, max: strikeMax, steps: 40 },
      { min: timeMin, max: timeMax, steps: 40 }
    );
  }, [params]);

  const { geometry, maxPrice } = useMemo(() => {
    const width = 41;
    const height = 41;
    
    const geometry = new THREE.PlaneGeometry(20, 20, width - 1, height - 1);
    const positions = geometry.attributes.position;
    
    let maxPrice = 0;
    
    for (let i = 0; i < surfaceData.length; i++) {
      const point = surfaceData[i];
      const z = point.price * 0.5;
      maxPrice = Math.max(maxPrice, point.price);
      
      if (positions.array[i * 3 + 2] !== undefined) {
        positions.array[i * 3 + 2] = z;
      }
    }
    
    geometry.computeVertexNormals();
    
    return { geometry, maxPrice };
  }, [surfaceData]);

  useMemo(() => {
    const positions = geometry.attributes.position;
    const colors = new Float32Array(positions.count * 3);
    
    for (let i = 0; i < positions.count; i++) {
      const z = positions.array[i * 3 + 2];
      const normalizedZ = z / (maxPrice * 0.5);
      
      // Cyan to Purple to Fuchsia gradient
      const t = Math.min(Math.max(normalizedZ, 0), 1);
      const r = 0.13 + t * 0.7;
      const g = 0.71 - t * 0.3;
      const b = 0.85 + t * 0.15;
      
      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }
    
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return colors;
  }, [geometry, maxPrice]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        vertexColors
        wireframe={false}
        side={THREE.DoubleSide}
        metalness={0.4}
        roughness={0.3}
        emissive={new THREE.Color(0x0a0e14)}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

export default function Surface3D({ params }: Surface3DProps) {
  return (
    <div className="neo-card p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Box className="text-violet-400" size={24} />
            3D Volatility Surface
          </h2>
          <p className="text-sm text-zinc-500 mt-1">Interactive price visualization</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20">
          <div className="w-3 h-3 rounded bg-gradient-to-r from-cyan-400 to-violet-400" />
          <span className="text-xs text-zinc-400">Price Surface</span>
        </div>
      </div>
      
      <div className="h-[500px] rounded-xl overflow-hidden border border-zinc-800/50 bg-black/40 relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 pointer-events-none" />
        
        <Canvas
          camera={{ position: [25, 25, 25], fov: 50 }}
          style={{ background: '#000000' }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#06b6d4" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#8b5cf6" />
          <pointLight position={[0, 10, 0]} intensity={0.4} color="#22d3ee" />
          
          <Grid
            args={[20, 20]}
            cellColor="#1f1f23"
            sectionColor="#2f2f35"
            fadeDistance={50}
            fadeStrength={1}
            position={[0, 0, -5]}
          />
          
          <OptionSurface params={params} />
          
          <Text
            position={[-12, 0, -5]}
            rotation={[0, 0, 0]}
            fontSize={0.8}
            color="#22d3ee"
            anchorX="center"
            anchorY="middle"
          >
            Strike Price
          </Text>
          <Text
            position={[0, -12, -5]}
            rotation={[0, 0, 0]}
            fontSize={0.8}
            color="#22d3ee"
            anchorX="center"
            anchorY="middle"
          >
            Time to Expiry
          </Text>
          <Text
            position={[0, 0, 10]}
            rotation={[0, 0, 0]}
            fontSize={0.8}
            color="#10b981"
            anchorX="center"
            anchorY="middle"
          >
            Option Price
          </Text>
          
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={15}
            maxDistance={50}
            autoRotate={false}
          />
        </Canvas>
      </div>
      
      <div className="flex items-center justify-between text-xs text-zinc-500 px-4">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan-400" />
          <span>Drag to rotate • Scroll to zoom • Right-click to pan</span>
        </div>
        <div className="flex gap-6">
          <span>Strike: ${(params.S * 0.7).toFixed(0)} - ${(params.S * 1.3).toFixed(0)}</span>
          <span>Time: 0 - 1 year</span>
        </div>
      </div>
    </div>
  );
}