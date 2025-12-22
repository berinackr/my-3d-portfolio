import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
function SortButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: 'none',
        padding: '10px 16px',
        borderRadius: 10,
        cursor: 'pointer',
        fontSize: 14,
        color: active ? '#000' : '#fff',
        background: active
          ? 'linear-gradient(135deg, #297ad1ff, #66b5ffff)'
          : 'transparent',
        transition: 'all 0.2s ease'
      }}
    >
      {children}
    </button>
  )
}

const projects = [
  {
    id: 1,
    title: 'BeeMelody – Bee Health Analysis AI',
    image: '/images/beeMelody.png',
    date: 2025,
    stars: 5,
    description:
      'An integrated AI system combining image and audio deep learning models to monitor honeybee colony health. It detects hive diseases from images and analyzes beehive sounds to determine queen bee presence and acceptance.',
    video: null,
    github: 'https://github.com/berinackr/BeeMelody_SIC_AI_2025',
    playStore: null
  },
  {
    id: 2,
    title: 'EV Fleet Management System',
    image: '/images/ev.png',
    date: 2024,
    stars: 5,
    description:
      'Electric vehicle fleet management system focused on speed and range prediction.',
    video: 'https://www.youtube.com/embed/7o9Sk970qfY?si=SzAN7DwDp8YtvULk',
    github: 'https://github.com/berinackr/EV_Fleet_Management_System',
    playStore: null
  },
  {
    id: 3,
    title: 'Sensorless Smart Irrigation Assistant',
    image: '/images/irrigation.png',
    date: 2025,
    stars: 3,
    description:
      'A sensorless smart irrigation system that generates 7-day watering schedules using plant data, soil type, and weather forecasts. Developed during Samsung Innovation Campus and awarded 1st place at the final hackathon.',
    video: 'https://www.youtube.com/embed/OCGlecQtKtQ',
    github: 'https://github.com/berinackr/Sensorless_Smart_Irrigation_Assistant',
    playStore: null
  },

  {
    id: 4,
    title: 'Animals Match-3 Puzzle Game',
    image: '/images/match3.png',
    date: 2025,
    stars: 2,
    description:
      'A casual Match-3 puzzle game developed with Unity featuring classic tile-matching mechanics, scoring system, board shuffling, and a countdown-based gameplay experience.',
    video: 'https://www.youtube.com/embed/RHT29ZF-4nE',
    github: 'https://github.com/berinackr/Animal_Match_Game',
    playStore: null
  },

  {
    id: 5,
    title: '3D Maze Escape – Unreal Engine Game',
    image: '/images/maze-escape.png',
    date: 2023,
    stars: 4,
    description:
      'A 3D adventure maze game built with Unreal Engine 5 featuring themed environments, interactive clues, mini-map navigation, and immersive storytelling supported by dynamic lighting and sound.',
    video: 'https://www.youtube.com/embed/kuPvIW9N2lA',
    github: 'https://github.com/berinackr/3D_Maze_Escape',
    playStore: null
  },

  {
    id: 6,
    title: 'Fortune Cookie App',
    image: '/images/fortune-cookie.png',
    date: 2025,
    stars: 5,
    description:
      'A lightweight Android application built with Kotlin that delivers random fortune messages with bilingual support (Turkish & English), smooth animations, and persistent language settings.',
    video: 'https://www.youtube.com/embed/tizJMp6Gq-c',
    github: 'https://github.com/berinackr/Fortune_Cookie_App',
    playStore: 'https://play.google.com/store/apps/details?id=com.bernackr.fortunecookie'
  },

  {
    id: 7,
    title: 'Astrology Web Application',
    image: '/images/astrology.png',
    date: 2021,
    stars: 2,
    description:
      'A feature-rich astrology web app built with ASP.NET Web Forms, offering horoscope feeds, rising and descending sign calculations, tarot card draws, and zodiac compatibility analysis.',
    video: 'https://www.youtube.com/embed/MKj5RPmgmb4',
    github: 'https://github.com/berinackr/Astrology_Website',
    playStore: null
  },
  {
    id: 8,
    title: 'Meeting Analyzer',
    image: '/images/analiz.png',
    date: 2025,
    stars: 5,
    description:
      'An AI-powered meeting analysis platform that performs speaker diarization, gender estimation, speech–silence ratio analysis, and automatic transcription from audio recordings, providing detailed JSON and PDF reports.',
    video: 'https://www.youtube.com/embed/gqyuyLLWMAY',
    github: 'https://github.com/berinackr/Meeting_Analyzer',
    playStore: null
  },
  {
    id: 9,
    title: '3D Grid Based Mapping',
    image: '/images/pointcloud.png',
    date: 2022,
    stars: 3,
    description: 'Cloud camera system with 3D grid-based spatial mapping.',
    video: null,
    github: 'https://github.com/berinackr/3D_Grid_Based_Mapping',
    playStore: null
  },
  {
    id: 10,
    title: 'Biberon App',
    image: '/images/biberon.png',
    date: 2023,
    stars: 3,
    description: 'A mobile application focused on maternal and infant health, developed with Flutter and Firebase. The app provides real-time data synchronization and secure user authentication, and ranked among the top 7 teams in the Google Game and Application Academy 2023 Bootcamp.',
    video: 'https://www.youtube.com/embed/TdifWmMuHDA',
    github: 'https://github.com/berinackr/Biberon_App',
    playStore: null
  }
]



export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [sortBy, setSortBy] = useState('stars')
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === 'stars') return b.stars - a.stars
    if (sortBy === 'date') return b.date - a.date
    return 0
  })


  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #121212, #070707)',
        color: '#fff',
        padding: '96px 40px'
      }}
    >
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
        Projects
      </h1>

      <div
        style={{
          display: 'inline-flex',
          background: 'rgba(255,255,255,0.08)',
          padding: 6,
          borderRadius: 14,
          gap: 6,
          marginBottom: 40
        }}
      >
        <SortButton
          active={sortBy === 'stars'}
          onClick={() => setSortBy('stars')}
        >
          ⭐ By Stars
        </SortButton>

        <SortButton
          active={sortBy === 'date'}
          onClick={() => setSortBy('date')}
        >
          📅 By Date
        </SortButton>
      </div>



      {/* GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 32
        }}
      >
        {sortedProjects.map(p => (
          <ProjectCard
            key={p.id}
            project={p}
            onClick={() => setActiveProject(p)}
          />
        ))}

      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  )
}
