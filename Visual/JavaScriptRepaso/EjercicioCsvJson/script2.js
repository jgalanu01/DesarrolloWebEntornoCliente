fetch("paises.json")
.then(response=>response.json())
.then(datos=>mostrar(datos))


function mostrar(datos){
    console.log(datos);

    /*const continenteUsuario=prompt("Introduce un continente");

    const vectorContinente=datos.slice().filter(item=>item.Continente==continenteUsuario);
    console.log(vectorContinente);

    */

    const vectorOrdenarContinente=datos.slice().sort((a,b)=>a.Continente.localeCompare(b.Continente));
    console.log(vectorOrdenarContinente);

     // 10 países con más población

     const paisesMasPoblacion=datos.slice().sort((a,b)=>b.Población-a.Población).slice(0,10);
     console.log(paisesMasPoblacion);

      // Media de población de países de América

const paisesAmerica = datos.slice().filter(item => item.Continente == "América");
const sumaPoblacion = paisesAmerica.reduce((acumulador, c) => acumulador + c.Población, 0);
const mediaAmerica = sumaPoblacion / paisesAmerica.length;

console.log(mediaAmerica);

  // Comprobar que existe un país introducido

  //const paisIntroducido=prompt("Introduce un pais");

  const comprobarPais = datos.find(item => item.Pais == paisIntroducido);

if (comprobarPais) {
  console.log("Sí está");
} else {
  console.log("No está");
}

// Población mundial usando reduce

const poblacionMundial=datos.slice().reduce((acumulador,item)=>acumulador+item.Población,0);
console.log(poblacionMundial)







}