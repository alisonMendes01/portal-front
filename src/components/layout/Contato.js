import styles from './Contato.module.css'
import LinkImg from './LinkImg';
import insta from '../../img/insta.png'
import facebook from '../../img/facebook.png'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'

function Contato({linkInsta, linkFacebook, linkLinkedin, linkGithub}) {
    return (
        <div className={styles.container}>
            <LinkImg to={linkInsta} text= {insta}/>
            <LinkImg to={linkFacebook} text={facebook}/>
            <LinkImg to={linkLinkedin} text={linkedin}/>
            <LinkImg to={linkGithub} text={github}/>
        </div>
    )
}

export default Contato;