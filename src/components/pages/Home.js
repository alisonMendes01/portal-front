import styles from './Home.module.css';
import foto from '../../img/foto.png';

import EgressoHome from '../layout/EgressoHome';
import DepoimentosHome from '../layout/DepoimentosHome';
import VerTodos from '../layout/VerTodos';

import EgressoService from '../services/EgressoService';

import React from 'react';
import DepoimentoService from '../services/DepoimentoService';

class Home extends React.Component {
    state = {
        egressos: [],
        depoimentos: []
    }

    constructor() {
        super()
        this.service = new EgressoService();
        this.depoimentoService = new DepoimentoService();
    }

    componentDidMount() {
        this.service.buscar4primeiros()
        .then( response => {
            console.log(response.data)
            this.setState( {egressos : response.data} )
        }).catch (erro => {
            console.log(erro.response)
        })

        this.depoimentoService.buscar6primeiros()
        .then( response => {
            console.log(response.data)
            this.setState( {depoimentos : response.data} )
        }).catch (erro => {
            console.log(erro.response)
        })
    }

    render() {

        return (
            <>
                <section className={styles.home_banner}>
                    <h1>Bem-vindo ao <span>Portal de Egresso</span></h1>
                </section>

                <section className={styles.home_egressos}>
                    <h2 className={styles.topico}>Egressos</h2>
                    <div className={styles.home_egressos_cards}>
                        {this.state.egressos.map(egresso => (
                            <EgressoHome key={egresso.id} nome={egresso.nome} email={egresso.email} foto={foto} id_egresso={egresso.id} />
                        ))}
                        <VerTodos to='/egressos' text='Ver Todos' />
                    </div>
                </section>

                <section className={styles.home_depoimentos}>
                    <h2 className={styles.topico}>Depoimentos</h2>
                    <div className={styles.home_depoimentos_cards}>
                        {this.state.depoimentos.map(depoimento => (
                            <DepoimentosHome key={depoimento.id} nome={depoimento.egressoNome} texto={depoimento.texto} data={depoimento.data[2] + "/" +depoimento.data[1] + "/" + depoimento.data[0] }id_egresso={depoimento.idEgresso}/>
                        ))}
                    </div>

                    <a className={styles.home_depoimentos_todos} href='/depoimentos'>Ver Todos</a>

                </section>
            </>
        )
    }

}

export default Home;