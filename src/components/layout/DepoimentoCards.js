import styles from './DepoimentoCards.module.css';

import foto from '../../img/foto.png'
import background from '../../img/background.jpg'

function DepoimentoCards() {
    return (
        <div className={styles.depoimento_cards}>
            <article className={styles.depoimento_cards__card}>
                
                <img src={background} alt='' className={styles.depoimento_cards__image} />

                <div className={styles.depoimento_cards__avatar}>
                    <img src={foto} alt=''/>
                </div>

                <div className={styles.depoimento_cards__avatar}>
                    <h2 class="peaple-cards__title">Lorem ipsum dolor sit amet consectetur</h2>
                    <p class="peaple-cards__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.</p>
                </div>
            </article>
        </div>
    );
}

export default DepoimentoCards;