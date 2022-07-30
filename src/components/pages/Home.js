import styles from './Home.module.css';

import EgressoLeft from '../layout/EgressoLeft';

function Home() {
    return (
        <>
            <section className={styles.home_banner}>
                <h1>Bem-vindo ao <span>Portal de Egresso</span></h1>
            </section>

            <section  className={styles.home_egressos}>
                <h2 className={styles.topico}>Egressos</h2>
                <div className={styles.home_egressos_cards}>
                    <EgressoLeft />
                    <EgressoLeft />
                    <EgressoLeft />
                </div>
            </section>

            <section className={styles.home_depoimentos}>
                <h2 className={styles.topico}>Depoimentos</h2>
            </section>
        </>
    );
}

export default Home;