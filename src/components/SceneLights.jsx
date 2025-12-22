export default function SceneLights({ mode }) {
  if (mode === 'night') {
    return (
      <>
        {/* Tam karanlık */}
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.02} />

        {/* SOKAK LAMBASI */}
        <spotLight
          position={[0, 12, 24]} // karakterin TAM ÜSTÜ
          angle={0.35}
          penumbra={0.8}
          intensity={30}
          distance={20}
          decay={0.7}
          color="#fff3c4"
          castShadow
        >
          {/* 🔽 BU ÇOK ÖNEMLİ */}
          {/* Işığı DÜZ AŞAĞI BAKTIRIR */}
          <object3D position={[0, -10, 0]} />
        </spotLight>

        {/* Işık konisi hissi */}
        <fog attach="fog" args={['#000000', 6, 16]} />
      </>
    )
  }

  // 🌞 DAY
  return (
    <>
      <color attach="background" args={['#b9e6ff']} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 10, 5]} intensity={1.6} />
    </>
  )
}
