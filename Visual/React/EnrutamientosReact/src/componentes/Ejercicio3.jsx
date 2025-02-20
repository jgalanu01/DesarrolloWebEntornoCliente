import { useState } from 'react';

const traducciones = {
  1: { en: "One", es: "Uno" },
  2: { en: "Two", es: "Dos" },
  3: { en: "Three", es: "Tres" },
  4: { en: "Four", es: "Cuatro" },
  5: { en: "Five", es: "Cinco" },
  6: { en: "Six", es: "Seis" },
  7: { en: "Seven", es: "Siete" },
  8: { en: "Eight", es: "Ocho" },
  9: { en: "Nine", es: "Nueve" },
  10: { en: "Ten", es: "Diez" }
};

export default function Ejercicio3() {
  const [numero, setNumero] = useState('');
  const [traduccion, setTraduccion] = useState({ en: '', es: '' });

  const traducirNumero = (num) => {
    const valor = traducciones[num] || { en: '', es: '' };
    setTraduccion(valor);
  };

  return (
    <div>
      <h2>Ejercicio 3</h2>
      <input 
        type="number" 
        value={numero} 
        onChange={(e) => {
          setNumero(e.target.value);
          traducirNumero(e.target.value);
        }} 
        min="1" max="10" 
      />
      <p>In English: {traduccion.en}</p>
      <p>En Español: {traduccion.es}</p>
    </div>
  );
}
