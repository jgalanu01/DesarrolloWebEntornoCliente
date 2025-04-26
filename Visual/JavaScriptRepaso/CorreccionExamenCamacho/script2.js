fetch("paises.json")
  .then(respuesta => respuesta.json())
  .then(datos => {
    mostrarDatos(datos);
  });

function mostrarDatos(datos) {
  console.log(datos);

  const continente = prompt("Introduce un continente");

  // Vector de países del continente introducido
  const vectorContinente = datos
    .slice() // HACEMOS COPIA para no modificar el original
    .filter(item => item.Continente == continente)
    .sort((a, b) => b.Población - a.Población);

  console.log(vectorContinente);

  // Mostrar la tabla del continente
  mostrarTabla(vectorContinente, continente);

  // Ordenar todos los paises por continente
  const vectorPaises = datos
    .slice()
    .sort((a, b) => a.Continente.localeCompare(b.Continente))
    .map(item => item.Pais);

  console.log(vectorPaises);

  // 10 países con más población
  const vectorMasPoblacion = datos
    .slice()
    .sort((a, b) => b.Población - a.Población)
    .slice(0, 10);

  console.log(vectorMasPoblacion);

  // Media de población de países de América
  const copiaVector = datos.slice();
  const paisesAmerica = copiaVector.filter(c => c.Continente == "América");

  console.log(paisesAmerica);

  let sumaPoblacion = 0;
  paisesAmerica.forEach(item => {
    sumaPoblacion += item.Población;
  });

  const media = sumaPoblacion / paisesAmerica.length;
  console.log("Media de población de América:", media);

  // Comprobar que existe un país introducido
  const nombrePais = prompt("Teclea el nombre del país");
  const objetoP = copiaVector.find(item => item.Pais == nombrePais);

  if (objetoP) {
    console.log("El país existe:", objetoP);
  } else {
    console.log("El país NO existe");
  }

  // Población mundial usando reduce
  const poblacionMundial = copiaVector.reduce((acumulado, pais) => acumulado + pais.Población, 0);
  console.log("Población mundial:", poblacionMundial);

  // Superficie mundial
  const superficieMundial = copiaVector.reduce((acumulado, pais) => acumulado + pais.Superficie, 0);
  console.log("Superficie mundial:", superficieMundial);

  // País con más población
  const paisMasPoblacion = copiaVector.slice().sort((a, b) => b.Población - a.Población)[0];
  console.log("País con más población:", paisMasPoblacion);

  // País con menos población
  const paisMenosPoblacion = copiaVector.slice().sort((a, b) => a.Población - b.Población)[0];
  console.log("País con menos población:", paisMenosPoblacion);
}

// Mostrar tabla de países (vectorContinente)
function mostrarTabla(vectorContinente, continente) {
  // Crear título
  const titulo = document.createElement("h2");
  titulo.textContent = "Países del continente: " + continente;
  document.body.appendChild(titulo);

  // Crear tabla
  const tabla = document.createElement("table");
  tabla.border = 1;
  document.body.appendChild(tabla);

  // Crear cabecera
  const cabeceraTabla = document.createElement("thead");
  tabla.appendChild(cabeceraTabla);

  const filaCabecera = document.createElement("tr");
  cabeceraTabla.appendChild(filaCabecera);

  const columnas = ["Pais", "Capital", "Continente", "Población", "Superficie"];
  columnas.forEach(columna => {
    const th = document.createElement("th");
    th.textContent = columna;
    filaCabecera.appendChild(th);
  });

  // Crear cuerpo
  const cuerpoTabla = document.createElement("tbody");
  tabla.appendChild(cuerpoTabla);

  vectorContinente.forEach(item => {
    const fila = document.createElement("tr");

    const celdaPais = document.createElement("td");
    celdaPais.textContent = item.Pais;
    fila.appendChild(celdaPais);

    const celdaCapital = document.createElement("td");
    celdaCapital.textContent = item.Capital;
    fila.appendChild(celdaCapital);

    const celdaContinente = document.createElement("td");
    celdaContinente.textContent = item.Continente;
    fila.appendChild(celdaContinente);

    const celdaPoblacion = document.createElement("td");
    celdaPoblacion.textContent = item.Población;
    fila.appendChild(celdaPoblacion);

    const celdaSuperficie = document.createElement("td");
    celdaSuperficie.textContent = item.Superficie;
    fila.appendChild(celdaSuperficie);

    cuerpoTabla.appendChild(fila);
  });
}
