import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Barra de Navegação e Rodapé
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas Importadas
import Home from './pages/Home';
import Contato from './pages/Contato';
import Eventos from './pages/Eventos';

// Auxilio nas divs
import Container from './components/Container'

function App() {
  return (

// Definir Rotas para páginas do site:

    <Router>

      <Navbar/>

      <Container customClasss="min_height">
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
