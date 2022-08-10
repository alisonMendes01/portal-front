import styles from './EgressoCard.module.css';

import foto from '../../img/foto.png';
import LinkButton from './LinkButton';

function EgressoCard({id_egresso, nome, email, cargo, resumo, cpf}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.segura}>
                    <img src={foto} alt="" className={styles.img} />
                    <div>
                        <h2>{nome}</h2>
                        <p>CPF: {cpf}</p>
                        <p>Email: {email}</p>
                        <p>Ocupação: {cargo}</p>
                        <p>Resumo:  {resumo}</p>
                    </div>
                </div>
            <div className={styles.buttom}>
                <LinkButton to= {`/egressodescricao?id=${id_egresso}`} text='Ver mais' />
            </div>
            </div>

        </>

    )
}

export default EgressoCard;