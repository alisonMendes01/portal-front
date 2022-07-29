import styles from './EgressoContato.module.css';

import foto from '../../img/foto.png';
import Contato from './Contato';

function EgressoContato() {
    return (
        <div className={styles.container}>
            <img src={foto} alt="" className={styles.img} />
            <div className={styles.dados}>
                <h2>Fulana de Tal Souza</h2>    
                <p>Formação: Bacharel em Matemática na UFMA</p>
                <p>Ocupação: Gerente de Projeto na CCLogística</p>
                <p>Ano de Conclusão:  2022</p>
                <p>Unidade Acadêmica: Campos Bacanga</p>
                <Contato/>
            </div>
        </div>
    )
}

export default EgressoContato;