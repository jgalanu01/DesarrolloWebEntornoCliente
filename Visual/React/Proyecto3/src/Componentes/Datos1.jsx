import React, { useEffect, useState } from 'react';

function Datos1() {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch('http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php'); 
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatos();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>⚠️ Error: {error}</p>;
  }

  return (
    <div>
      <h2>Datos Geográficos</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Población</th>
            <th>Densidad</th>
            <th>Extensión</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.poblacion}</td>
              <td>{item.densidad}</td>
              <td>{item.extension}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datos1;
