import React, { useState } from "react";
import Hortaliza from "./componentes/Hortaliza";
import Frutal from "./componentes/Frutal";
import "./estilo.css";

function App() {
  const [mensajeHortaliza, setMensajeHortaliza] = useState("");
  const [respuestaHortaliza, setRespuestaHortaliza] = useState("");
  const [semillerosHortaliza, setSemillerosHortaliza] = useState(0);

  const [mensajeFrutal, setMensajeFrutal] = useState("");
  const [respuestaFrutal, setRespuestaFrutal] = useState("");
  const [plantonesFrutal, setPlantonesFrutal] = useState(0);

  //datos de Hortaliza
  const PedirSemillasDesdeHortaliza = (e) => {
    setSemillerosHortaliza(e);
  };

  // datos de Frutal
  const PedirPlantonesDesdeFrutal = (e) => {
    setPlantonesFrutal(e);
  };

  return (
    <div>
      {/* Huerto */}
      <div className="huerto">
        <h1>Huerto</h1>
        <p>Mensaje de huerto para hortaliza:</p>
        <input
          type="text"
          value={mensajeHortaliza}
          onChange={(e) => setMensajeHortaliza(e.target.value)}
        />
        <p>Hortaliza dice a huerto: {respuestaHortaliza}</p>
        <p>Peticiones de Hortaliza (semilleros) a huerto: {semillerosHortaliza}</p>

        <p>Mensaje huerto para Frutal:</p>
        <input
          type="text"
          value={mensajeFrutal}
          onChange={(e) => setMensajeFrutal(e.target.value)}
        />
        <p>Frutal dice a huerto: {respuestaFrutal}</p>
        <p>Peticiones de Frutal (plantones) a huerto: {plantonesFrutal}</p>
      </div>

      {/* Hortaliza */}
      <Hortaliza
        mensajeHuerto={mensajeHortaliza}
        enviarMensajeHuerto={setRespuestaHortaliza}
        PedirSemillasDesdeHortaliza={PedirSemillasDesdeHortaliza}
      />

      {/* Frutal */}
      <Frutal
        mensajeHuerto={mensajeFrutal}
        enviarMensajeHuerto={setRespuestaFrutal}
        PedirPlantonesDesdeFrutal={PedirPlantonesDesdeFrutal}
      />
    </div>
  );
}

export default App;
