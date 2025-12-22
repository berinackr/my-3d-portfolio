import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CERTIFICATES } from './components/certificates'
import { CertificateCard } from './components/CertificateCard'
import { CertificateModal } from './components/CertificateModal'

function parseDate(date) {
  return new Date(date.length === 4 ? `${date}-01-01` : date)
}

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null)

  const sortedCertificates = [...CERTIFICATES].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  )

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #121212, #070707)',
        color: '#fff',
        padding: '96px 40px'
      }}
    >
      {/* BACK */}
      <Link
        to="/"
        style={{
          color: '#999',
          textDecoration: 'none',
          fontSize: 14
        }}
      >
        ← Back to 3D world
      </Link>

      <h1
        style={{
          fontSize: 48,
          margin: '40px 0 60px'
        }}
      >
        Certifications
      </h1>

      {/* TIMELINE */}
      <div
        style={{
          position: 'relative',
          maxWidth: 800,
          margin: '0 auto'
        }}
      >
        {/* Vertical Line */}
        <div
          style={{
            position: 'absolute',
            left: 14,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'rgba(255,255,255,0.15)'
          }}
        />

        {/* ROWS */}
        {sortedCertificates.map(cert => (
          <div
            key={cert.id}
            style={{
              display: 'flex',
              gap: 24,
              marginBottom: 40,
              position: 'relative'
            }}
          >
            {/* DOT */}
            <div
              style={{
                width: 30,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #297ad1ff, #66b5ffff)',
                  marginTop: 8
                }}
              />
            </div>

            {/* CARD */}
            <div style={{ flex: 1 }}>
              <CertificateCard
                cert={cert}
                onClick={() => setActiveCert(cert)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeCert && (
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </div>
  )
}
