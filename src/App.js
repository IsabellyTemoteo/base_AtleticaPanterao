import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import appStyle from './app.css';

// Barra de Navegação e Rodapé
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas Importadas
import Home from './pages/Home';
import Contato from './pages/Contato';
import Eventos from './pages/Eventos';
import Esportivo from './pages/Esportivo';
import Parcerias from './pages/Parcerias';
import Lojinha from './pages/Lojinha';

// Auxilio nas divs
import Container from './components/Container'

// Definindo rotas para o site

function App() {
  return (
    
      <Router>

        <Navbar/>

        <Container customClass="min_height">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Contato" element={<Contato/>}/>
              <Route path="/Eventos" element={<Eventos/>}/>
              <Route path="/Parcerias" element={<Parcerias/>}/>
              <Route path="/Lojinha" element={<Lojinha/>}/>
              <Route path="/Esportivo" element={<Esportivo/>}/>
          </Routes>
        </Container>

        <Footer/>

      </Router>

// ========================================


  );
}

export default App;
