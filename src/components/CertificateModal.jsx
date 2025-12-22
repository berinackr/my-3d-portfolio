export function CertificateModal({ cert, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '90%',
          maxWidth: 700,
          background: '#0e0e0e',
          borderRadius: 24,
          padding: 32
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>{cert.title}</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 22,
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        <p style={{ color: '#aaa' }}>
          {cert.issuer} • {cert.date}
        </p>

        {cert.image && (
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              width: '100%',
              borderRadius: 16,
              marginTop: 20
            }}
          />
        )}

        <p style={{ marginTop: 20, lineHeight: 1.6 }}>
          {cert.description}
        </p>
      </div>
    </div>
  )
}
