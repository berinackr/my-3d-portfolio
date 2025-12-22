import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { HOTSPOTS } from './hotspots'

export default function Island({
  dragVelocity,
  islandRef,
  onFirstDrag
}) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/island.glb')
  const { actions } = useAnimations(animations, group)

  const isDragging = useRef(false)
  const inertia = useRef(0)
  const hasInteracted = useRef(false)

  /* MATERIAL FIX */
  useEffect(() => {
    scene.traverse(obj => {
      if (obj.isMesh && obj.material) {
        obj.material.metalness = 0
        obj.material.roughness = 0.9
        obj.material.envMapIntensity = 0
        obj.material.needsUpdate = true
      }
    })
  }, [scene])

  /* islandRef expose */
  useEffect(() => {
    islandRef.current = group.current
  }, [islandRef])

  /* play animations */
  useEffect(() => {
    Object.values(actions).forEach(a => a.play())
  }, [actions])

  /* =======================
     POINTER DRAG (STABLE)
     ======================= */
  useEffect(() => {
    const down = () => {
      isDragging.current = true
      inertia.current = 0
      dragVelocity.current = 0
    }

    const move = e => {
      if (!isDragging.current) return

      // ✅ GÜVENLİ DELTA
      const v = e.movementX * 0.003

      dragVelocity.current = v
      inertia.current = v

      if (!hasInteracted.current) {
        hasInteracted.current = true
        onFirstDrag?.()
      }
    }

    const up = () => {
      isDragging.current = false
      dragVelocity.current = 0
    }

    window.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)

    return () => {
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
  }, [dragVelocity, onFirstDrag])

  /* =======================
     ROTATION LOOP (STABLE)
     ======================= */
  useFrame(() => {
    if (!group.current) return

    if (isDragging.current) {
      group.current.rotation.y += dragVelocity.current
    } else if (Math.abs(inertia.current) > 0.0001) {
      group.current.rotation.y += inertia.current
      inertia.current *= 0.85
    } else {
      inertia.current = 0
    }
  })

  return (
    <group ref={group} scale={0.4}>
      <primitive object={scene} />

      {HOTSPOTS.map(h => (
        <mesh key={h.id} position={h.position}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      ))}
    </group>
  )
}
