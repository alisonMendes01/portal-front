import FaixaSalarialCard from "./FaixaSalarialCard";
import styles from './FaixaSalarial.module.css';

import React from 'react';
import FaixaSalarioService from "../../services/FaixaSalarioService";

function _handleCurso(event) {
    event.preventDefault();
    this.service.salvar({ "descricao": this.state.descricao });
    this.state.descricao = ""
    alert("Faixa salarial cadastrado com sucesso!");
}

class FaixaSalarial extends React.Component {
    state = {
        faixas: [],
        descricao: ""
    }

    constructor() {
        super()
        this.service = new FaixaSalarioService();
    }

    componentDidMount() {
        this.service.buscarTodos()
            .then(response => {
                console.log(response.data)
                this.setState({ faixas: response.data })
            }).catch(erro => {
                console.log(erro.response)
            })
    }


    render() {

        return (
            <>
                <div className={styles.container}>
                    <section>
                        <div className={styles.faixasalarialcadastrar}>
                            <div className={styles.faixasalarialsegura}>
                                <h2>Faixa Salarial</h2>
                                <form onSubmit={_handleCurso.bind(this)}>
                                    <div className={styles.inputField}>
                                        <label htmlFor="descricao">Descrição: </label>
                                        <input type="text" name="descricao" id="descricao" placeholder="descrição" 
                                            onChange={event => this.setState({ descricao: event.target.value })}
                                        />
                                        <div className={styles.underline}></div>
                                    </div>
                                    <input type="submit" name="action" value="cadastrar" />
                                </form>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className={styles.faixasalariallist}>
                            <h1>Faixa Salarial</h1>
                            {this.state.faixas.map(faixa => (
                                <FaixaSalarialCard key={faixa.id} descricao={faixa.descricao} />
                            ))}
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default FaixaSalarial;