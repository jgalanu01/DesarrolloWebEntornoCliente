const imagenes = [];
const rutasImagenes = "https://randomuser.me/api/portraits/lego/";

// Pedir dimensiones
let filas = parseInt(prompt("Teclea número de filas"));
let columnas = parseInt(prompt("Teclea número de columnas"));

const totalImagenes = filas * columnas;

// Llenar array con rutas de imagen
for (let i = 0; i < totalImagenes; i++) {
    imagenes.push(rutasImagenes + Math.floor(Math.random() * 9) + ".jpg");
}

// Crear tabla principal
const tablaImagenes = document.createElement("table");
tablaImagenes.setAttribute("id", "tablaImg");
document.body.appendChild(tablaImagenes);

// Mostrar imágenes en la tabla
let indice = 0;
for (let f = 0; f < filas; f++) {
    let nuevaFila = document.createElement("tr");
    tablaImagenes.appendChild(nuevaFila);
    for (let c = 0; c < columnas; c++) {
        let nuevaCelda = document.createElement("td");
        nuevaFila.appendChild(nuevaCelda);

        let nuevaImg = document.createElement("img");
        nuevaImg.src = imagenes[indice++];
        nuevaImg.width = 100;
        nuevaCelda.appendChild(nuevaImg);

        nuevaImg.addEventListener("click", function () {
            eliminarYMostrarFila(this.src);
        });
    }
}

// Crear tabla para imágenes eliminadas (varias filas)
const nuevaTabla = document.createElement("table");
document.body.appendChild(nuevaTabla);

function eliminarYMostrarFila(srcImagen) {
    const imagenesTabla = document.querySelectorAll("#tablaImg img");
    const filaNueva = document.createElement("tr");

    imagenesTabla.forEach(img => {
        if (img.src === srcImagen && img.style.visibility !== "hidden") {
            img.style.visibility = "hidden";

            // Crear nueva imagen clonada
            let nuevaCelda = document.createElement("td");
            let imagenClon = document.createElement("img");
            imagenClon.src = srcImagen;
            imagenClon.width = 100;

            nuevaCelda.appendChild(imagenClon);
            filaNueva.appendChild(nuevaCelda);
        }
    });

    // Solo añadir la fila si tiene al menos una imagen
    if (filaNueva.children.length > 0) {
        nuevaTabla.appendChild(filaNueva);
    }
}
