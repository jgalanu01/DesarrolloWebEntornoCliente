import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ejercicio1 from './componentes/Ejercicio1';
import Ejercicio2 from './componentes/Ejercicio2';
import Ejercicio3 from './componentes/Ejercicio3';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/ejercicio1">Ejercicio 1</Link></li>
            <li><Link to="/ejercicio2">Ejercicio 2</Link></li>
            <li><Link to="/ejercicio3">Ejercicio 3</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/ejercicio1" element={<Ejercicio1 />} />
          <Route path="/ejercicio2" element={<Ejercicio2 />} />
          <Route path="/ejercicio3" element={<Ejercicio3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
