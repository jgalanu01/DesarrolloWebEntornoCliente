window.addEventListener("load", () => {
  let url = "datos.json";

  const gallery = document.querySelectorAll(".active");
  const contenedorImg = document.querySelectorAll(".gallery-item img");
  const listaHormiga = document.querySelector(".current");

  let arrayNaturaleza = [];
  let arrayArquitectura = [];
  let arrayDeportes = [];
  let arrayAnimales = [];
  let arrayGente = [];

  fetch(url)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos))
    .catch((error) => alert("error: " + error));

  function mostrarDatos(datos) {
    datos.forEach((item) => {
      if (item.tipo === "naturaleza") {
        arrayNaturaleza.push(item);
      } else if (item.tipo === "gente") {
        arrayGente.push(item);
      } else if (item.tipo === "arquitectura") {
        arrayArquitectura.push(item);
      } else if (item.tipo === "animales") {
        arrayAnimales.push(item);
      } else if (item.tipo === "deportes") {
        arrayDeportes.push(item);
      }
    });
  }

  gallery.forEach((element) => {
    element.onclick = () => {
      const listaRotulo = document.querySelectorAll(".gallery-item-span");
      listaRotulo.forEach((element) => {
        element.remove();
      });
      listaHormiga.textContent = "Gallery/" + element.textContent;
      let i = 0;

      if (element.textContent === "Nature") {
        contenedorImg.forEach((item, indice) => {
          item.setAttribute("src", arrayNaturaleza[i].imagen);
          const texto = document.createElement("span");
          texto.textContent = arrayNaturaleza[i].texto;
          item.parentNode.appendChild(texto);
          i++;
          if (i === arrayNaturaleza.length) {
            i = 0;
          }
        });
      }

      if (element.textContent === "People") {
        contenedorImg.forEach((item) => {
          item.setAttribute("src", arrayGente[i].imagen);
          const texto = document.createElement("span");
          texto.textContent = arrayGente[i].texto;
          item.parentNode.appendChild(texto);
          i++;
          if (i === arrayGente.length) {
            i = 0;
          }
        });
      }

      if (element.textContent === "Architecture") {
        contenedorImg.forEach((item) => {
          item.setAttribute("src", arrayArquitectura[i].imagen);
          const texto = document.createElement("span");
          texto.textContent = arrayArquitectura[i].texto;
          item.parentNode.appendChild(texto);
          i++;
          if (i === arrayArquitectura.length) {
            i = 0;
          }
        });
      }

      if (element.textContent === "Animals") {
        contenedorImg.forEach((item) => {
          item.setAttribute("src", arrayAnimales[i].imagen);
          const texto = document.createElement("span");
          texto.textContent = arrayAnimales[i].texto;
          item.parentNode.appendChild(texto);
          i++;
          if (i === arrayAnimales.length) {
            i = 0;
          }
        });
      }

      if (element.textContent === "Sports") {
        contenedorImg.forEach((item) => {
          item.setAttribute("src", arrayDeportes[i].imagen);
          const texto = document.createElement("span");
          texto.textContent = arrayDeportes[i].texto;
          item.parentNode.appendChild(texto);
          i++;
          if (i === arrayDeportes.length) {
            i = 0;
          }
        });
      }
    };
  });
});
