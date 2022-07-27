import EgressoCard from '../layout/EgressoCard'
import styles from './Egressos.module.css'

function Egressos() {
    return (
        <section className={styles.home_egressos} >
            <h1>Egressos</h1>
            <EgressoCard />
            <EgressoCard />
            <EgressoCard />
            <EgressoCard />
            <EgressoCard />
            <EgressoCard />
        </section>
    );
}

export default Egressos;