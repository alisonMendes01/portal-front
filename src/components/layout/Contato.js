import styles from './Contato.module.css'
import LinkImg from './LinkImg';
import insta from '../../img/insta.png'

function Contato() {
    return (
        <div className={styles.container}>
            <LinkImg to='https://www.instagram.com/' text= {insta}/>
            <LinkImg to='https://www.instagram.com/' text={insta}/>
            <LinkImg to='https://www.instagram.com/' text={insta}/>
            <LinkImg to='https://www.instagram.com/' text={insta}/>
        </div>
    )
}

export default Contato;