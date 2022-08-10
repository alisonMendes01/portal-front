import ApiService from '../ApiService'
class DepoimentoService extends ApiService {
    constructor () {
        super('/api/depoimentos')
    }

    buscarRecente() {
        return this.get(`/buscar-recente`)
    }

    buscarPorId(id) {
        return this.get(`/buscar-por-egresso/${id}`)
    }

    buscar6primeiros() {
        return this.get(`/buscar-6-primeiros`)
    }
}

export default DepoimentoService