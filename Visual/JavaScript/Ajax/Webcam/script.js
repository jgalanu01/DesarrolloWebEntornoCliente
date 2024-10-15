// URL del fichero JSON
const url = "getWebcam.php.json";

// Contenedor donde se muestran los datos
const ubicacion = document.querySelector("#fila");

// Realizar solicitud
fetch(url)
    .then(response => response.json())
    .then(datos => mostrar(datos))
    .catch(error => alert("Error: " + error));

function mostrar(datos) {
    datos.forEach(webc => {
        const columna = document.createElement("div");
        columna.className = "col-lg-4"; 
        ubicacion.appendChild(columna);

        const tarjeta = document.createElement("div");
        tarjeta.className = "card";
        columna.appendChild(tarjeta);

        const videoWeb = document.createElement("video");
        videoWeb.setAttribute("src", webc.url);
        videoWeb.setAttribute("autoplay", "true");
        videoWeb.setAttribute("loop", "");
    
        tarjeta.appendChild(videoWeb);

        const cardBody = document.createElement("div"); 
        cardBody.className = "card-body";
        tarjeta.appendChild(cardBody);

        const titulo = document.createElement("h4");
        titulo.className = "card-title";
        titulo.textContent = webc.lugar;

        const subtitulo = document.createElement("p");
        subtitulo.className = "card-text";
        subtitulo.innerHTML = webc.tiempo;

        cardBody.appendChild(titulo);
        cardBody.appendChild(subtitulo);
    });
}
