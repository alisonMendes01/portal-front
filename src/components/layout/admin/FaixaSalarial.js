import FaixaSalarialCard from "./FaixaSalarialCard";
import style from './Cursos.module.css';

function FaixaSalarial(){
    return(
            <>
            <main className={style.container}>
            <h2>Faixa Salarial</h2>
            <form method="post" action="">
                <div  className={style.inputField}>
                    <label htmlFor="descricao">descrição: </label>
                    <input type="text" name="descricao" id="descricao" placeholder="descrição" />
                    <div className={style.underline}></div>
                </div>
                <input type="submit" name="action" value="cadastrar" />
            </form>
        </main>
        <div>
            <h1>Faixa Salarial</h1>
            <FaixaSalarialCard descricao="500-1000" />
            <FaixaSalarialCard descricao="1000-1500" />
            <FaixaSalarialCard descricao="1500-2000" />
            <FaixaSalarialCard descricao="2000-2500" />
        </div>
        </>
)
}

export default FaixaSalarial;