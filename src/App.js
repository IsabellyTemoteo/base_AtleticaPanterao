import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import appStyle from './app.css';

// Barra de Navegação e Rodapé
import Navbar from './components/base/Navbar';
import Footer from './components/base/Footer';

// Páginas Importadas
import Home from './pages/Home';
import Contato from './pages/Contato';
import Eventos from './pages/Eventos';
import Lojinha from './pages/Lojinha';
import Gestao2023_2 from './pages/Gestao2023_2';
import Documentos from './pages/Documentos';
import CampusAberto from './pages/CampusAberto';
import Competicoes from './pages/Competicoes';
import Galeria from './pages/Galeria';
import Modalidades from './pages/Modalidades';
import NossosParceiros from './pages/NossosParceiros';
import SejaUmParceiro from './pages/SejaUmParceiro';

// Auxilio nas divs
import Container from './components/base/Container'

// Definindo rotas para o site

function App() {
  return (
    
      <Router>

        <Navbar/>

        <Container customClass="min_height">
          <Routes>
              <Route path="/" element={<Home/>}/>

              <Route path="/Gestao2023_2" element={<Gestao2023_2/>}/>
              <Route path="/Documentos" element={<Documentos/>}/>
              <Route path="/Galeria" element={<Galeria/>}/>

              <Route path="/Competicoes" element={<Competicoes/>}/>
              <Route path="/Modalidades" element={<Modalidades/>}/>

              <Route path="/Eventos" element={<Eventos/>}/>

              <Route path="/Lojinha" element={<Lojinha/>}/>

              <Route path="/SejaUmParceiro" element={<SejaUmParceiro/>}/>
              <Route path="/NossosParceiros" element={<NossosParceiros/>}/>

              <Route path="/CampusAberto" element={<CampusAberto/>}/>

              <Route path="/Contato" element={<Contato/>}/>

          </Routes>
        </Container>

        <Footer/>

      </Router>

// ========================================


  );
}

export default App;
