import React, { useState } from "react";
import Comparador from "./componentes/Comparador";

function App() {
  const [vector1, setVector1] = useState([]);
  const [vector2, setVector2] = useState([]);

  // Función para generar un vector aleatorio sin repeticiones y ordenado
  const generarVector = () => {
    let numeros = new Set();
    while (numeros.size < 6) {
      numeros.add(Math.floor(Math.random() * 50) + 1);
    }
    return Array.from(numeros).sort((a, b) => a - b);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Comparador de Vectores</h1>
      
      <button onClick={() => setVector1(generarVector())}>Generar Vector 1</button>
      <button onClick={() => setVector2(generarVector())}>Generar Vector 2</button>

      <p><strong>Vector 1:</strong> {vector1.join(", ")}</p>
      <p><strong>Vector 2:</strong> {vector2.join(", ")}</p>

      {/* Pasamos los vectores al hijo para la comparación */}
      <Comparador vector1={vector1} vector2={vector2} />
    </div>
  );
}

export default App;
