import styles from './EgressoLeft.module.css';

import foto from '../../img/foto.png';

function EgressoLeft({texto}) {
    return (
        <p className={styles.paragrafo_left_right}>
            <img src={foto} alt="" className={styles.img_left} />
            <p>{texto}</p>
        </p>
    )
}

export default EgressoLeft;