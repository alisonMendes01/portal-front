import styles from './EgressoLeft.module.css';

import foto from '../../img/foto.png';

function EgressoLeft() {
    return (
        <p className={styles.paragrafo_left_right}>
            <img src={foto} alt="" className={styles.img_left} />
            Fringilla nisl. Donec accumsan interdum nisi,quis tincidunt felis sagittis eget.
            tempus euismod.Vestibulum ante ipsum primis in faucibus vestibulum.Blandit adipiscing
            eu felis iaculis volutpat ac adipiscing accumInteger ac pellentesque praesent.san eu
            faucibus.Integer ac pellentesque praesent tincidunt felis sagittis eget.tempus euismod.
            Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
            Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod.
            Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt
            felis sagittis eget.tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
            Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
        </p>
    )
}

export default EgressoLeft;