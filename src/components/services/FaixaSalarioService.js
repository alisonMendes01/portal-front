import ApiService from "../ApiService";
class FaixaSalarioService extends ApiService {
    constructor() {
        super("/api/faixa-salario");
    }
    buscarTodos() {
        return this.get("/buscar-todos");
    }
    salvar(faixaSalario) {
        return this.post("/salvar", faixaSalario);
    }
}

export default FaixaSalarioService;