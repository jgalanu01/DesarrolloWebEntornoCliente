// URL del fichero JSON
const url = "getWebcams.json";

// Contenedor donde se muestra el video
const ubicacion = document.querySelector("#parrafo");

// Realizar solicitud al hacer clic en el botón
document.querySelector("#mostrar").addEventListener("click", () => {
    fetch(url)
        .then(response => response.json())
        .then(datos => mostrarVideo(datos))
        .catch(error => alert("Error: " + error));
});

function mostrarVideo(datos) {

    // Limpiar contenido previo
    ubicacion.innerHTML = "";

    
    const randomIndex = Math.floor(Math.random() * datos.length);

  
    const webc = datos[randomIndex];

   
    const videoWeb = document.createElement("video");
    videoWeb.setAttribute("src", webc.url);
    videoWeb.setAttribute("autoplay", "");
    videoWeb.setAttribute("loop", "");
    videoWeb.setAttribute("controls", "");
    videoWeb.setAttribute("width", "1000px");

    const titulo = document.createElement("h4");
    titulo.textContent = webc.lugar;

    const subtitulo = document.createElement("p");
    subtitulo.innerHTML = webc.tiempo;

   
    ubicacion.appendChild(titulo);
    ubicacion.appendChild(videoWeb);
    ubicacion.appendChild(subtitulo);
}


