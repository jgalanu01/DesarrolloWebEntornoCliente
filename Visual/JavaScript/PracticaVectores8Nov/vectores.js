window.addEventListener("DOMContentLoaded", inicio);




function inicio() {
  btnAniadirNumero = document.getElementById("btnaniadirN");
  btnAniadirNombre = document.getElementById("btnaniadirB");
  btnAniadirPelicula = document.getElementById("btnaniadirP");
  btnEliminarUltimo = document.getElementById("btnEliminarN");
  btnAniadirAlPrincipio = document.getElementById("btnAniadirU");
  btnEliminarPrimero = document.getElementById("btnEliminarS");
  btnCopiarParteVector = document.getElementById("btnSlice");
  btnSeparador = document.getElementById("btnJoin");
  btnIncludes = document.getElementById("btnIncludes");
  btnOrdenar = document.getElementById("btnSort");
  btnInvertir = document.getElementById("btnReverse");
  btnMapeo = document.getElementById("btnMap");
  btnReduce = document.getElementById("btnReduce");
  btnFiltrado = document.getElementById("btnFilter");
  btnSome = document.getElementById("btnSome");
  btnEvery = document.getElementById("btnEvery");
  btnFind = document.getElementById("btnFind");
  btnPosiciones = document.getElementById("btnKeys");
  btnValores = document.getElementById("btnValues");
  btnEntry = document.getElementById("btnEntry");
  


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

  // Función para añadir separador con join en vector2
  btnSeparador.addEventListener("click", () => {
    const resultado = vector2.join(", "); 
    console.log("Vector unido con separador:", resultado);
  });

  // Función para verificar si un elemento está en vector2 (includes) usando if

  btnIncludes.addEventListener("click", () => {
    const nombre = "paco"; 
    if (vector2.includes(nombre)) {
      console.log(`El nombre ${nombre} se encuentra en el vector.`);
    } else {
      console.log(`El nombre ${nombre} no se encuentra en el vector.`);
    }
  });


  //Función para ordenar un array


  btnSort.addEventListener("click", () => {
    vector1.sort(); 
    console.log("Vector ordenado:", vector1);
  });
  

  //Función para invertir el orden del vector
  btnInvertir.addEventListener("click", () => {
  vector1.reverse(); 
  console.log("Array invertido:", vector1);
});

// Función para aplicar mapeo 


  btnMapeo.addEventListener("click", () => {
  const mapeo = vector1.map(elemento => elemento * 2); // Multiplica cada elemento por 2
  console.log("Vector mapeado:", mapeo);
});

// Función reduce


  btnReduce.addEventListener("click", () => {
  const sumaTotal = vector1.reduce((acumulador, elemento) => acumulador + elemento, 0); // Suma todos los elementos
  console.log("La suma total de los elementos es:", sumaTotal);
});

// Función para filtrar elementos


btnFiltrado.addEventListener("click", () => {
 const peliculasFiltradas = vector3.filter(pelicula => pelicula.minutos > 100); // Filtra las películas que duren más de 100 mins.
 console.log("Películas con más de 100 minutos:", peliculasFiltradas);
});

// Función some

  btnSome.addEventListener("click", () => {
  const condicion = vector1.some(elemento => elemento > 5); // Comprueba si algún elemento es mayor que 5
  console.log("¿Hay algún elemento mayor que 5?:", condicion);
});

//Función every
  btnEvery.addEventListener("click", () => {
  const masDeTresLetras = vector2.every(nombre => nombre.length > 3); // Comprueba si todos los nombres tienen más de 3 letras
  console.log(masDeTresLetras);
});

//Función find

  btnFind.addEventListener("click", () => {
  const peliculaMenor = vector3.find(pelicula => pelicula.minutos < 100); // Encuentra la primera película que dure menos de 100 minutos
  console.log("La primera película de menos de 100 minutos es:", peliculaMenor);
}); 

//Función keys para mostrar las posiciones del vector

btnPosiciones.addEventListener("click", () => {
  const posiciones = vector1.keys(); 
  console.log("Posiciones de vector1:");
  for (let indice of posiciones) {
    console.log(indice);
  }
});

//Función para obtener los valores del vector

btnValores.addEventListener("click", () => {
  const valores = vector1.values(); 
  console.log("Valores de vector1:");
  for (let valor of valores) {
    console.log(valor);
  }
});

//Función entry

  btnEntry.addEventListener("click", () => {
  const valores = vector3.entries();
  console.log("Posición y valores de vector 3:");
  for (let [posicion, valor] of valores) {
    console.log(`Posición: ${posicion}, Título: ${valor.titulo}, Minutos: ${valor.minutos}`);
  }
});
}





