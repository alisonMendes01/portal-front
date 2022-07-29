import styles from './Depoimento.module.css';


function Depoimento({Titulo, Texto, Data}) {
    return (
        <div className={styles.container}>
            <h1>{Titulo}</h1>
            <p>{Texto}</p>
            <h3>Data: {Data}</h3>
        </div>
    )
}

export default Depoimento;