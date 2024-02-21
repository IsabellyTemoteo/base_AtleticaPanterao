import styles from './pages_styles/Home.module.css'
import logo from '../images/Background.png';

// Consertar o tamaho da section pros lados!

function Home() {
    return (
        <section className={styles.content}>
          <img src={logo} alt="Pantera" className={styles.bg}></img>

          <div className ={styles.tittleDestaques}>
            <h1>Destaques</h1>
          </div>

          <h1>continue</h1>
        
        </section>
    );
  }
  
  export default Home;
  