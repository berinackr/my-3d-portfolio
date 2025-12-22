import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { HOTSPOTS } from './hotspots'

export default function Character({
  dragVelocity,
  setActiveHotspot,
  islandRef
}) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/character.glb')
  const { actions } = useAnimations(animations, group)

  /* drei init fix */
  const [, forceUpdate] = useState(0)
  useEffect(() => {
    if (Object.keys(actions).length) forceUpdate(v => v + 1)
  }, [actions])

  const anims = Object.values(actions || [])
  const IDLE = anims[8]
  const WALK = anims[22]
  const WAVE = anims[23]

  /* opening wave */
  useEffect(() => {
    if (!IDLE || !WAVE) return
    Object.values(actions).forEach(a => a.stop())
    WAVE.reset().play()
    const t = setTimeout(() => {
      WAVE.fadeOut(0.3)
      IDLE.reset().fadeIn(0.3).play()
    }, 2000)
    return () => clearTimeout(t)
  }, [IDLE, WAVE])

  /* =======================
     📍 HOTSPOT – LOCAL SPACE
     ======================= */
  const activeRef = useRef(null)

  const charWorld = new THREE.Vector3()
  const charLocal = new THREE.Vector3()

  const ENTER_DIST = 4.5
  const EXIT_DIST  = 6.0

  useFrame(() => {
    if (!group.current || !islandRef.current) return

    /* 🎥 CHARACTER ANIMATION */
    if (IDLE && WALK) {
      if (Math.abs(dragVelocity.current) > 0.001) {
        if (!WALK.isRunning()) {
          IDLE.fadeOut(0.2)
          WALK.reset().fadeIn(0.2).play()
          WALK.timeScale = 1.5
        }
        group.current.rotation.y =
          dragVelocity.current > 0 ? -Math.PI / 2 : Math.PI / 2
      } else {
        if (!IDLE.isRunning()) {
          WALK.fadeOut(0.2)
          IDLE.reset().fadeIn(0.2).play()
        }
      }
    }

    /* =======================
       HOTSPOT DISTANCE CHECK
       ======================= */

    // 1️⃣ character world pos
    group.current.getWorldPosition(charWorld)

    // 2️⃣ convert to island local space
    charLocal.copy(charWorld)
    islandRef.current.worldToLocal(charLocal)

    let closest = null
    let minDist = Infinity

    for (const h of HOTSPOTS) {
      const dx = charLocal.x - h.position[0]
      const dz = charLocal.z - h.position[2]
      const dist = Math.sqrt(dx * dx + dz * dz)

      if (dist < minDist) {
        minDist = dist
        closest = h
      }
    }

    // ENTER
    if (
      closest &&
      minDist < ENTER_DIST &&
      activeRef.current !== closest.id
    ) {
      activeRef.current = closest.id
      setActiveHotspot(closest)
    }

    // EXIT
    if (
      activeRef.current &&
      minDist > EXIT_DIST
    ) {
      activeRef.current = null
      setActiveHotspot(null)
    }
  })

  return (
    <group ref={group} scale={0.9} position={[0, 2, 11.5]}>
      <primitive object={scene} />
    </group>
  )
}
