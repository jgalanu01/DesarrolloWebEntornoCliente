import React, { useState } from "react";

function Frutal({ mensajeHuerto, enviarMensajeHuerto, PedirPlantonesDesdeFrutal }) {
  const [mensaje, setMensaje] = useState("");

  const mandarPlantonesAPadre = () => {
    const numeroPlantones = Math.floor(Math.random() * 100); 
    PedirPlantonesDesdeFrutal(numeroPlantones); 
  };

  return (
    <div className="frutal">
      <h2>Frutal</h2>
      <input
        type="text"
        value={mensaje}
        onChange={(e) => {
          setMensaje(e.target.value);
          enviarMensajeHuerto(e.target.value);
        }}
      />
      <button onClick={mandarPlantonesAPadre}>Mandar Plantones al huerto</button>
      <p>El Huerto dice: {mensajeHuerto}</p>
    </div>
  );
}

export default Frutal;
