import { useFrame, useThree } from '@react-three/fiber'

export default function CameraRig() {
  const { camera } = useThree()

  useFrame(() => {
    camera.position.lerp({ x: 0, y: 5, z: 12 }, 0.05)
    camera.lookAt(0, 1, 0)
  })

  return null
}
