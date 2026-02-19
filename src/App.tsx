import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home-page'
import AboutPage from './pages/about-page'
import ProgramsPage from './pages/programs-page'
import NewsPage from './pages/news-page'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
