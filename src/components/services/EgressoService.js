import ApiService from '../ApiService'
class EgressoService extends ApiService {
    constructor () {
        super('/api/egresso')
    }
    buscar(id) {
        return this.get(`/buscar/${id}`)
    }
    buscarTodos() {
        return this.get(`/buscar-todos`)
    }
    buscar4primeiros() {
        return this.get(`/buscar-4-primeiros`)
    }
    buscarporNome(nome){
        return this.get(`/buscar-nome/${nome}`)
    }

    salvar(egresso) {
        return this.post("/salvar", egresso);
    }
}
export default EgressoService