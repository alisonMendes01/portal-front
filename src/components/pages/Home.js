import styles from './Home.module.css';

import EgressoLeft from '../layout/EgressoLeft';

function Home() {
    const texto = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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