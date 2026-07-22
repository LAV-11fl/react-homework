import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PricePage from './pages/PricePage'

function App() {
  return (
    <BrowserRouter>
      <main className="page" id="top">
        <Header isLoggedIn={true} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
