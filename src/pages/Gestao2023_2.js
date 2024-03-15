import logo from '../images/Background.png';
import styles from './pages_styles/Gestao2023_2.module.css';
import Divider from '../components/structures/Divider';
import DivRedonda from '../components/structures/DivRedonda';
import FotoPrincipal from '../components/structures/DivRedondaArthur';

function Gestao2023_2() {
    return (

        // Background Inicial da Página
        <section className={styles.content}>
            <div className={styles.overlay}>
                <h1 className={styles.title}>GESTÃO 2023.2</h1>
                <img src={logo} alt="Pantera" className={styles.bg}/>
            </div>
            <div className={styles.baseInformacoes}>

        {/* Texto sobre a gestão */}

                <pre className={styles.textoInformacoes}>
                    {"A gestão 2023.2 da Associação Atlética Acadêmica CEFET -\n"}
                    {"Leopoldina (A.A.A.E.E CEFET - Leopoldina) tem como missão\n"}
                    {"Empoderar a comunidade estudantil do CEFET-MG através de\n"}
                    {"atividades esportivas e culturais, fomentando a integração,\n"}
                    {"a participação ativa e a excelência em todas as nossas iniciativas."}
                </pre>
                
            </div>

        {/* Imagem Arthur Ribeiro */}

            <div className={styles.boxPrincipal}>

                <FotoPrincipal imageLink="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" h1Text="Arthur Ribeiro de Oliveira" h3Text="Fundador da A.A.A.E.E CEFET -Leopoldina" />

            </div>

        {/* Imagens da Diretoria */}

            <div className={styles.baseDiretoria}>

                { /*
                <div className={styles.linhaDiretoria}>
                    <a href="https://imgbox.com/VOIgCQVs" target="_blank"><img src="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" className={styles.boxDiretoria} alt="Italo Aurélio"/></a>
                    <text className={styles.textoDiretoria}>
                    Humberto Motta da Cunha
                    <br/>
                    Presidente da A.A.A.E.E CEFET -Leopoldina
                    </text>
                </div>

                */ }

                <div className={styles.linhaDiretoria}>
                    <DivRedonda imageLink="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" h1Text="Ítalo Aurélio" h3Text="X° Diretor de Relações"iconLink="https://www.instagram.com/atleticaleopoldina/" />
                </div>

                <div className={styles.linhaDiretoria}>
                   <DivRedonda />
                </div>

                <div className={styles.linhaDiretoria}>
                   <DivRedonda />
                </div>


            </div>

            <div className={styles.baseDiretoria}>


            <div className={styles.linhaDiretoria}>
                   <DivRedonda />
                </div>

                <div className={styles.linhaDiretoria}>
                   <DivRedonda />
                </div>

                <div className={styles.linhaDiretoria}>
                   <DivRedonda />
                </div>

            </div>

            <div className={styles.endPage}></div>

            <Divider />

        </section>
    );
}

export default Gestao2023_2;