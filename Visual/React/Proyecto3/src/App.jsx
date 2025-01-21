import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Datos0 from "./Componentes/Datos0";
import Datos1 from "./Componentes/Datos1";

function App() {
  return (
    <Router>
      <Menu />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<h2>Bienvenido a la App</h2>} />
          <Route path="/Datos0" element={<Datos0 />} />
          <Route path="/Datos1" element={<Datos1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
