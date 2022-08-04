import ApiService from '../ApiService'
class DepoimentoService extends ApiService {
    constructor () {
        super('/api/depoimentos')
    }

    buscarRecente() {
        return this.get(`/buscar-recente`)
    }

}
export default DepoimentoService