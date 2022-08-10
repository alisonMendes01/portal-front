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

    buscarPorNome(nome){
        return this.get(`/buscar-por-nome/${nome}`)
    }
}

export default DepoimentoService