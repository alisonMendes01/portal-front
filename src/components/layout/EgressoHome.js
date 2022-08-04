import styles from './EgressoHome.module.css';

import LinkButton from './LinkButton';

function EgressoHome({nome, email, foto}) {
    return (
        <div className={styles.paragrafo_left_right}>
            <div className={styles.container}>
                <img src={foto} alt="" />
                <h3>{nome}</h3>
                <p>{email}</p>

                <LinkButton to='/egressodescricao' text='Ver mais' />
            </div>
            
        </div>
    )
}

export default EgressoHome;