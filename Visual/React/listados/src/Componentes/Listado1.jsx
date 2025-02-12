/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Listado1 = () => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    fetch("http://localhost/serviciosCliente/listadoMensajes.php")
      .then((respuesta) => respuesta.json())
      .then((x) => setMensajes(x));
  }, []);

  return (
    <div>
      <p>Listado 1</p>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Usuario</th>
                  <th>Mensaje</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {mensajes.map((msj) => (
                  <tr key={msj.id}>
                    <td>{msj.id}</td>
                    <td>{msj.usuario}</td>
                    <td>{msj.mensaje}</td>
                    <td>{msj.fecha}</td>
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

export default Listado1;
