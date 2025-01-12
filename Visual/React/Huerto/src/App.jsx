import React, { useState } from "react";
import Hortaliza from "./componentes/Hortaliza";
import Frutal from "./componentes/Frutal";
import "./estilo.css";

function App() {
  const [mensajeHortaliza, setMensajeHortaliza] = useState("");
  const [respuestaHortaliza, setRespuestaHortaliza] = useState("");
  const [peticionesSemilleros, setPeticionesSemilleros] = useState(0);

  const [mensajeFrutal, setMensajeFrutal] = useState("");
  const [respuestaFrutal, setRespuestaFrutal] = useState("");
  const [peticionesPlantones, setPeticionesPlantones] = useState(0);

  return (
    <div>
      {/* Sección Huerto */}
      <div className="huerto">
        <h1>Huerto</h1>
        <div>
          <p>Mensaje de huerto para hortaliza:</p>
          <input
            type="text"
            value={mensajeHortaliza}
            onChange={(e) => setMensajeHortaliza(e.target.value)}
          />
        </div>
        <p>Hortaliza dice a huerto: {respuestaHortaliza}</p>
        <p>Peticiones de Hortaliza (semilleros) a huerto: {peticionesSemilleros}</p>
      </div>

      {/* Comunicación entre Huerto y Frutal */}
      <div className="huerto-frutal">
        <p>Mensaje huerto para Frutal:</p>
        <input
          type="text"
          value={mensajeFrutal}
          onChange={(e) => setMensajeFrutal(e.target.value)}
        />
        <p>Frutal dice a huerto: {respuestaFrutal}</p>
        <p>Peticiones de Frutal (plantones) a huerto: {peticionesPlantones}</p>
      </div>

      {/* Sección Hortaliza */}
      <Hortaliza
        mensajeHuerto={mensajeHortaliza}
        enviarMensajeHuerto={setRespuestaHortaliza}
        generarSemilleros={() =>
          setPeticionesSemilleros(Math.floor(Math.random() * 100))
        }
      />

      {/* Sección Frutal */}
      <Frutal
        mensajeHuerto={mensajeFrutal}
        enviarMensajeHuerto={setRespuestaFrutal}
        generarPlantones={() =>
          setPeticionesPlantones(Math.floor(Math.random() * 100))
        }
      />
    </div>
  );
}

export default App;
