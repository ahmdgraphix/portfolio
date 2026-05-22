'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Stars, MeshDistortMaterial } from '@react-three/drei';

interface GooeyShapeProps {
    position: [number, number, number];
    color: string;
    speed?: number;
    distort?: number;
    radius?: number;
}

const GooeyShape = ({ position, color, radius = 1 }: GooeyShapeProps) => {
    return (
        <mesh position={position}>
            <sphereGeometry args={[radius, 128, 128]} />
            <MeshDistortMaterial
                color={color}
                speed={0}
                distort={0}
                radius={1}
            />
        </mesh>
    );
};

const FloatingShapes = () => {
    return (
        <>
            {/* Large blurry lumps */}
            <GooeyShape position={[-6, 4, -8]} color="#3b82f6" radius={5} />
            <GooeyShape position={[8, -6, -12]} color="#8b5cf6" radius={6} />
            <GooeyShape position={[-5, -4, -10]} color="#06b6d4" radius={4} />

            {/* Smaller accents */}
            <GooeyShape position={[4, 5, -15]} color="#2563eb" radius={2} />
        </>
    );
};

export default function ThreeBackground() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            background: 'radial-gradient(circle at 50% 50%, #0f172a, #000)',
            opacity: 1,
            pointerEvents: 'none',
            filter: 'blur(50px)',
            transform: 'scale(1.2)', // Scale up to hide blur edges
        }}>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.74)', // Black tint
                zIndex: 1
            }} />
            <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} speed={0} />
                <FloatingShapes />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

