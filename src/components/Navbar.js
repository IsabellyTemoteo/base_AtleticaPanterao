import { Link } from 'react-router-dom';
import React, { useState } from 'react'

import styles from './styles/Navbar.module.css';

import logo from '../images/Escrita.png';
import Container from './Container';

function Navbar() {

    return (
        <nav className={styles.navbar}>
                <Link to="/">
                    <img src={logo} alt="Logo Panterão" className={styles.small_image} />
                </Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"> Atlética</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Esportivo">Esportivo</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Eventos">Eventos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Lojinha">Lojinha</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Parcerias">Parcerias</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contato">Contato</Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;