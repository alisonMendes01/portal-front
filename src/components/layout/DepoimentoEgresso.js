import styles from './DepoimentoEgresso.module.css';
import LinkImg from './LinkImg';
import foto from '../../img/foto.png';


function DepoimentoEgresso({nome, titulo, texto, data}) {
    return (
        <div className={styles.container}>
            
            <div className={styles.dados}>
                <img src={foto} alt="" className={styles.img} />
                <h2>{nome}</h2>
            </div>

            <h1>{titulo}</h1>
            <p>{texto}</p>
            <h3>Data: {data}</h3>
        </div>
    )
}

export default DepoimentoEgresso;