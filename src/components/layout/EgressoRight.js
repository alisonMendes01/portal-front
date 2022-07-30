import styles from './EgressoRight.module.css';

import foto from '../../img/foto.png';

import LinkButton from '../layout/LinkButton';

function EgressoRight() {
    return (
        <div className={styles.paragrafo_left_right}>
            <img src={foto} alt="" className={styles.img_right} />
            <p>
                Fringilla nisl. Donec accumsan interdum nisi,quis tincidunt felis sagittis eget.
                tempus euismod.Vestibulum ante ipsum primis in faucibus vestibulum.Blandit adipiscing
                eu felis iaculis volutpat ac adipiscing accumInteger ac pellentesque praesent.san eu
                faucibus.Integer ac pellentesque praesent tincidunt felis sagittis eget.tempus euismod.
                Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
                volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
            </p>
            <LinkButton  to='/egressodescricao' text='Ver mais'/>
        </div>
    )
}

export default EgressoRight;