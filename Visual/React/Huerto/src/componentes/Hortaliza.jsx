import React, { useState } from "react";

function Hortaliza({ mensajeHuerto, enviarMensajeHuerto, generarSemilleros }) {
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="hortaliza">
      <h2>Hortaliza</h2>
      <input
        type="text"
        placeholder="Escribe para el huerto"
        value={mensaje}
        onChange={(e) => {
          setMensaje(e.target.value);
          enviarMensajeHuerto(e.target.value);
        }}
      />
      <button onClick={generarSemilleros}>Mandar Semilleros</button>
      <p>El Huerto dice: {mensajeHuerto}</p>
    </div>
  );
}

export default Hortaliza;
