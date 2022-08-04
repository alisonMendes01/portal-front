import EgressoCard from '../layout/EgressoCard'
import styles from './Egressos.module.css'

import React from 'react'
import EgressoService from '../services/EgressoService'

class Egressos extends React.Component {
    state = {
        egressos: []
    }

    constructor() {
        super()
        this.service = new EgressoService();
    }

    componentDidMount() {
        this.service.buscarTodos()
            .then(response => {
                console.log(response.data)
                this.setState({ egressos: response.data })
            }).catch(erro => {
                console.log(erro.response)
            })
    }



    render() {
        return (
            <section className={styles.home_egressos} >
                <h1>Egressos</h1>

                {this.state.egressos.map(egresso => (
                    <EgressoCard key={egresso.id} nome={egresso.nome} email={egresso.email} profEgresso={egresso.profEgresso} resumo={egresso.resumo} cpf={egresso.cpf} />
                ))}

            </section>
        )
    }
}

export default Egressos;