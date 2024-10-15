window.addEventListener("load", inicio);

function inicio() {
    let btnMover = document.getElementById("mover");

    const cuerpo = document.body;

    let nombre = ['Rojo', 'Naranja', 'Verde', 'Azul'];
    let colores = ['#FF0000', '#FFA500', '#008000', '#0000FF'];

    // Crear campo para englobar todo
    let campoMaestro = document.createElement("div");
    campoMaestro.className = "container";
    cuerpo.appendChild(campoMaestro);

    let divInterno = document.createElement("div");
    divInterno.className = "gallery";
    campoMaestro.appendChild(divInterno);

    // Creo los apartados para mover las cajas y agrego los nombres como <span>
    let divRojo = document.createElement("div");
    let spanRojo = document.createElement("span");
    spanRojo.textContent = "Rojo";
    divRojo.className = "ponerBorde";
    divRojo.appendChild(spanRojo);
    campoMaestro.appendChild(divRojo);

    let divNaranja = document.createElement("div");
    let spanNaranja = document.createElement("span");
    spanNaranja.textContent = "Naranja";
    divNaranja.className = "ponerBorde";
    divNaranja.appendChild(spanNaranja);
    campoMaestro.appendChild(divNaranja);

    let divVerde = document.createElement("div");
    let spanVerde = document.createElement("span");
    spanVerde.textContent = "Verde";
    divVerde.className = "ponerBorde";
    divVerde.appendChild(spanVerde);
    campoMaestro.appendChild(divVerde);

    let divAzul = document.createElement("div");
    let spanAzul = document.createElement("span");
    spanAzul.textContent = "Azul";
    divAzul.className = "ponerBorde";
    divAzul.appendChild(spanAzul);
    campoMaestro.appendChild(divAzul);

    let modoGenerar = false; // Estado inicial: primero mover
    btnMover.textContent = "Mover cajas"; // El botón comenzará moviendo las cajas

    // Función para generar cajas
    function generarCajas() {
        // 1. Eliminamos las cajas anteriores si existen
        while (divInterno.firstChild) {
            divInterno.removeChild(divInterno.firstChild); // Elimina las cajas de la galería
        }

        // 2. También eliminamos las cajas de los apartados, pero NO el <span> con el nombre
        while (divRojo.children.length > 1) {
            divRojo.removeChild(divRojo.lastChild); // Elimina las cajas, pero deja el <span>
        }
        while (divNaranja.children.length > 1) {
            divNaranja.removeChild(divNaranja.lastChild); // Elimina las cajas, pero deja el <span>
        }
        while (divVerde.children.length > 1) {
            divVerde.removeChild(divVerde.lastChild); // Elimina las cajas, pero deja el <span>
        }
        while (divAzul.children.length > 1) {
            divAzul.removeChild(divAzul.lastChild); // Elimina las cajas, pero deja el <span>
        }

        // Generamos nuevas cajas en la galería
        for (let i = 0; i < 20; i++) {
            let caja = document.createElement("div");

            let numRandom = Math.floor(Math.random() * colores.length);

            caja.style.backgroundColor = colores[numRandom];
            caja.textContent = nombre[numRandom];

            caja.style.paddingBottom = "25px";
            caja.style.fontWeight = "bold";
            caja.style.width = "70px";
            caja.style.height = "50px";

            divInterno.appendChild(caja);
        }
    }

    // Al cargar la página, generamos las cajas automáticamente
    generarCajas();

    // Cuando se hace clic en el botón
    btnMover.onclick = function () {
        if (!modoGenerar) {
            // Modo mover: movemos las cajas a los apartados
            let cajas = document.querySelectorAll(".gallery div");
            cajas.forEach(function (item) {
                switch (item.textContent) {
                    case "Rojo":
                        divRojo.appendChild(item);
                        break;
                    case "Naranja":
                        divNaranja.appendChild(item);
                        break;
                    case "Verde":
                        divVerde.appendChild(item);
                        break;
                    case "Azul":
                        divAzul.appendChild(item);
                        break;
                }
            });

            // Cambiamos el estado para generar nuevas cajas la próxima vez
            modoGenerar = true;
            btnMover.textContent = "Generar nuevas cajas";
        } else {
            // Modo generar: eliminamos las cajas de la galería y los apartados, y generamos nuevas
            generarCajas();

            // Cambiamos el estado para mover las cajas la próxima vez
            modoGenerar = false;
            btnMover.textContent = "Mover cajas";
        }
    };
}
