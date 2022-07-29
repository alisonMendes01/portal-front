import styles from './DepoimentoEgresso.module.css';
import LinkImg from './LinkImg';
import foto from '../../img/foto.png';


function DepoimentoEgresso(link) {
    return (
        <div className={styles.container}>
            
            <div>
                <a className={styles.dados} href='/egressodescricao'>
                    <img src={foto} alt="" className={styles.img} />
                    <h3>Kennedy</h3>
                </a>
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