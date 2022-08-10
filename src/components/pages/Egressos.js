import EgressoCard from '../layout/EgressoCard'
import styles from './Egressos.module.css'

import React from 'react'
import EgressoService from '../services/EgressoService'


function _BuscarEgresso(event) {
    event.preventDefault();
    this.setState({egressos: []})
    this.service.buscarporNome(this.state.nome.replace(' ', '+'))
        .then(response => {
            this.setState({ egressos: response.data })
        }).catch(erro => {
            console.log(erro.response)
        }).finally(() => {
            this.setState({ nome: "" })
        }
        )
}


class Egressos extends React.Component {
    state = {
        egressos: [],
        nome: ""
    }

    constructor() {
        super()
        this.service = new EgressoService();
    }

    resetState = () => {
        this.setState({egressos: []})
    }
    
    componentDidMount() {
        this.service.buscarTodos()
            .then(response => {
                console.log(response.data)
                this.setState({ egressos: response.data })
            }
            ).catch(erro => {
                console.log(erro.response)
            }
            )

    }

    render() {
        return (
            <section className={styles.home_egressos} >
                <h1>Egressos</h1>
                <form onSubmit={_BuscarEgresso.bind(this)}>
                    <p>Pesquisar:</p>
                    <input type="text" id="name" name="nameKennedy"
                        onChange={event => this.setState({ nome: event.target.value })}
                    />
                    <input type="submit" name="buscarKennedy" value="buscar" />
                </form>
                {this.state.egressos.length > 0 ? (
                    this.state.egressos.map(egresso => (
                        <EgressoCard key={egresso.id} id_egresso={egresso.id} nome={egresso.nome} email={egresso.email} cpf={egresso.cpf} resumo={egresso.resumo} cargo={egresso.cargo} />
                    ))
                ) : <p>Sem resultados!</p>}

            </section>
        )
    }
}

export default Egressos;