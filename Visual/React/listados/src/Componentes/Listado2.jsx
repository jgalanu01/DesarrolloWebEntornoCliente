/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Listado2 = () => {
  const [datos, setDatos] = useState([]);
  const [url, setUrl] = useState("");
  const [posicion, setPosicion] = useState("");

  // Función que recoge el evento del botón
  const listadoDatos = (url, posicion) => {
    setUrl(url);
    setPosicion(posicion);
  };

  useEffect(() => {
    if (url) { // ✅ Evita que se ejecute con URL vacía
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((x) => setDatos(x))
        .catch((error) => console.error("Error al cargar datos:", error));
    }
  }, [url]);

  return (
    <div>
      <p>Listado 2</p>
      <div className="container">
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-info"
            onClick={() =>
              listadoDatos("http://localhost/serviciosCliente/listadoMensajes.php", 1)
            }
          >
            Mostrar Listado1
          </button>
          <button
            className="btn btn-danger"
            onClick={() =>
              listadoDatos("http://localhost/serviciosCliente/listadoProvincias.php", 2)
            }
          >
            Mostrar Listado2
          </button>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-bordered table-striped">
              <thead>
                {posicion == 1 && (
                  <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Fecha</th>
                    <th>Mensaje</th>
                  </tr>
                )}
                {posicion == 2 && (
                  <tr>
                    <th>Nombre Provincia</th>
                    <th>Votos PA</th>
                    <th>Votos PB</th>
                    <th>Votos PC</th>
                    <th>Votos PD</th>
                    <th>Representantes</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {posicion == 1 &&
                  datos.map((dato) => (
                    <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.usuario}</td>
                      <td>{dato.fecha}</td>
                      <td>{dato.mensaje}</td>
                    </tr>
                  ))}

                {posicion == 2 &&
                  datos.map((dato) => (
                    <tr key={dato.nombreProvincia}>
                      <td>{dato.nombreProvincia}</td>
                      <td>{dato.votosPA}</td>
                      <td>{dato.votosPB}</td>
                      <td>{dato.votosPC}</td>
                      <td>{dato.votosPD}</td>
                      <td>{dato.Representantes}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listado2;
