import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ResourcesPage } from './pages/ResourcesPage'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ressources" element={<ResourcesPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
