import React, { useState } from "react";
import "./estilos.css";

function Botones() {
  const [contador, setContador] = useState(0);

  const incrementar1 = () => {
    setContador(contador + 1);
  };

  const decrementar1 = () => {
    setContador(contador - 1);
  };

  return (
    <div className="app">
      <h3>Contador</h3>
      <div className="estilo_contador">{contador}</div>
      <button className="estilo_incremento" onClick={incrementar1}>
        Incrementar
      </button>
      <button className="estilo_decremento" onClick={decrementar1}>
        Decrementar
      </button>
    </div>
  );
}

export default Botones;
