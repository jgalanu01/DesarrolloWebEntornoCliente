// URL local del fichero JSON

const url = "getCiudades.json";

//Identificar contenedor donde van los datos

const ubicacion = document.querySelector("tbody");

fetch(url)
  .then((response) => response.json())
  .then((datos) => mostrar(datos))
  .catch((error) => alert("Error: " + error));

//Realizar solicitud

function mostrar(datos) {
  datos.forEach((item) => {
    const fila = document.createElement("tr");
    ubicacion.appendChild(fila);

    const ciudadNombre = document.createElement("td");
    ciudadNombre.textContent = item.ciudad_nombre;
    fila.appendChild(ciudadNombre);

    const poblacion = document.createElement("td");
    poblacion.textContent = item.ciudad_poblacion;
    fila.appendChild(poblacion);

    const video = document.createElement("td");
    video.innerHTML = item.video;
    fila.appendChild(video);

    const tdfoto = document.createElement("td");
    const img = document.createElement("img");
    img.setAttribute("src", item.imagen);
    img.setAttribute("width", "200px");
    tdfoto.appendChild(img);
    fila.appendChild(tdfoto);

    const tdMapa = document.createElement("td");
    tdMapa.innerHTML = item.mapa;
    fila.appendChild(tdMapa);

    const tdId = document.createElement("td");
    tdId.textContent = item.ciudad_ID;
    fila.appendChild(tdId);
  });
}
