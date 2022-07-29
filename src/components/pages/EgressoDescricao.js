import EgressoContato from "../layout/EgressoContato";
import styles from './EgressoDescricao.module.css';

function EgressoDescricao() {
    return (
        
        <section className={styles.home_descricao} >
                <h1>Egressos Descrição</h1>
                <EgressoContato />
        </section>
            
    );
}

export default EgressoDescricao;