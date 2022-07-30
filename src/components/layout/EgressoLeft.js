import styles from './EgressoLeft.module.css';

import foto from '../../img/foto.png';

import LinkButton from '../layout/LinkButton';

function EgressoLeft() {
    return (
        <div className={styles.paragrafo_left_right}>
            <div className={styles.container}>
                <img src={foto} alt="" />
                <h2>Fulana de Tal Souza</h2>
                <p>Ciência da Computação</p>
            </div>
            <br />
            <LinkButton to='/egressodescricao' text='Ver mais' />
        </div>
    )
}

export default EgressoLeft;