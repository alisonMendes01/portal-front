
import DepoimentoEgresso from "../layout/DepoimentoEgresso";
import styles from './Depoimento.module.css';

function Depoimentos() {
    return (
        <div className={styles.home_depoimento}>
            <h1>Depoimentos</h1>
            <DepoimentoEgresso />
        </div>
    );
}

export default Depoimentos;