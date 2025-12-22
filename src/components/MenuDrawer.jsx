import { Link } from 'react-router-dom'

export default function MenuDrawer({ open, onClose }) {
  if (!open) return null

  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 40
        }}
      />

      {/* drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: 260,
          background: '#0f0f0f',
          color: '#fff',
          padding: '80px 24px',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}
      >
        {[
          ['Home', '/'],
          ['Experience', '/experience'],
          ['Projects', '/projects'],
          ['Certificates', '/certificates'],
          ['Contact', '/contact']
        ].map(([label, path]) => (
          <Link
            key={path}
            to={path}
            onClick={onClose}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: 18
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  )
}
