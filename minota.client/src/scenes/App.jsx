// App.jsx
import { useThree, useFrame, extend } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls, Html } from '@react-three/drei';
import Chat from '../components/Chat';


export default function App() {
  const groupRef = useRef()
  const squareRef = useRef()
  const [value, setValue] = useState("");
  const sphereRef = useRef();


  useFrame((x,delta) => {
    groupRef.current.rotation.y += delta
    squareRef.current.rotation.y += delta
    squareRef.current.rotation.x += delta
  })

  const {camera,gl} = useThree()

  return (
    <>

      <directionalLight position={[0, 10, 0]} intensity={1} />
      <ambientLight intensity={0.5} />
      <OrbitControls args={[camera, gl.domElement]} makeDefault />
      <group ref={groupRef}>
        <mesh ref={sphereRef} position={[2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
        </mesh>

        <mesh ref={squareRef} position={[-2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>



      <mesh position={[0, -1, 0]} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="yellow" />
      </mesh>

      <Chat occluders={[sphereRef]} />
    </>
  );
}