import React, { useState } from "react";

function Hortaliza({ mensajeHuerto, enviarMensajeHuerto, PedirSemillasDesdeHortaliza }) {
  const [mensaje, setMensaje] = useState("");

  
  const mandarSemillasAPadre = () => {
    const numeroSemillas = Math.floor(Math.random() * 100); 
    PedirSemillasDesdeHortaliza(numeroSemillas); 
  };

  return (
    <div className="hortaliza">
      <h2>Hortaliza</h2>
      <input
        type="text"
        value={mensaje}
        onChange={(e) => {
          setMensaje(e.target.value);
          enviarMensajeHuerto(e.target.value);
        }}
      />
      <button onClick={mandarSemillasAPadre}>Mandar Semilleros al huerto</button>
      <p>El Huerto dice: {mensajeHuerto}</p>
    </div>
  );
}

export default Hortaliza;
