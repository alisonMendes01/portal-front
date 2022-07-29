import Depoimento from "../layout/Depoimento";
import EgressoContato from "../layout/EgressoContato";
import styles from './EgressoDescricao.module.css';

function EgressoDescricao() {
    const nome = "Fulano de tal";
    const formacao = "FormacaoTeste";
    const ocupacao = "Ocupação Teste";
    const anoConclusao = "2022";
    const UnidadeAcademica = "Bacanga";
    const DepoTitulo = "Depoimento Teste";
    const DepoTexto = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const DepoData = "2022";

    return (
        <section className={styles.home_descricao} >
                <h1>Egressos Descrição</h1>
                <EgressoContato nome={nome} formacao={formacao} ocupacao={ocupacao} anoConclusao= {anoConclusao}
                UnidadeAcademica={UnidadeAcademica}/>
                <Depoimento Titulo={DepoTitulo} Texto={DepoTexto} Data={DepoData} />
                <Depoimento Titulo={DepoTitulo} Texto={DepoTexto} Data={DepoData} />
                <Depoimento Titulo={DepoTitulo} Texto={DepoTexto} Data={DepoData} />
                <Depoimento Titulo={DepoTitulo} Texto={DepoTexto} Data={DepoData} />
        </section>
    );
}

export default EgressoDescricao;