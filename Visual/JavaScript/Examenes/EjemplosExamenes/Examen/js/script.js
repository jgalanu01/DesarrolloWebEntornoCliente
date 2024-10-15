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

    // Creo los apartados para mover las cajas
    let divRojo = document.createElement("div");
    divRojo.textContent = "Rojo";
    divRojo.className = "ponerBorde";
    campoMaestro.appendChild(divRojo);

    let divNaranja = document.createElement("div");
    divNaranja.textContent = "Naranja";
    divNaranja.className = "ponerBorde";
    campoMaestro.appendChild(divNaranja);

    let divVerde = document.createElement("div");
    divVerde.textContent = "Verde";
    divVerde.className = "ponerBorde";
    campoMaestro.appendChild(divVerde);

    let divAzul = document.createElement("div");
    divAzul.textContent = "Azul";
    divAzul.className = "ponerBorde";
    campoMaestro.appendChild(divAzul);

    // Ahora creamos las cajas con los colores aleatorios
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

    btnMover.onclick = function () {
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
    };
}
