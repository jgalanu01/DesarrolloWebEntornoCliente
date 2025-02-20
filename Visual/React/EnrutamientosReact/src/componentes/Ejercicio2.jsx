import { useState, useEffect } from 'react';

export default function Ejercicio2() {
  const [vector, setVector] = useState([]);
  const [numero, setNumero] = useState('');
  const [conteo, setConteo] = useState(0);

  useEffect(() => {
    const nuevoVector = Array.from({ length: 20 }, () => Math.floor(Math.random() * 10) + 1);
    setVector(nuevoVector);
  }, []);

  const contarApariciones = () => {
    const cantidad = vector.filter(n => n === parseInt(numero)).length;
    setConteo(cantidad);
  };

  return (
    <div>
      <h2>Ejercicio 2</h2>
      <p>Vector generado: {vector.join(", ")}</p>
      <input 
        type="number" 
        value={numero} 
        onChange={(e) => setNumero(e.target.value)} 
        min="1" max="10" 
      />
      <button onClick={contarApariciones}>Contar</button>
      <p>Apariciones: {conteo}</p>
    </div>
  );
}
