import EgressoCard from '../layout/EgressoCard'
import styles from './Egressos.module.css'

function Egressos() {
    return (
        <section className={styles.home_egressos} >
            <h1>Egressos</h1>
            <EgressoCard nome="Fulano de tal"
                         formacao="FormacaoTeste"
                         ocupacao= "Ocupação Teste"
                         anoConclusao="2022"
                         UnidadeAcademica="Bacanga" />

        </section>
    );
}

export default Egressos;