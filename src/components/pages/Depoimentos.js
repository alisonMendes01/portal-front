
import React from "react";
import DepoimentoEgresso from "../layout/DepoimentoEgresso";
import styles from './Depoimento.module.css';

import DepoimentoService from "../services/DepoimentoService";

class Depoimentos extends React.Component {
    state = {
        depoimentos: []
    }

    constructor() {
        super()
        this.service = new DepoimentoService();
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
                {this.state.depoimentos.map(depoimento => (
                    <DepoimentoEgresso key={depoimento.id} texto={depoimento.texto} data={depoimento.data} />
                ))}

            </div>
        );
    }
}

export default Depoimentos;