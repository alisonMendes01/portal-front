import styles from './DepoimentoEgresso.module.css';
import LinkImg from './LinkImg';
import foto from '../../img/foto.png';


function DepoimentoEgresso(link) {
    return (
        <div className={styles.container}>
            
            <div className={styles.dados}>
                <img src={foto} alt="" className={styles.img} />
                <h2>{nome}</h2>
            </div>

            <h1>What is Lorem Ipsum?</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3>Data: XX/XX/XXXX</h3>
        </div>
    )
}

export default DepoimentoEgresso;