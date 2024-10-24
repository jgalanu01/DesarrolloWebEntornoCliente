window.addEventListener("load", inicio);

const urlDatos = "datos.json";

let elemento = [];

elemento = document.querySelectorAll(".active ul ul li a");

function inicio() {
  elemento[0].onClick = () => mostrar();
  elemento[1].onClick = () => mostrar();
  elemento[3].onClick = () => mostrar();
  elemento[4].onClick = () => mostrar();

  fetch(urlDatos)
    .then((response) => response.json())
    .then((datos) => mostrar(datos))
    .catch((error) => alert("error: " + error));

  function mostrar(datos) {
    const contenedorImagenes = document.querySelectorAll(".gallery-item");
    datos.forEach((item, index) => {
      if (
        (elemento[index].textContent = "Nature" && item.tipo == "naturaleza")
      ) {
        if (index < contenedorImagenes.length) {
          const imagenN = contenedorImagenes[index].querySelector("img");
          imagenN.setAttribute("src", item.imagen);

          const texto = document.createElement("span");
          texto.textContent = item.texto;
          imagenN.appendChild(texto);
        }
      } else if (
        elemento[index].textContent == "People" &&
        item.tipo == "gente"
      ) {
        if (index < contenedorImagenes.length) {
          const imagenN = contenedorImagenes[index].querySelector("img");
          imagenN.setAttribute("src", item.imagen);

          const texto = document.createElement("span");
          texto.textContent = item.texto;
          imagenN.appendChild(texto);
        }
      } else if (
        (elemento[index].textContent =
          "Architecture" && item.tipo == "arquitectura")
      ) {
        if (index < contenedorImagenes.length) {
          const imagenN = contenedorImagenes[index].querySelector("img");
          imagenN.setAttribute("src", item.imagen);

          const texto = document.createElement("span");
          texto.textContent = item.texto;
          imagenN.appendChild(texto);
        }
      } else if (
        (elemento[index].textContent = "Animals" && item.tipo == "animales")
      ) {
        if (index < contenedorImagenes.length) {
          const imagenN = contenedorImagenes[index].querySelector("img");
          imagenN.setAttribute("src", item.imagen);

          const texto = document.createElement("span");
          texto.textContent = item.texto;
          imagenN.appendChild(texto);
        } else if (
          (elemento[index].textContent = "Sports" && item.tipo == "deportes")
        ) {
          if (index < contenedorImagenes.length) {
            const imagenN = contenedorImagenes[index].querySelector("img");
            imagenN.setAttribute("src", item.imagen);

            const texto = document.createElement("span");
            texto.textContent = item.texto;
            imagenN.appendChild(texto);
          }
        }
      }
    });
  }
}
