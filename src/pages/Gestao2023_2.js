import logo from '../images/Background.png';
import styles from './pages_styles/Gestao2023_2.module.css';
import Divider from '../components/Divider';

function Gestao2023_2() {
    return (

        // Background Inicial da Página
        <section className={styles.content}>
            <div className={styles.overlay}>
                <h1 className={styles.title}>Gestão 2023.2</h1>
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
                <a href="https://imgbox.com/VOIgCQVs" target="_blank"><img src="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" className={styles.boxDiretoria} alt="Italo Aurélio"/></a>
                <pre className={styles.textoDiretoria}>
                    {"Arthur Ribeiro de Oliveira\n"}
                    {"Fundador da A.A.A.E.E CEFET -Leopoldina\n\n"}
                    {"A Atlética Panterão agradece em especial ao nosso fundador, Arthur Ribeiro,\n"}
                    {"pelo trabalho prestado e proporcionado"}
                </pre>
            </div>

        {/* Imagens da Diretoria */}

            <div className={styles.baseDiretoria}>
                <div className={styles.linhaDiretoria}>
                    <a href="https://imgbox.com/VOIgCQVs" target="_blank"><img src="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" className={styles.boxDiretoria} alt="Italo Aurélio"/></a>
                    <text className={styles.textoDiretoria}>
                    Humberto Motta da Cunha
                    <br/>
                    Presidente da A.A.A.E.E CEFET -Leopoldina
                    </text>
                </div>
                <div className={styles.linhaDiretoria}>
                    <a href="https://imgbox.com/VOIgCQVs" target="_blank"><img src="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" className={styles.boxDiretoria} alt="Italo Aurélio"/></a>
                    <text className={styles.textoDiretoria}>
                    Humberto Motta da Cunha
                    <br/>
                    Presidente da A.A.A.E.E CEFET -Leopoldina
                    </text>
                </div>
                <div className={styles.linhaDiretoria}>
                    <a href="https://imgbox.com/VOIgCQVs" target="_blank"><img src="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" className={styles.boxDiretoria} alt="Italo Aurélio"/></a>
                    <text className={styles.textoDiretoria}>
                    Humberto Motta da Cunha
                    <br/>
                    Presidente da A.A.A.E.E CEFET -Leopoldina
                    </text>
                </div>
            </div>

            <div className={styles.endPage}></div>

            <Divider />

        </section>
    );
}

export default Gestao2023_2;