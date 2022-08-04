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
}
export default EgressoService