import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import appStyle from './app.css';

// Barra de Navegação e Rodapé
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas Importadas
import Home from './pages/Home';
import Contato from './pages/Contato';
import Eventos from './pages/Eventos';

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
          </Routes>
        </Container>

        <Footer/>

      </Router>

// ========================================


  );
}

export default App;
