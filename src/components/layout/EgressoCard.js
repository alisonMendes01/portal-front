import styles from './EgressoCard.module.css';

import foto from '../../img/foto.png';
import LinkButton from './LinkButton';

function EgressoCard({nome, formacao, ocupacao,anoConclusao, UnidadeAcademica}) {
    return (
                <div className={styles.container}>
                    <img src={foto} alt="" className={styles.img} />
                    <div className={styles.dados}>
                        <h2>{nome}</h2>    
                        <p>Formação: {formacao}</p>
                        <p>Ocupação: {ocupacao}</p>
                        <p>Ano de Conclusão:  {anoConclusao}</p>
                        <p>Unidade Acadêmica: {UnidadeAcademica}</p>
                        <LinkButton to='/egressodescricao' text='Ver mais'/>
                    </div>
                </div>

    )
}

export default EgressoCard;