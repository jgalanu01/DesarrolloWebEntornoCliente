fetch("cine.json")
  .then((response) => response.json())
  .then((data) => filtrosCine(data));

function filtrosCine(listadoCine) {
  let vector1 = listadoCine.slice(); //copia con el slice de lo que hay en el fichero
  console.log(vector1);
  //Peliculas que duren menos de 100 minutos
  const menosMinutos = vector1
    .filter((item) => item.Minutos < 100)
    .map((item) => item.Título);
  console.log("Nombre de las peliculas que duran menos de 100 minutos",menosMinutos);

  //6.Pelicula que dura mas minutos

  let peliculaMasMinutos = vector1[0];
  vector1.forEach((item, indice) => {
    if (item.Minutos > peliculaMasMinutos.Minutos) {
      peliculaMasMinutos = item;
    }
  });
  console.log("Pelicula que dura mas minutos", peliculaMasMinutos.Título);

  //7.Cuantas son del 2003.

  let peliculas2003 = vector1.filter((item) => item.Año == 2003);
  console.log("Cuantas son del 2003.", peliculas2003.length);


  //8. Media de duración de las películas

  const mediaPeliculas=vector1.reduce((acumulado,item)=>acumulado+item.Minutos,0)/vector1.length;
  console.log("Media duracion de películas: ",mediaPeliculas);

  //9.Títulos de películas que dirige     "Director": "Steven Spielberg",

  let peliculasSpielberg=vector1.filter((item)=>item.Director=="Steven Spielberg").map((item)=>item.Título);
  console.log("Peliculas dirigidas por Spielberg: ",peliculasSpielberg);

  //10. Película más antigua.

  let peliculaMasAntigua=vector1[0];

  vector1.forEach((item)=>{
    if(item.Año<peliculaMasAntigua.Año){
      peliculaMasAntigua=item;
    }

  });
  console.log("La pelicula mas antigua es: ",peliculaMasAntigua.Título)
  


}

//Añadir todo el fichero empleados al vector listaEmpleados
fetch("empleados.json")
  .then((response) => response.json())
  .then((data) => filtrosEmpleados(data));

function filtrosEmpleados(listadoEmpleados) {
  let vector2 = listadoEmpleados.slice(); //copia con el slice de lo que hay en el fichero
  //1. Empleados menores de 30 años
  const menores = vector2
    .filter((item) => item.Edad < 30)
    .map((item) => item.Nombre);
  console.log("Nombre de los empleados menores de 30 años", menores);

  //2.Media de los empleados

  const media =
    vector2.reduce((acumulado, item) => acumulado + item.Edad, 0) /
    vector2.length;
  console.log("Media de los empleados", media);

  //3.Nombre del trabajador que mas cobra
  let trabajadorMasCobra = vector2[0];
  vector2.forEach((item, indice) => {
    if (item.Salario > trabajadorMasCobra.Salario) {
      trabajadorMasCobra = item;
    }
  });
  console.log("Nombre del trabajador que mas cobra", trabajadorMasCobra.Nombre);

  //4.Nombre del trabajador mas joven

  let trabajadorMasJoven = vector2[0];
  vector2.forEach((item, indice) => {
    if (item.Edad < trabajadorMasJoven.Edad) {
      trabajadorMasJoven = item;
    }
  });
  console.log("Nombre del trabajador mas joven", trabajadorMasJoven.Nombre);

  //Ordenar por salario
  vector2.sort((a, b) => a.Salario - b.Salario).reverse();
  console.log("Ordenar por salario", vector2);

  //5.Cuantos trabajan de desarrollador frontend

  let trabajadoresFrontend = vector2.filter(
    (item) => item.Cargo == "Desarrollador Frontend"
  );
  console.log(
    "Cuantos trabajan de desarrollador frontend",
    trabajadoresFrontend.length
  );
}
