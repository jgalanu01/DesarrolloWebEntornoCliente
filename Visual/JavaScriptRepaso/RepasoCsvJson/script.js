fetch("paises.csv")
.then(response => response.text())
.then(datos => Mostrardatos(datos))

function Mostrardatos(datos) {
    const lineas = datos.split("\n");
    const cabecera = lineas[0].split(";");

    // Crear tabla
    const tabla = document.createElement("table");
    tabla.border = 1;
    document.body.appendChild(tabla);

    const cabeceraTabla = document.createElement("thead");
    tabla.appendChild(cabeceraTabla);

    cabecera.forEach(item => {
        const nuevoTh = document.createElement("th");
        nuevoTh.textContent = item;
        cabeceraTabla.appendChild(nuevoTh);
    });

    let sumaSuperficieEuropa = 0;
    let contadorEuropa = 0;

    lineas.forEach((item, indice) => {
        if (indice > 0) {
            const nuevoTr = document.createElement("tr");
            tabla.appendChild(nuevoTr);

            const pais = item.split(";");

            // AQUÍ controlamos colores y superficie (antes de meter las celdas)
            if (Number(pais[3]) > 1000000 && Number(pais[3]) < 10000000 && Number(pais[4]) > 500000 && Number(pais[4]) < 10000000) {
                nuevoTr.style.backgroundColor = "green";
            } else if (Number(pais[3]) > 30000000 && Number(pais[4]) < 500000) {
                nuevoTr.style.background = "yellow";
            } else if (pais[2] == "América" || pais[2] == "Asia") {
                nuevoTr.style.color = "red";
            }

            if (pais[2] == "Europa") {
                sumaSuperficieEuropa += Number(pais[4]);
                contadorEuropa++;
            }

            // Ahora creamos las celdas
            pais.forEach(item => {
                const nuevoTd = document.createElement("td");
                nuevoTd.textContent = item;
                nuevoTr.appendChild(nuevoTd);
            });
        }
    });

    // Crear la fila final
    const ultimoTr = document.createElement("tr");
    tabla.appendChild(ultimoTr);

    const mediaSuperficieEuropa = sumaSuperficieEuropa / contadorEuropa;
    const ultimoTd = document.createElement("td");
    ultimoTd.colSpan = cabecera.length; // Para que ocupe toda la fila
    ultimoTd.textContent = "La media de superficie de Europa es: " + mediaSuperficieEuropa.toFixed(2); 
    ultimoTr.style.color = "blue";
    ultimoTr.appendChild(ultimoTd);
}
