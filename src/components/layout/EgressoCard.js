import styles from './EgressoCard.module.css';

import foto from '../../img/foto.png';
import LinkButton from './LinkButton';

function EgressoCard({nome, email, profEgresso, resumo, cpf}) {
    return (
                <div className={styles.container}>
                    <img src={foto} alt="" className={styles.img} />
                    <div className={styles.dados}>
                        <h2>{nome}</h2>  
                        <p>CPF: {cpf}</p>  
                        <p>Email: {email}</p>
                        <p>Ocupação: {profEgresso}</p>
                        <p>Resumo:  {resumo}</p>
                        <LinkButton to='/egressodescricao' text='Ver mais'/>
                    </div>
                </div>

    )
}

export default EgressoCard;