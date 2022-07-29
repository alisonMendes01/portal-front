import EgressoContato from "../layout/EgressoContato";
import styles from './EgressoDescricao.module.css';

function EgressoDescricao() {
    const nome = "Fulano de tal";
    const formacao = "FormacaoTeste";
    const ocupacao = "Ocupação Teste";
    const anoConclusao = "2022";
    const UnidadeAcademica = "Bacanga";
    return (
        <section className={styles.home_descricao} >
                <h1>Egressos Descrição</h1>
                <EgressoContato nome={nome} formacao={formacao} ocupacao={ocupacao} anoConclusao= {anoConclusao}
                UnidadeAcademica={UnidadeAcademica}/>
        </section>
            
    );
}

export default EgressoDescricao;