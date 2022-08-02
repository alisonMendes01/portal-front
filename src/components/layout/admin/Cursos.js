import style from './Cursos.module.css';
import CursoCard from './CursosCard';

function Cursos(){
    return (
        <>
        <main className={style.container}>
        <h2>Cursos</h2>
        <form method="post" action="">
            <div  className={style.inputField}>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" id="nome" placeholder="nome" />
                <div className={style.underline}></div>
            </div>
            <div  className={style.inputField}>
                <label htmlFor="nivel">Nivel: </label>
                <input type="text" name="nivel" id="nivel" placeholder="nivel"/>
                <div className={style.underline}></div>
            </div>
            <input type="submit" name="action" value="cadastrar" />
        </form>
    </main>
    <div>
        <h1>Cursos</h1>
        <CursoCard nome="Tecnologia da Informação" nivel="Graduação" />
        <CursoCard nome="Tecnologia da Informação" nivel="Graduação" />
        <CursoCard nome="Tecnologia da Informação" nivel="Graduação" />
        <CursoCard nome="Tecnologia da Informação" nivel="Graduação" />
    </div>
    </>
    )
}

export default Cursos;