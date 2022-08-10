
import React from "react";
import DepoimentoEgresso from "../layout/DepoimentoEgresso";
import styles from './Depoimentos.module.css';

import DepoimentoService from "../services/DepoimentoService";
import EgressoService from "../services/EgressoService";

function filtra_depoimentos(event){
    event.preventDefault();
    this.setState({depoimentos: []});
    this.service.buscarPorNome(this.state.nome)
        .then( response => {
            this.setState({depoimentos: response.data})
        }).catch(erro => {
            console.log(erro.response)
        });
}


class Depoimentos extends React.Component {
    state = {
        depoimentos: [],
        nome: ""
    }

    constructor() {
        super()
        this.service = new DepoimentoService();
        this.serviceEgresso = new EgressoService();
    }

    componentDidMount() {
        this.service.buscarRecente()
            .then(response => {
                console.log(response.data)
                this.setState({ depoimentos: response.data })
            }).catch(erro => {
                console.log(erro.response)
            })
    }

    render() {
        return (
            <div className={styles.home_depoimento}>
                <h1>Depoimentos</h1>

                <form onSubmit={filtra_depoimentos.bind(this)}>
                    <p>Pesquisar:</p>
                    <input type="text" id="name" name="nameDepoimento"
                        onChange={event => this.setState({ nome: event.target.value })} 
                    />
                    <input type="submit" name="buscarDepoimento" value="buscar" />
                </form>
                {console.log(this.state.depoimentos)}

                {this.state.depoimentos.length > 1 ?
                this.state.depoimentos.map(depoimento => (
                    <DepoimentoEgresso key={depoimento.id} nome={depoimento.egressoNome} texto={depoimento.texto} data={depoimento.data[2] + "/" +depoimento.data[1] + "/" + depoimento.data[0] } id_egresso={depoimento.idEgresso} />
                )) : 
                    <p>Sem resultados!</p>
                }             

            </div>
        );
    }
}

export default Depoimentos;