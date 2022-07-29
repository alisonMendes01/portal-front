import { Link } from 'react-router-dom';

import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/ufma.png';


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container >

                <Link to="/">
                    <img src={logo} alt="Ufma" className={styles.logo} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/depoimentos">Depoimentos</Link></li>
                    <li className={styles.item}><Link to="/estatisticas">Estatisticas</Link></li>
                    <li className={styles.item}><Link to="/egressos">Egressos</Link></li>
                    {/*<li className={styles.item} >|</li>  
                    <li className={styles.item}><Link to="/login">Login</Link></li>
                    <li className={styles.item}><Link to="/cadastro">Cadastro</Link></li>*/}
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;