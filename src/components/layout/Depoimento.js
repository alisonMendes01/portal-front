import styles from './Depoimento.module.css';

function Depoimento({nome, texto, data}) {
    return (
        <div className={styles.container}>

            <h2>{nome}</h2>
            <p>{texto}</p>
            <h3>Data: {data}</h3>
        </div>
    )
}

export default Depoimento;