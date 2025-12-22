import { Canvas } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'

import Island from './components/Island'
import Character from './components/Character'
import SceneLights from './components/SceneLights'
import HotspotPanel from './components/HotspotPanel'
import DragHint from './components/DragHint'
import MenuButton from './components/MenuButton'
import MenuDrawer from './components/MenuDrawer'



export default function Home3D() {
  const dragVelocity = useRef(0)
  const islandRef = useRef()
  const [menuOpen, setMenuOpen] = useState(false)


  const [activeHotspot, setActiveHotspot] = useState(null)
  const [mode, setMode] = useState('day')
  const [hasStarted, setHasStarted] = useState(false)
  
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <>
      

      <button
        onClick={() => setMode(m => (m === 'day' ? 'night' : 'day'))}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 30,
          padding: '8px 14px',
          background: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer'
        }}
      >
        {mode === 'day' ? '🌙' : '🌞'}
      </button>

      {!hasStarted && <DragHint />}

      <HotspotPanel
        hotspot={activeHotspot}
        onClose={() => setActiveHotspot(null)}
      />

      <MenuButton onClick={() => setMenuOpen(true)} />
      <MenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <Canvas camera={{ position: [0, 6, 18], fov: 45 }}>
        <SceneLights mode={mode} characterPosition={[0, 2, 11.5]} />

        <Island
          dragVelocity={dragVelocity}
          islandRef={islandRef}
          onFirstDrag={() => setHasStarted(true)}
        />
      
        
        <Character
          dragVelocity={dragVelocity}
          islandRef={islandRef}
          setActiveHotspot={setActiveHotspot}
        />
      </Canvas>
    </>
  )
}
