import style from './Login.module.css';

function Login() {
    return (
            <main className={style.container}>
                <h2>Login</h2>
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

export default Login;