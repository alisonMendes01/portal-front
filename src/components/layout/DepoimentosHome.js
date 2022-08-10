import styles from './DepoimentosHome.module.css';

function DepoimentosHome({ id_egresso, titulo, texto, data, nome }) {
    return (
        <div className={styles.container}>
            <a href={`/egressodescricao?id=${id_egresso}`}>
                <h2 className={styles.autor}>Autor: {nome}</h2>
            </a>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.texto}>{texto}</p>
            <h3 className={styles.data}>{data}</h3>
        </div>
    )
}

export default DepoimentosHome;