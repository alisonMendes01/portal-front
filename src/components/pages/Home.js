import styles from './Home.module.css';
import foto from '../../img/foto.png';

import EgressoHome from '../layout/EgressoHome';
import DepoimentosHome from '../layout/DepoimentosHome';
import VerTodos from '../layout/VerTodos';

function Home() {

    const curso = "Ciência da Computação";

    const nome = "Fulano de Tal";
    const titulo = "Depoimento";
    const texto = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis placerat ullamcorper. Nam rutrum semper nisl, eu commodo lectus consectetur vel."
    const data = "01/01/2020";

    const nome2 = "Beltrano de Sousa";
    const titulo2 = "Depoimento 2";
    const texto2 = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis placerat ullamcorper. Nam rutrum semper nisl, eu commodo lectus consectetur vel."
    const data2 = "01/01/2020";

    const nome3 = "Ciclano Silva";
    const titulo3 = "Depoimento 3";
    const texto3 = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis placerat ullamcorper. Nam rutrum semper nisl, eu commodo lectus consectetur vel."
    const data3 = "01/01/2020";

    const nome4 = "Silva Silva";
    const titulo4 = "Depoimento 4";
    const texto4 = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis placerat ullamcorper. Nam rutrum semper nisl, eu commodo lectus consectetur vel."
    const data4 = "01/01/2020";

    return (
        <>
            <section className={styles.home_banner}>
                <h1>Bem-vindo ao <span>Portal de Egresso</span></h1>
            </section>

            <section className={styles.home_egressos}>
                <h2 className={styles.topico}>Egressos</h2>
                <div className={styles.home_egressos_cards}>
                    <EgressoHome foto={foto} nome={nome} curso={curso} />
                    <EgressoHome foto={foto} nome={nome2} curso={curso} />
                    <EgressoHome foto={foto} nome={nome3} curso={curso} />
                    <EgressoHome foto={foto} nome={nome4} curso={curso} />
                    <VerTodos to='/egressos' text='Ver Todos' />
                </div>
            </section>

            <section className={styles.home_depoimentos}>
                <h2 className={styles.topico}>Depoimentos</h2>
                <div className={styles.home_depoimentos_cards}>
                    <DepoimentosHome titulo={titulo} texto={texto} data={data} nome={nome} />
                    <DepoimentosHome titulo={titulo2} texto={texto2} data={data2} nome={nome2} />
                    <DepoimentosHome titulo={titulo3} texto={texto3} data={data3} nome={nome3} />
                    <DepoimentosHome titulo={titulo4} texto={texto4} data={data4} nome={nome4} />
                    <DepoimentosHome titulo={titulo2} texto={texto2} data={data2} nome={nome2} />
                    <DepoimentosHome titulo={titulo} texto={texto} data={data} nome={nome} />
                </div>

                <a className={styles.home_depoimentos_todos} href='/depoimentos'>Ver Todos</a>

            </section>
        </>
    );
}

export default Home;