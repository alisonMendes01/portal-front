import styles from './EgressoContato.module.css';

import foto from '../../img/foto.png';
import Contato from './Contato';

function EgressoContato({nome, formacao, ocupacao,anoConclusao, UnidadeAcademica}) {
    return (
        <div className={styles.container}>
            <img src={foto} alt="" className={styles.img} />
            <div className={styles.dados}>
            <h2>{nome}</h2>    
                <p>Formação: {formacao}</p>
                <p>Ocupação: {ocupacao}</p>
                <p>Ano de Conclusão:  {anoConclusao}</p>
                <p>Unidade Acadêmica: {UnidadeAcademica}</p>
                <Contato linkInsta="https://www.instagram.com/" linkFacebook="https://www.instagram.com/"
                linkLinkedin="https://www.instagram.com/" linkGithub="ttps://www.instagram.com/" />
            </div>
        </div>
    )
}

export default EgressoContato;