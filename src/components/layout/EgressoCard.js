import styles from './EgressoCard.module.css';

import foto from '../../img/foto.png';
import LinkButton from './LinkButton';

function EgressoCard() {
    return (
                <div className={styles.container}>
                    <img src={foto} alt="" className={styles.img} />
                    <div className={styles.dados}>
                        <h2>Fulana de Tal Souza</h2>    
                        <p>Formação: Bacharel em Matemática na UFMA</p>
                        <p>Ocupação: Gerente de Projeto na CCLogística</p>
                        <p>Ano de Conclusão:  2022</p>
                        <p>Unidade Acadêmica: Campos Bacanga</p>
                        <LinkButton to='' text='Ver mais'/>
                    </div>
                </div>
                

    )
}

export default EgressoCard;