import styles from './Cadastrar.module.css';

import React from 'react';
import EgressoService from '../services/EgressoService';

function _handleEgresso(event) {
    event.preventDefault();
    this.service.salvar({ "nome": this.state.nome, "email": this.state.email, "cpf": this.state.cpf, "resumo": this.state.resumo, "cargo": this.state.cargo, "url_foto": this.state.url_foto});
    this.state.nome = "";
    this.state.email = "";
    this.state.cpf = "";
    this.state.resumo = "";
    this.state.cargo = "";
    this.state.url_foto = "";
    alert("Curso cadastrado com sucesso!");
}


class Cadastrar extends React.Component{
    state = {
        egressos: [],
        nome: "",
        email: "",
        cpf: "",
        resumo: "",
        cargo: "",
        url_foto: ""

    }
    constructor(){
        super();
        this.service = new EgressoService();
    }

    render(){
        return (
            <div className={styles.cadastro}>
                <div className={styles.container}>
                    <h2>Cadastro</h2>
                    <form method="post" action="" onSubmit={_handleEgresso.bind(this)}>
                        <div  className={styles.inputField}>
                            <label htmlFor="nome">Nome: </label>
                            <input type="text" name="nome" id="nome" placeholder="nome" 
                                onChange={event => this.setState({ nome: event.target.value })}
                            />
                            <div className={styles.underline}></div>
                        </div>
                        <div  className={styles.inputField}>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" placeholder="email"
                                onChange={event => this.setState({ email: event.target.value })}
                            />
                            <div className={styles.underline}></div>
                        </div>
                        <div  className={styles.inputField}>
                            <label htmlFor="cpf">CPF: </label>
                            <input type="text" name="cpf" id = "cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="XXX.XXX.XXX-XX" 
                                onChange={event => this.setState({ cpf: event.target.value })}
                            />
                            <div className={styles.underline}></div>
                        </div>
                        <div  className={styles.inputField}>
                            <label htmlFor="resumo">Resumo: </label>
                            <input type="text" name="resumo" id="resumo" placeholder="resumo"
                                onChange={event => this.setState({ resumo: event.target.value })}
                            />
                            <div className={styles.underline}></div>
                        </div>
                        <div  className={styles.inputField}>
                            <label htmlFor="cargo">Cargo: </label>
                            <input type="tex" name="cargo" id="cargo" placeholder="cargo"
                                onChange={event => this.setState({ cargo: event.target.value })}
                            />
                            <div className={styles.underline}></div>
                        </div>
                        <div  className={styles.inputField}>
                            <label htmlFor="url_foto">Url da Foto: </label>
                            <input type="text" name="url_foto" id="url_foto" placeholder="url_foto"
                                onChange={event => this.setState({ url_foto: event.target.value })}
                            />
                            <div className={styles.underline}></div>
                        </div>
                        <input type="submit" name="cadastrar" value="Cadastrar" />
                    </form>
                </div>
            </div>
        )
    }
    
}
   

export default Cadastrar;

