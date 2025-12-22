import { Link } from 'react-router-dom'

const timeline = [
  {
    company: 'One Eye Systems',
    role: 'Software Engineering Intern',
    type: 'Internship',
    date: 'Jul 2025 - Sep 2025',
    points: [
      ' I contributed to two different projects using Python, Django, Selenium, and Label Studio for data collection, AI powered processing, and secure web-based solutions'
    ]
  },
  {
    company: 'Eskisehir Osmangazi University CISAR',
    role: 'Part Time Software Engineer Assistant',
    type: 'Academic Projects',
    date: 'Nov 2024 - Jun 2025',
    points: [
      'In the Optimization of Electric Vehicle Autonomy (OPEVA) project, I worked on tasks assigned to me such as vehicle monitoring and energy consumption.',
      'Worked with React, ML algorithms, Python, MongoDB, MariaDB'
    ]
  },
    {
    company: 'Baykar Technologies',
    role: 'Object Oriented Software Intern',
    type: 'Internship',
    date: 'Jul 2024 - Sep 2024',
    points: [
      'Worked in Object Oriented Programming (Human Machine Interactive Software Technologies)',
      ' I focused on improving logging mechanisms in a WPF project by analyzing and optimizing string and binary logging methods. I also contributed to a mapping project using Leaflet, Docker, and the ELK stack, and developed an Error Service System to display real-time error notifications within the system'
    ]
  }
]

export default function Experience() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'radial-gradient(circle at top, #121212, #080808)',
        color: '#fff',
        padding: '96px 24px',
        boxSizing: 'border-box'
      }}
    >
      {/* Back */}
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginBottom: 56,
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
          fontWeight: 700,
          letterSpacing: '-0.5px',
          marginBottom: 72
        }}
      >
        Experience
      </h1>

      {/* Timeline Wrapper */}
      <div
        style={{
          position: 'relative',
          maxWidth: 880,
          margin: '0 auto',
          paddingLeft: 56
        }}
      >
        {/* Timeline Line */}
        <div
          style={{
            position: 'absolute',
            left: 24,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, #555, #222)'
          }}
        />

        {timeline.map((item, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              marginBottom: 80
            }}
          >
            {/* Dot */}
            <div
              style={{
                position: 'absolute',
                left: 17,
                top: 20,
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fff, #888)',
                boxShadow: '0 0 12px rgba(255,255,255,0.6)'
              }}
            />

            {/* Card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(14px)',
                borderRadius: 22,
                padding: '32px 36px',
                boxShadow: '0 24px 50px rgba(0,0,0,0.45)',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 12,
                  marginBottom: 14
                }}
              >
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    margin: 0
                  }}
                >
                  {item.company}
                </h3>

                <span
                  style={{
                    fontSize: 12,
                    padding: '6px 14px',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)',
                    color: '#ccc'
                  }}
                >
                  {item.date}
                </span>
              </div>

              <p
                style={{
                  color: '#bbb',
                  marginBottom: 18
                }}
              >
                {item.role} · {item.type}
              </p>

              <ul
                style={{
                  paddingLeft: 18,
                  color: '#ddd',
                  lineHeight: 1.7
                }}
              >
                {item.points.map((p, idx) => (
                  <li key={idx} style={{ marginBottom: 10 }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
