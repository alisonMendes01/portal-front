import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Depoimentos from './components/pages/Depoimentos';
import Egressos from './components/pages/Egressos';
import Estatisticas from './components/pages/Estatisticas';
import Login from './components/pages/Login';
// import Cadastro from './components/pages/Cadastro';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import EgressosDescricao from './components/pages/EgressoDescricao';
import Cursos from './components/pages/admin/Cursos';
import FaixaSalarial
from './components/pages/admin/FaixaSalarial';

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/egressos" element={<Egressos />} />
          <Route path="/estatisticas" element={<Estatisticas />} />
          <Route path="/egressodescricao" element={<EgressosDescricao />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/faixasalarial" element={<FaixaSalarial />} />
          {/*<Route path="/cadastro" element={<Cadastro />} />*/}
        </Routes>
      </Container>
      
      <Footer />
    </Router>

  );
}

export default App;
