import styles from './Home.module.css';

import EgressoLeft from '../layout/EgressoLeft';
import EgressoRight from '../layout/EgressoRight';

function Home() {
    return (
        <>
            <section className={styles.home_banner}>
                <h1>Bem-vindo ao <span>Portal de Egresso</span></h1>
                <p>Texto qualquer blablabla</p>
            </section>

            <section className={styles.home_egressos}>
                <h2>Egressos</h2>

                <EgressoLeft />
                <EgressoRight />

            </section>
        </>
    );
}

export default Home;