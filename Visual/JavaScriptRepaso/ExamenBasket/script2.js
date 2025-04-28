fetch("daw.json")
  .then(response => response.json())
  .then(datos => comprobarTitulos(datos));

function comprobarTitulos(datos) {
  datos.forEach(item => {
    const nombre = item.nombre;
    let aprueba = true; // Suponemos que aprueba

    for (let asignatura in item) {
      if (asignatura !== "nombre") { // Ignorar el nombre
        if (item[asignatura] < 5) {
          aprueba = false; // Si alguna nota es menor que 5, no aprueba
          break; // Ya no hace falta seguir comprobando
        }
      }
    }

    if (aprueba) {
      console.log(`${nombre} APRUEBA y se titula 🎓`);
    } else {
      console.log(`${nombre} NO aprueba 😥`);
    }
  });
}
