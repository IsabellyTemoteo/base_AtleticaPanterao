import styles from './pages_styles/Modalidades.module.css';
import garra from '../images/garra 1.png';

function Modalidades() {
    return (

      /*Texto nossas modalidades*/
      <section className={styles.Content}>
        <div className={styles.TextModalidades}>
          <h1>NOSSAS MODALIDADES</h1>
          <hr/>
          <h2>O Panterão conta com 9 modalidades físicas e 6 modalidades online.<br/>
              Os Atletas participam de diversos campeonatos no decorrer do ano letivo, dos quais temos boas memórias e títulos para recordar.</h2>      
        </div>

        <div className={styles.DivisaoTela}>
        {/*Importação da imagem da garra*/}
          <div className={styles.BlocoEsquerda}>
            <div className={styles.ImgGarra}>
              <img src={garra} alt="GarraPantera" className={styles.Garra}/>
            </div>
          </div>

          {/*Lista de modalidades praticadas*/}
          <div className={styles.BlocoDireita}>
            <div className={styles.ListModalidadesEsquerda}>
              <h1>ESPORTES</h1>
              <hr/>              
              <li> FUTSAL</li>
              <li> TÊNIS DE MESA</li>
              <li> SINUCA</li>
              <li> PETECA</li>
              <li> FUTVOLEI</li>
              <li> NATAÇÃO</li>
              <li> ESCALADA</li>
              <li> FUTEBOL</li>
              <li> BASQUETE</li>
              <li> VÔLEI</li>
            </div>

            <div className={styles.ListModalidadesDireita}>
              <h1>E-SPORTS</h1>
              <hr/>
              <li> LEAGUE OF LEGENDS</li>
              <li> COUNTER-STRIKE 2</li>
              <li> VALORANT</li>
              <li> OVERWATCH</li>
              <li> FIFA</li>
              <li> TEAM FIGHT TATICS</li>
            </div>

            {/*Texto informativo sobre os treinos*/}
            <div className={styles.Treino}>
              <h1>TREINOS</h1>
              <hr/>
              <pre className={styles.textTreino}>
                {"Nossos treinos das modalidades físicas de futsal, vôlei e basquete, acontecem no Centro Poliesportivo do CEFET MG - Leopoldina.\n"}
                {"Já nossos treinos das modalidades de E-sports acontecem de forma remota."}
              </pre>
            </div>  
          </div>
        </div>

        {/*Breve texto para acessar o lintree dos treinos*/}
        <div className={styles.AcesseTreino}>
          <h1>TREINOS</h1>
          <hr/>
          <h2>Quer ser um atleta Panterão?</h2>
        </div>

        {/*Definição do botão do linktree*/}   
        <div className={styles.AlinharBotao}>
          <a href='https://linktr.ee/atleticacefetleopoldina?fbclid=PAAaaWLmmqzTtQD8Rd91MLRPsl2xphEkKPZEYuHeYrWGWES4P6NVKB0cZNvus'><button className={styles.Botao}>Saiba Mais</button></a>
          {/* <button className={styles.Botao}>Saiba Mais</button> */}
        </div>

        {/*Alocação das fotos dos jogos*/}
        
      </section>
    );
  }
  
  export default Modalidades;
  