import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Staff from './pages/Staff'
import RipadosOficiais from './pages/RipadosOficiais'
import ListaNegra from './pages/ListaNegra'
import HallDaFama from './pages/HallDaFama'
import MaisInfos from './pages/MaisInfos'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/ripados-oficiais" element={<RipadosOficiais />} />
        <Route path="/lista-negra" element={<ListaNegra />} />
        <Route path="/hall-da-fama" element={<HallDaFama />} />
        <Route path="/mais-infos" element={<MaisInfos />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
