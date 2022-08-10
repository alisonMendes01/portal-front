import React from 'react'
import { Chart } from "react-google-charts"
import CargoService from '../services/CargoService'
import CursoService from '../services/CursoService'
import FaixaSalarioService from '../services/FaixaSalarioService'


export const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
};


class Estatisticas extends React.Component {

    state = {
        cargos: [],
        quantidadeCargos: 0,
        idCargo: 0,
    }
    constructor() {
        super()
        this.service = new CargoService();
        this.serviceCurso = new CursoService();
        this.serviceFaixaSalario = new FaixaSalarioService();
    }

    contarEgressosPorCargo(id) {
        this.service.contarEgressosPorCargo(id)
            .then(response => {
                console.log(response.data)
                this.setState({ quantidadeCargos: response.data })
            }).catch(erro => {
                console.log(erro.response)
            }
            )
    }


    render() {
        return (
            <div >
                <h1>Estatísticas</h1>
                <Chart chartType="PieChart" width="100%" height="400px" data={this.state.quantidadeCargos} options={options} />
            </div>
        )
    }

}

export default Estatisticas;
