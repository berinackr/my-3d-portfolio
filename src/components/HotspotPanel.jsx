const panelStyle = {
  position: 'absolute',
  top: 90,                 // 👈 header altı
  left: '50%',
  transform: 'translateX(-50%)',
  width: 320,
  background: 'rgba(15,15,15,0.85)',
  backdropFilter: 'blur(10px)',
  padding: 16,
  borderRadius: 16,
  color: '#fff',
  zIndex: 20,
  boxShadow: '0 20px 40px rgba(0,0,0,0.35)'
}


const imageStyle = {
  width: '40%',
  height: 110,
  objectFit: 'cover',
  borderRadius: 10,
  margin: '0 auto 12px auto', // 👈 yatayda center
  display: 'block'
}


const titleStyle = {
  margin: '8px 0',
  fontSize: 18
}

const textStyle = {
  fontSize: 14,
  opacity: 0.85,
  lineHeight: 1.5
}

const linkStyle = {
  display: 'inline-block',
  marginTop: 12,
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 500
}

const closeBtn = {
  position: 'absolute',
  top: 10,
  right: 10,
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: 16,
  cursor: 'pointer'
}

export default function HotspotPanel({ hotspot, onClose }) {
  if (!hotspot) return null

  return (
    <div style={panelStyle}>

      {hotspot.image && (
        <img
          src={hotspot.image}
          alt={hotspot.title}
          style={imageStyle}
        />
      )}

      <h2 style={titleStyle}>{hotspot.title}</h2>
      <p style={textStyle}>{hotspot.text}</p>

      {hotspot.link && (
        <a href={hotspot.link} style={linkStyle}>
          Explore →
        </a>
      )}
    </div>
  )
}

