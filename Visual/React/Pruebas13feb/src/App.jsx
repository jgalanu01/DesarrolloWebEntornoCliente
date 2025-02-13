/* eslint-disable no-unused-vars */
 import Datos0 from "./Componentes/Datos0.jsx";
 import Datos1 from "./Componentes/Datos1.jsx";
 import Datos2 from "./Componentes/Datos2.jsx";
import Datos3 from "./Componentes/Datos3.jsx"

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Listados APIS</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">DATOS0</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/datos1">DATOS1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/datos2">DATOS2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/datos3">DATOS3</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Datos0 />} />
            <Route path="/datos1" element={<Datos1 />} />
            <Route path="/datos2" element={<Datos2 />} />
            <Route path="/datos3" element={<Datos3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App