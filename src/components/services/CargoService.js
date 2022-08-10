import ApiService from "../ApiService";

class CargoService extends ApiService {
    constructor() {
        super("/api/cargo");
    }
    contarEgressosPorCargo(id) {
        return this.get(`/contar-egressos-por-cargo/${id}`);
    }
}

export default CargoService;