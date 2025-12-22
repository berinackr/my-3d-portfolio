export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow =
          '0 28px 60px rgba(0,0,0,0.6)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow =
          '0 20px 40px rgba(0,0,0,0.4)'
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',
          height: 180,
          objectFit: 'cover'
        }}
      />

      <div style={{ padding: 20 }}>
        <h3 style={{ margin: 0 }}>{project.title}</h3>

        <p style={{ color: '#aaa', fontSize: 14, margin: '6px 0' }}>
          {project.date}
        </p>

        {/* STARS */}
        <div style={{ color: '#f5c542', fontSize: 14 }}>
          {'★'.repeat(project.stars)}
          {'☆'.repeat(5 - project.stars)}
        </div>
      </div>
    </div>
  )
}
