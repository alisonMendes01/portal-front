import styles from './CursosCard.module.css';

function FaixaSalarialCard({descricao}){
    return(    
    <div className={styles.container}>
        <div className={styles.dados}>
            <p>Descrição: {descricao}</p>
        </div>
    </div>
)

}

export default FaixaSalarialCard;