import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home3D from './Home3D'
import Experience from './Experience'
import Projects from './Projects'
import Certificates from './Certificates'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home3D />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />

      </Routes>
    </BrowserRouter>
  )
}
