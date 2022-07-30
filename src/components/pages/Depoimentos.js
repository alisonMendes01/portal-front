import DepoimentoEgresso from "../layout/DepoimentoEgresso";
import styles from './Depoimento.module.css';

function Depoimentos() {
    const nome = "Fulano de tal";
    const titulo = "Titulo Teste";
    const texto = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const data = "2022";
    return (
        <div className={styles.home_depoimento}>
            <h1>Depoimentos</h1>
            <DepoimentoEgresso nome={nome} titulo={titulo} texto={texto} data={data}/>
        </div>
    );
}

export default Depoimentos;