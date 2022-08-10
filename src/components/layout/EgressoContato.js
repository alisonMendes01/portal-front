import styles from './EgressoContato.module.css';

import foto from '../../img/foto.png';
import Contato from './Contato';

function EgressoContato({nome, email, cargo, resumo }) {
    return (
        <div className={styles.container_contato}>
            <div className={styles.segura}>
                <img src={foto} alt="" className={styles.img} />
                <div className={styles.dados}>
                    <h2>{nome}</h2>
                    <p>Email: {email}</p>
                    <p>Ocupação: {cargo}</p>
                    <p>Resumo:  {resumo}</p>
                    <Contato linkInsta="https://www.instagram.com/" linkFacebook="https://www.instagram.com/"
                        linkLinkedin="https://www.instagram.com/" linkGithub="ttps://www.instagram.com/" />
                </div>
            </div>
        </div>
    )
}

export default EgressoContato;