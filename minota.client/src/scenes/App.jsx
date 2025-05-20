import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';

export default function App() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        {/* Example: a spinning cube */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <mesh rotation={[45, 45, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  );
}