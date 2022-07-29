import styles from './Home.module.css';

import EgressoLeft from '../layout/EgressoLeft';
import EgressoRight from '../layout/EgressoRight';

function Home() {
    const texto = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <>
            <section className={styles.home_banner}>
                <h1>Bem-vindo ao <span>Portal de Egresso</span></h1>
                <p>Texto qualquer blablabla</p>
            </section>

            <section className={styles.home_egressos}>
                <h2>Egressos</h2>

                <EgressoLeft texto={texto}/>
                <EgressoRight texto={texto}/>

            </section>
        </>
    );
}

export default Home;