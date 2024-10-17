window.addEventListener("load", inicio);

// URL del fichero JSON
const url = "getTodoPersonal.json";

//Eliminamos contenedores del html que no queramos utilizar
const contenedorPadre = document.querySelectorAll(".col-md-4"); //Identificación de los contenedores que no queremos usar

function inicio() {
  eliminarContenedores();
  fetch(url)
    .then((response) => response.json())
    .then((datos) => mostrar(datos))
    .catch((error) => alert("Error: " + error));
}

function mostrar(datos) {
  datos.forEach((datos) => {
    const caja1 = document.createElement("div");
    caja1.className = "card";
    contenedorPadre.appendChild(caja1);

    const caja2 = document.createElement("div");
    caja2.className = "card-body";
    contenedorPadre.appendChild(caja2);

    const imagen = document.createElement("img");
    imagen.setAttribute("src", datos.imagen);

    const nombre = document.createElement("p");
    nombre.textContent = "Nombre: " + datos.nombre;

    caja2.appendChild(imagen);
    caja2.appendChild(nombre);
  });
}

function eliminarContenedores() {
  contenedorPadre.forEach((element) => {
    while (element.hasChildNodes()) {
      element.removeChild(element.firstChild);
    }
  });
}
