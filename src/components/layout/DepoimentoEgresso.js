import styles from './DepoimentoEgresso.module.css';
import foto from '../../img/foto.png';


function DepoimentoEgresso({nome, titulo, texto, data}) {
    return (
        <div className={styles.container}>
            
            <div>
                <a className={styles.dados} href='/egressodescricao'>
                    <img src={foto} alt="" className={styles.img} />
                    <h3>{nome}</h3>
                </a>
            </div>

            <h1>{titulo}</h1>
            <p>{texto}</p>
            <h3>Data: {data}</h3>
        </div>
    )
}

export default DepoimentoEgresso;