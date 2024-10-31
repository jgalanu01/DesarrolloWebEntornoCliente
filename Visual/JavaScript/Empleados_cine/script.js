window.addEventListener("DOMContentLoaded", inicio);
const tabla = document.querySelector("table");
const cabecera = document.querySelector("tr thead");
const contenidos = document.querySelector("tbody");

function inicio() {
    fetch("peliculas.csv")
        .then(respuesta => respuesta.text())
        .then(data => mostrar(data));
}

function mostrar(data) {
    const filas = data.split("\n"); // Dividir en filas
    const encabezados = filas[0].split(","); // Obtener encabezados
    const cabecera = document.createElement("tr");

    // cabecera: datos de filas[0] que se manda a th
    encabezados.forEach((item, indice) => {
        const th = document.createElement("th");
        th.setAttribute("scope", "col");
        const sp = document.createElement("span");
        sp.style.backgroundColor = "lightgreen";
        sp.textContent = item;
        th.appendChild(sp);
        cabecera.appendChild(th);
    });

    // Contenidos
    tabla.appendChild(cabecera);
    filas.forEach((item, indice) => {
        if (indice > 0) {
            const columnas = item.split(",");
            const fila = document.createElement("tr");

            columnas.forEach((item, posicion) => {
                const td = document.createElement("td");
                if (posicion == 4) {
                    if (Number(item[4]) >= 2000) {
                        fila.style.backgroundColor = "red";

                    }
                    // La celda 4 es la del dinero si es mayor de 2000 la fila se pinta roja si no, verde

                } else {
                    fila.style.backgroundColor = "green";
                }
                td.textContent = celda;
                fila.appendChild(td);
            });

            contenidos.appendChild(fila);
        }
    });

    tabla.appendChild(contenidos);
}
