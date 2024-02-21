import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './styles/Navbar.module.css';
import logo from '../images/Escrita.png';
import Container from './Container';

function Navbar() {
    // States para controlar a abertura dos menus
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAtleticaOpen, setIsAtleticaOpen] = useState(false);
    const [isEsportivoOpen, setIsEsportivoOpen] = useState(false);
    const [isParceriasOpen, setIsParceriasOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsEsportivoOpen(false);
        setIsParceriasOpen(false);
        setIsAtleticaOpen(false);
    };

    const handleAtleticaToggle = () => {
        setIsAtleticaOpen(!isAtleticaOpen);
        setIsEsportivoOpen(false);
        setIsParceriasOpen(false);
    };

    const handleEsportivoToggle = () => {
        setIsEsportivoOpen(!isEsportivoOpen);
        setIsParceriasOpen(false);
        setIsAtleticaOpen(false);
    };

    const handleParceriasToggle = () => {
        setIsParceriasOpen(!isParceriasOpen);
        setIsEsportivoOpen(false);
        setIsAtleticaOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            {/* Link para a página inicial ao clicar na logo do panterão */}
            <Link to="/" className={styles.nav_link} onClick={() => setIsDropdownOpen(false)}>
                <img src={logo} alt="Logo Panterão" className={styles.small_image} />
            </Link>

            {/* Links para a abrir menus da navbar */}
            <ul className={`${styles.list} ${isDropdownOpen ? styles.open : ''}`}>
                <li className={styles.item}>
                    <div className={styles.dropdown_toggle} onMouseEnter={handleAtleticaToggle}>
                       Atlética
                    </div>
                    <ul className={styles.dropdown_menu}>
                        {isAtleticaOpen && (
                            <>
                                <li><Link to="/">Home</Link></li>
                                <li><hr className={styles.dropdown_divider} /></li>
                                <li><Link to="#">Gestão 2023.2</Link></li>
                                <li><hr className={styles.dropdown_divider} /></li>
                                <li><Link to="#">Galeria</Link></li>
                                <li><hr className={styles.dropdown_divider} /></li>
                                <li><Link to="#">Documentos</Link></li>
                            </>
                        )}
                    </ul>
                </li>

                <li className={styles.item}>
                    <div className={styles.dropdown_toggle} onMouseEnter={handleEsportivoToggle}>
                        Esportivo
                    </div>
                    <ul className={styles.dropdown_menu}>
                        {isEsportivoOpen && (
                            <>
                                <li><Link to="#">Modalidades</Link></li>
                                <li><hr className={styles.dropdown_divider} /></li>
                                <li><Link to="#">Competições</Link></li>
                            </>
                        )}
                    </ul>
                </li>

                <li className={styles.item}>
                    <Link to="/Eventos">Eventos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/Lojinha">Lojinha</Link>
                </li>
                <li className={styles.item}>
                    <div className={styles.dropdown_toggle} onMouseEnter={handleParceriasToggle}>
                        Parcerias
                    </div>
                    <ul className={styles.dropdown_menu}>
                        {isParceriasOpen && (
                            <>
                                <li><Link to="#">Seja um parceiro</Link></li>
                                <li><hr className={styles.dropdown_divider} /></li>
                                <li><Link to="#">Nossos parceiros</Link></li>
                            </>
                        )}
                    </ul>
                </li>
                <li className={styles.item}>
                    <Link to="/Contato">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
