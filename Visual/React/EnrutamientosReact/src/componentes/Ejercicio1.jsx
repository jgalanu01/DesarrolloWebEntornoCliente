import { useState, useEffect } from 'react';

const colores = ["red", "blue", "green", "yellow", "purple", "orange"];
const nombres = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];

export default function Ejercicio1() {
  const [colorFondo, setColorFondo] = useState(colores[0]);
  const [nombreColor, setNombreColor] = useState(nombres[0]);
  const [puntos, setPuntos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const index = Math.floor(Math.random() * colores.length);
      setColorFondo(colores[index]);
      setNombreColor(nombres[Math.floor(Math.random() * nombres.length)]);
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  const verificarAcierto = () => {
    if (nombreColor.toLowerCase() === colorFondo) {
      setPuntos(puntos + 1);
    } else {
      setPuntos(puntos - 1);
    }
  };

  return (
    <div style={{ backgroundColor: colorFondo, padding: '50px', textAlign: 'center' }}>
      <h2>{nombreColor}</h2>
      <button onClick={verificarAcierto}>Click</button>
      <p>Puntos: {puntos}</p>
    </div>
  );
}
