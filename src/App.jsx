import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarFB from './components/UI/NavbarFB';
import Footer from './components/UI/Footer';
import Home from './components/Home';
import Nosotros from './components/home/Nosotros';
import Programa from './components/Programa';
import Reglamento from './components/Reglamento';
import Ubicacion from './components/ubicacion';


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarFB />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/programa" element={<Programa />} />
            <Route path="/reglamento" element={<Reglamento/>} />
            <Route path="/ubicacion" element={<Ubicacion />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  )
}

export default App
