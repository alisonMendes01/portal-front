import styles from './EgressoRight.module.css';

import foto from '../../img/foto.png';

function EgressoRight({texto}) {
    return (
        <p className={styles.paragrafo_left_right}>
            <img src={foto} alt="" className={styles.img_right} />
           <p>{texto}</p>
        </p>
    )
}

export default EgressoRight;