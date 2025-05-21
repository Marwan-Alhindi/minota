// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './scenes/App.jsx'
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='h-screen w-screen'>
      <Canvas camera={{ position: [0, 3, 6] }}>
        <App />
      </Canvas>
    </div>
  </StrictMode>
)