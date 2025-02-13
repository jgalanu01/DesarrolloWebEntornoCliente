/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Datos1 = () => {
  const [datos, setDatos] = useState(null); // Estado para guardar los datos
  const [carga, setCarga] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCarga(true); // Inicia el loading
        const response = await fetch("http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php");
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
            <th>Provincia</th>
            <th>votosPA</th>
            <th>votosPB</th>
            <th>votosPC</th>
            <th>votosPD</th>
            <th>Representantes</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item,index) => (
            <tr key={index}>
              <td>{item.nombreProvincia}</td>
              <td>{item.votosPA}</td>
              <td>{item.votosPB}</td>
              <td>{item.votosPC}</td>
              <td>{item.votosPD}</td>
              <td>{item.Representantes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
    
  
}

export default Datos1;

