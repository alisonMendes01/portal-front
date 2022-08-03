import style from './Cadastro.module.css';

function Cadastro() {
    return (
        <main className={style.container}>
            <h2>Cadastro</h2>
            <form method="post" action="">
                <div  className={style.inputField}>
                    <input type="text" name="email" id="email" placeholder="email" />
                    <div className={style.underline}></div>
                </div>
                <div  className={style.inputField}>
                    <input type="password" name="password" id="password" placeholder="senha"/>
                    <div className={style.underline}></div>
                </div>
                <input type="submit" name="action" value="login" />
            </form>
        </main>
    );
}

export default Cadastro;