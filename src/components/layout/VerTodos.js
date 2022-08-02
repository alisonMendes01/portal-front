import { Link } from 'react-router-dom'

import style from './VerTodos.module.css'

function VerTodos({ to, text }) {
    return (
        <div className={style.container}>
            <Link className={style.btn} to={to} >
                {text}
            </Link >
        </div>
    );
}

export default VerTodos;