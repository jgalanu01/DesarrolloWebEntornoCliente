import React, { useEffect, useState } from 'react';

function Datos0() {
  const [personal, setPersonal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonal = async () => {
      try {
        const response = await fetch('http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setPersonal(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonal();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>⚠️ Error: {error}</p>;
  }

  return (
    <div>
      <h2>Lista de Personal</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Cargo</th>
            <th>Edad</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {personal.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.nombre}</td>
              <td>{persona.direccion}</td>
              <td>{persona.cargo}</td>
              <td>{persona.edad}</td>
              <td>{persona.imagen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datos0;
