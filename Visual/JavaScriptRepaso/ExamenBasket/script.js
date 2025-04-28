fetch("basket.csv")
.then(response => response.text())
.then(datos => mostrar(datos))

function mostrar(datos) {
    const lineas = datos.split("\n");
    const cabecera = lineas[0].split(",");

    // Crear tabla y cabecera
    const tabla = document.createElement("table");
    tabla.border = 1;
    document.body.appendChild(tabla);

    const cabeceraTabla = document.createElement("thead");
    tabla.appendChild(cabeceraTabla);

    cabecera.forEach(item => {
        const th = document.createElement("th");
        th.textContent = item;
        cabeceraTabla.appendChild(th);
    });

    let puntosTotales = 0;
    let rebotesTotales = 0;

    let jugadorMaxPuntos = "";
    let maxPuntos = 0;

    lineas.forEach((item, indice) => {
        if (indice > 0) {
            const nuevoTr = document.createElement("tr");
            tabla.appendChild(nuevoTr);

            const datosJugador = item.split(",");
            
            // Cálculo de puntos individuales
            const puntosJugador = Number(datosJugador[2]) + Number(datosJugador[3]) * 2 + Number(datosJugador[4]) * 3;

            puntosTotales += puntosJugador;
            rebotesTotales += Number(datosJugador[6]) + Number(datosJugador[7]);

            // Comprobar si este jugador tiene más puntos
            if (puntosJugador > maxPuntos) {
                maxPuntos = puntosJugador;
                jugadorMaxPuntos = datosJugador[0]; // El nombre del jugador
            }

            datosJugador.forEach(item => {
                const nuevoTd = document.createElement("td");
                nuevoTd.textContent = item;
                nuevoTr.appendChild(nuevoTd);
            });
        }
    });

    const primerH3 = document.createElement("h3");
    primerH3.textContent = "Puntos totales del equipo: " + puntosTotales;
    document.body.appendChild(primerH3);

    const segundoH3 = document.createElement("h3");
    segundoH3.textContent = "Rebotes totales del equipo: " + rebotesTotales;
    document.body.appendChild(segundoH3);

    const tercerH3 = document.createElement("h3");
    tercerH3.textContent = "Jugador con más puntos: " + jugadorMaxPuntos + " (" + maxPuntos + " puntos)";
    document.body.appendChild(tercerH3);
}
