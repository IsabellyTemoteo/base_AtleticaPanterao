import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

import logo from '../images/Escrita.png';
import Container from './Container';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>

                <Link to="/">
                    <img src={logo} alt="Logo Panterão" className={styles.small_image} />
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contato">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Eventos">Eventos</Link>
                    </li>
                </ul>

            </Container>
        </nav>
    );
}

export default Navbar;