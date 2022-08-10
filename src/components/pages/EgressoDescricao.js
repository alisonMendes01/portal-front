import styles from './EgressoDescricao.module.css'

import React from 'react'
import EgressoService from '../services/EgressoService'
import DepoimentoService from '../services/DepoimentoService'
import EgressoContato from '../layout/EgressoContato'
import Depoimento from '../layout/Depoimento'

class Egressos extends React.Component {
    state = {
        egresso: [],
        depoimento: []
    }

    constructor() {
        super()
        this.service = new EgressoService();
        this.service_depoimento = new DepoimentoService();
        const queryParams = new URLSearchParams(window.location.search);
        this.id = queryParams.get("id");
    }

    componentDidMount() {
        this.service.buscar(this.id)
            .then(response => {
                console.log(response.data)
                this.setState({ egresso: response.data })
            }).catch(erro => {
                console.log(erro.response)
            })
        this.service_depoimento.buscarPorId(this.id)
            .then(response => {
                console.log(response.data)
                this.setState({ depoimento: response.data })
            }).catch(erro => {
                console.log(erro.response)
            })
    }

    render() {
        return (
            <div className={styles.descricao}>
                <section  className={styles.egresso}>
                    <h1>Egressos Descrição</h1>
                    {this.state.egresso.map(egresso => (
                        <EgressoContato key={egresso.id} nome={egresso.nome} email={egresso.email} cargo={egresso.cargo} resumo={egresso.descricao} />
                    ))}
                </section>
                <section className={styles.depoimento}>
                    <h1>Depoimento</h1>
                    {this.state.depoimento.map(depoimento => (
                        <Depoimento key={depoimento.id} nome={depoimento.egressoNome} texto={depoimento.texto} data={depoimento.data[2] + "/" +depoimento.data[1] + "/" + depoimento.data[0] } />
                    ))}
                </section>
            </div>
        )
    }
}

export default Egressos;