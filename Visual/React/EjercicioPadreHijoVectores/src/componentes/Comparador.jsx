import React, { useState } from "react";

function Comparador({ vector1, vector2 }) {
  const [coincidencias, setCoincidencias] = useState(0);

  const compararVectores = () => {
    const coincidenciasEncontradas = vector1.filter(num => vector2.includes(num)).length;
    setCoincidencias(coincidenciasEncontradas);
  };

  return (
    <div>
      <button onClick={compararVectores}>Comparar Vectores</button>
      <p><strong>Número de coincidencias:</strong> {coincidencias}</p>
    </div>
  );
}

export default Comparador;
