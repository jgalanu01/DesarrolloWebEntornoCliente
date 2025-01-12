import React, { useState } from "react";

function Frutal({ mensajeHuerto, enviarMensajeHuerto, generarPlantones }) {
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="frutal">
      <h2>Frutal</h2>
      <input
        type="text"
        placeholder="Escribe para el huerto"
        value={mensaje}
        onChange={(e) => {
          setMensaje(e.target.value);
          enviarMensajeHuerto(e.target.value);
        }}
      />
      <button onClick={generarPlantones}>Mandar Plantones</button>
      <p>El Huerto dice: {mensajeHuerto}</p>
    </div>
  );
}

export default Frutal;
