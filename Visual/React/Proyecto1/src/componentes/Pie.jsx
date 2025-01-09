import React, { useState } from "react";
import "./estilos.css";

function Pie() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  function generarNumero() {
    setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="app">
      <h3>Pie página</h3>
      <p>Número Aleatorio: {numeroAleatorio}</p>
      <button className="estilo_decremento" onClick={generarNumero}>
        Generar Nuevo Número
      </button>
    </div>
  );
}

export default Pie;
