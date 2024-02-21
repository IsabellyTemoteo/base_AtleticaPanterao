import { useEffect, useState } from 'react';
import styles from './pages_styles/Home.module.css';
import logo from '../images/Background.png';
import escrita from '../images/Escrita.png';

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = logo;
  }, []);

  return (
    <section className={styles.content}>
      {imageLoaded && (
        <img src={logo} alt="Pantera" className={styles.bg} />
      )}

      <div className={styles.tittleDestaques}>
        <h1>Destaques</h1>
      </div>

      <img src={escrita} alt="Pantera" className={styles.bg} />

    </section>
  );
}

export default Home;