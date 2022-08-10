import styles from './CursosCard.module.css';

function CursoCard({ nome, nivel }) {
    return (
        <div className={styles.container}>
            <div className={styles.dados}>
                <p>Nome: {nome}</p>
                <p>Nível: {nivel}</p>
            </div>
        </div>
    )

}

export default CursoCard;