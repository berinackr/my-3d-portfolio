export default function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: 20,
        left: 20,
        zIndex: 50,
        width: 44,
        height: 44,
        borderRadius: 12,
        border: 'none',
        background: 'rgba(20,20,20,0.8)',
        color: '#fff',
        fontSize: 22,
        cursor: 'pointer',
        backdropFilter: 'blur(10px)'
      }}
    >
      ☰
    </button>
  )
}
