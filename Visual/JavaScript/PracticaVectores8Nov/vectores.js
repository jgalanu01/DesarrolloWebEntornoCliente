window.addEventListener("DOMContentLoaded", inicio);




function inicio() {
  btnAniadirNumero = document.getElementById("btnaniadirN");
  btnAniadirNombre = document.getElementById("btnaniadirB");
  btnAniadirPelicula = document.getElementById("btnaniadirP");
  btnEliminarUltimo = document.getElementById("btnEliminarN");
  btnAniadirAlPrincipio = document.getElementById("btnAniadirU");
  btnEliminarPrimero = document.getElementById("btnEliminarS");
  btnCopiarParteVector = document.getElementById("btnSlice");


  const vector1 = [2, 5, 2, 4, 6, 8, 9, 6];
  const vector2 = ["paco", "lola", "pedro"];
  const vector3 = [
    { titulo: 'Los lunes al sol', minutos: 120 },
    { titulo: 'La delgada línea roja', minutos: 120 },
    { titulo: "Bienvenido Mr. Marshall", minutos: 93 }
  ];

  // Función para añadir un número al final de vector1 (push)
  btnAniadirNumero.addEventListener('click', () => {
    vector1.push(7); // Añade el número 7 al final
    console.log("Número añadido:", vector1);
  });




  // Función para añadir un nombre al final de vector2 (push)
  btnAniadirNombre.addEventListener("click", () => {
    vector2.push("Jesús"); // Añade el nombre "Jesús" al final
    console.log("Nombre añadido:", vector2);
  });



  // Función para añadir una película al final de vector3 (push)
  btnAniadirPelicula.addEventListener("click", () => {
    vector3.push({ titulo: "Star Wars:La amenaza fantasma", minutos: 146 });
    console.log("Película añadida:", vector3);
  });



  // Función para eliminar el último número de vector1 (pop)
  btnEliminarUltimo.addEventListener("click", () => {
    const eliminado = vector1.pop();
    console.log("Número eliminado:", eliminado, "Array actual:", vector1);
  });



  // Función para añadir un número al principio de vector1 (unshift)
  btnAniadirAlPrincipio.addEventListener("click", () => {
    vector1.unshift(1); // Añade el número 1 al inicio
    console.log("Número añadido al inicio:", vector1);
  });


  // Función para eliminar el primer nombre de vector2 (shift)
  btnEliminarPrimero.addEventListener("click", () => {
    const eliminado = vector2.shift();
    console.log("Nombre eliminado:", eliminado, "Array actual:", vector2);
  });



  // Función para copiar parte de vector1 (slice)
  btnCopiarParteVector.addEventListener("click", () => {
    const copia = vector1.slice(2, 5); // Copia elementos desde índice 2 hasta 5
    console.log("Copia del array:", copia);
  });


}
