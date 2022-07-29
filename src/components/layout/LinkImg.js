import style from './LinkImg.module.css'

function LinkImg({ to, text }) {
    return (
    <a href = {to} target = "_blank">
        <img src={text} alt="" className={style.img} />
    </a>
    );
}

export default LinkImg;