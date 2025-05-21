// App.jsx
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function App() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <mesh position={[2, 0, 0]}>
          <sphereGeometry />
          <meshBasicMaterial color="red" />
        </mesh>

        <mesh position={[-2, 0, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
      </group>

      <mesh position={[0, -1, -3]} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
}