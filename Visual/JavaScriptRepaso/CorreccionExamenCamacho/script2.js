fetch("paises.json")
  .then(respuesta => respuesta.json())
  .then(datos => mostrarDatos(datos));

function mostrarDatos(datos) {
  console.log(datos);

  const continente = prompt("Introduce un continente");

  // Que me saque los continentes según el continente que ponga en el prompt 
  const vectorContinente = datos
    .slice() // HACEMOS COPIA para no modificar el original
    .filter(item => item.Continente == continente)
    .sort((a, b) => b.Poblacion - a.Poblacion);
  console.log(vectorContinente);

  // Ordenar los paises por continente
  const vectorPaises = datos
    .slice() // HACEMOS COPIA para no alterar el array original
    .sort((a, b) => a.Continente.localeCompare(b.Continente))
    .map(item => item.Pais);
  console.log(vectorPaises);

  // 10 paises con mas poblacion
  const vectorMasPoblacion = datos
    .slice() // HACEMOS COPIA para mantener el original
    .sort((a, b) => b.Población - a.Población)
    .slice(0, 10);
  console.log(vectorMasPoblacion);

  //Media población paises de america

  const copiaVector=datos.slice();
  const paisesAmerica=copiaVector.filter(c=>c.Continente=="América");
  console.log(paisesAmerica)
  var sumaPoblacion=0;
  paisesAmerica.forEach(item=>{
    sumaPoblacion+=item.Población
  })

  const media=sumaPoblacion/paisesAmerica.length;
  console.log(media);

  //Comprobar que existe el pais introducido
  
  const nombrePais=prompt("Teclea el nombre del país");
  const objetoP=copiaVector.find(item=>item.Pais==nombrePais)
  console.log(objetoP)

  //Poblacion mundial con reduce

  const poblacionMundial=copiaVector.reduce((acumulado,pais)=>acumulado+pais.Población,0);
  console.log(poblacionMundial);

  //Superficie mundial
  const superficieMundial=copiaVector.reduce((acumulado,pais)=>acumulado+pais.Superficie,0);
  console.log(superficieMundial);

  //pais con mas población
  const paisMasPoblacion=copiaVector.sort((a,b)=>b.Población-a.Población);
  console.log(paisMasPoblacion[0]);

  //pais con menos población
  const paisMenosPoblacion=copiaVector.sort((a,b)=>a.Población-b.Población);
  console.log(paisMenosPoblacion[0]);





}


