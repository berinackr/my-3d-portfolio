export default function DragHint() {
  return (
    <div style={style}>
      <div style={{ fontSize: 22, marginBottom: 8 }}>
        ← drag →
      </div>
      <div style={{ opacity: 0.8 }}>
        Rotate the island<br />
        and explore the story
      </div>
    </div>
  )
}

const style = {
  position: 'absolute',
  bottom: 60,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 25,
  padding: '14px 20px',
  borderRadius: 16,
  background: 'rgba(0,0,0,0.55)',
  backdropFilter: 'blur(8px)',
  color: '#fff',
  textAlign: 'center',
  pointerEvents: 'none',
  animation: 'pulse 2s infinite'
}


