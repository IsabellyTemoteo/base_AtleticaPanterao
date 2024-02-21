import {FaInstagram, FaWhatsapp, FaTwitch, FaYoutube} from "react-icons/fa6";
import styles from './styles/Footer.module.css';
import Divider from './Divider';
import logo from '../images/Logo-atletica.png';

function Footer() {
    return (
        <footer className={styles.footer}>

            {/* Rodapé */}
            
            <p className={styles.copy_right}>
                <span>Copyright</span>
                &copy; 2023
                <span>Atlética Panterão - Todos os direitos reservados</span>
            </p>

            <div>
                <div className={styles.text}>
                    <br/>
                    <p className={styles.paragrafo}>A.A.A.E.E. CEFET Leopoldina - CNPJ:0932039203-23 - R. José Péres, 558</p>
                    <p>
                        Centro - Prédio 3 - CEP: 36700-000 - Leopoldina - MG</p>
                </div>

                <div className={styles.textRight}>
                    <p>Formas de pagamento aceitas: Pix, Cartão de crédito, Cheers e Picpay.</p>
                </div>
            </div>

            <Divider/>
            <br/>

            <img src={logo} alt="Logo Panterão" className={styles.logo}/>

            {/* Links para as redes sociais da atlética */}

            <ul className={styles.social_list}>

                <li>
                    <br/>
                    <text>Siga-nos</text>
                </li>

                <li>
                    <br/>
                    <a href="https://api.whatsapp.com/send?phone=5532998510529&text=">
                        <FaWhatsapp/>
                    </a>
                </li>
                <li>
                    <br/>
                    <a href="https://www.instagram.com/atleticaleopoldina/">
                        <FaInstagram/>
                    </a>
                </li>

                <li>
                    <br/>
                    <a href="https://www.twitch.tv/atleticapanterao">
                        <FaTwitch/>
                    </a>
                </li>
                <li>
                    <br/>
                    <a href="https://www.youtube.com/@AtleticaPanterao">
                        <FaYoutube/>
                    </a>
                </li>
            </ul>

        </footer>
    )
}

export default Footer;
