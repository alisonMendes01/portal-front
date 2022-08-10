import ApiService from "../ApiService";

class CursoService extends ApiService {
    constructor() {
        super("/api/curso");
    }
    buscarTodos() {
        return this.get("/buscar-todos");
    }
    salvar(curso) {
        return this.post("/salvar", curso);
    }
    
}

export default CursoService;