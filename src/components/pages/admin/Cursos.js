import styles from './Cursos.module.css';
import CursoCard from './CursosCard';

import React from 'react';
import CursoService from '../../services/CursoService';
//import { useState } from 'react';


function _handleCurso(event) {
    event.preventDefault();
    this.service.salvar({ "nome": this.state.nome, "nivel": this.state.nivel });
    this.state.nome = ""
    this.state.nivel = ""
    alert("Curso cadastrado com sucesso!");
}

class Cursos extends React.Component {

    state = {
        cursos: [],
        nome: "",
        nivel: ""
    }

    constructor() {
        super()
        this.service = new CursoService();
    }

    componentDidMount() {
        this.service.buscarTodos()
            .then(response => {
                console.log(response.data)
                this.setState({ cursos: response.data })
            }).catch(erro => {
                console.log(erro.response)
            })
    }


    render() {
        return (
            <>
                <div className={styles.container}>
                    <section>
                        <div className={styles.cursoscadastrar}>
                            <div className={styles.cursoscadastrarsegura}>
                                <h2>Cadastro</h2>


                                <form onSubmit={_handleCurso.bind(this)}>
                                    <div className={styles.inputField}>
                                        <label htmlFor="nome">Nome: </label>
                                        <input type="text" name="nome" id="nome" placeholder="nome"
                                            onChange={event => this.setState({ nome: event.target.value })} 
                                            />
                                        <div className={styles.underline}></div>
                                    </div>
                                    <div className={styles.inputField}>
                                        <label htmlFor="nivel">Nivel: </label>
                                        <input type="text" name="nivel" id="nivel" placeholder="nivel"
                                            onChange={event => this.setState({ nivel: event.target.value })} 
                                            />
                                        <div className={styles.underline}></div>
                                    </div>
                                    <input type="submit" name="action" value="cadastrar" />
                                </form>



                            </div>
                        </div>
                    </section>
                    <section >
                        <div className={styles.cursoslist}>
                            <h1>Cursos</h1>
                            {this.state.cursos.map(
                                curso => <CursoCard key={curso.id} nome={curso.nome} nivel={curso.nivel} />
                            )}
                        </div>
                    </section>

                </div>

            </>
        )
    }
}




export default Cursos;

