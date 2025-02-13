/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Datos3 = () => {
  const [datos, setDatos] = useState(null); // Estado para guardar los datos
  const [carga, setCarga] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCarga(true); // Inicia el loading
        const response = await fetch("http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setDatos(result); // Guarda los datos en el estado
      } catch (err) {
        setError(err.message); // Guarda el mensaje de error
      } finally {
        setCarga(false); // Finaliza el loading
      }
    };

    fetchData(); // Llama a la función para obtener los datos
  }, []); // [] asegura que el efecto solo se ejecute una vez al montar el componente

  if (carga) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Datos de la API:</h1>
      <div className="container">
     
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Texto</th>
            <th>Subtexto</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
                 <td>{item.id}</td>
              <td><img src={item.imagen} width="50px"></img></td>
              <td>{item.texto}</td>
              <td>{item.subtexto}</td>
              <td>{item.activo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  );
};

export default Datos3;

