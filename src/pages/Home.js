import styles from './pages_styles/Home.module.css'
import logo from '../images/Logo-atletica.png';

function Home() {
    return (
      <section>
        <h1>Bem vindo à Atlética Panterão</h1>
        <p>Faça esportes!</p>
        <img src={logo} alt="Pantera"></img>
      </section>
    );
  }
  
  export default Home;
  