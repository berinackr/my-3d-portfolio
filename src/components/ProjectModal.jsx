export default function ProjectModal({ project, onClose }) {
  return (
    <div
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
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '90%',
          maxWidth: 900,
          background: '#0e0e0e',
          borderRadius: 24,
          padding: 32,
          boxShadow: '0 40px 80px rgba(0,0,0,0.7)'
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>{project.title}</h2>

            {/* DATE + STARS */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 6
              }}
            >
              <span style={{ color: '#aaa', fontSize: 14 }}>
                {project.date}
              </span>

              <span style={{ color: '#f5c542', fontSize: 14 }}>
                {'★'.repeat(project.stars)}
                {'☆'.repeat(5 - project.stars)}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 22,
              cursor: 'pointer',
              lineHeight: 1
            }}
          >
            ✕
          </button>
        </div>

        {/* DESCRIPTION */}
        <p style={{ marginTop: 20, color: '#ddd', lineHeight: 1.6 }}>
          {project.description}
        </p>

        {/* VIDEO */}
        {project.video && (
          <div
            style={{
              marginTop: 28,
              aspectRatio: '16 / 9',
              borderRadius: 16,
              overflow: 'hidden'
            }}
          >
            <iframe
              src={project.video}
              width="100%"
              height="100%"
              allowFullScreen
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        )}

        {/* FOOTER ACTIONS */}
        <div
          style={{
            marginTop: 32,
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap'
          }}
        >
          {/* GITHUB */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={actionStyle}
            >
              <img
                src="/icons/github.svg"
                alt="GitHub"
                style={{ width: 20 }}
              />
              View on GitHub
            </a>
          )}

          {/* PLAY STORE */}
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              style={actionStyle}
            >
              <img
                src="/icons/playstore.svg"
                alt="Play Store"
                style={{ width: 20 }}
              />
              View on Play Store
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const actionStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  padding: '10px 16px',
  borderRadius: 12,
  background: 'rgba(255,255,255,0.08)',
  color: '#fff',
  textDecoration: 'none',
  transition: 'background 0.2s ease'
}
