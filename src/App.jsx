import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Why13 from './pages/Why13'
import Safety from './pages/Safety'
import Quiz from './pages/Quiz'
import Parents from './pages/Parents'
import Basics from './pages/Basics'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <div key={location.pathname} className="page-enter">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/why-13" element={<Why13 />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/basics" element={<Basics />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
