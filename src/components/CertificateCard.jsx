export function CertificateCard({ cert, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 20,
        padding: 20,
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        transition: 'transform 0.25s ease'
      }}
      onMouseEnter={e =>
        (e.currentTarget.style.transform = 'translateY(-6px)')
      }
      onMouseLeave={e =>
        (e.currentTarget.style.transform = 'translateY(0)')
      }
    >
      <h3 style={{ margin: 0 }}>{cert.title}</h3>
      <p style={{ color: '#aaa', fontSize: 14, margin: '6px 0' }}>
        {cert.issuer}
      </p>

      <span style={{ fontSize: 13, color: '#f5c542' }}>
        {cert.date}
      </span>
    </div>
  )
}
