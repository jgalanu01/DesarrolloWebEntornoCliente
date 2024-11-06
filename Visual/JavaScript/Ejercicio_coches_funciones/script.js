document.addEventListener('DOMContentLoaded', inicio);

const cajaPrincipal = document.querySelector(".container");
const btnKms = document.querySelector("#ord_kms");
const btnMarca = document.querySelector("#ord_marca");
const btnConsumo = document.querySelector("#ord_consumo");

const coches = [];
let ordenAscendente = true;

function inicio() {
    fetch('coches.json')
        .then(response => response.json())
        .then(data => cargar(data));
}

function cargar(data) {
    data.forEach(coche => {
        coches.push(coche);
    });
    btnKms.addEventListener('click', () => ordenarYMostrar("kms"));
    btnMarca.addEventListener('click', () => ordenarYMostrar("marca"));
    btnConsumo.addEventListener('click', () => ordenarYMostrar("consumo"));
}

function ordenarYMostrar(criterio) {
    let listaOrdenar;
    
    if (criterio === "kms") {
        listaOrdenar = coches.slice().sort((a, b) => a.kms - b.kms);
    } else if (criterio === "marca") {
        listaOrdenar = coches.slice().sort((a, b) => a.marca.localeCompare(b.marca));
    } else if (criterio === "consumo") {
        listaOrdenar = coches.slice().sort((a, b) => a.consumo - b.consumo);
    }
    // Al cambiar la variable, le hacemos el reverse
    if (!ordenAscendente) {
        listaOrdenar.reverse();
    }
    
    //La variable cambia entre true o false cada vez que se pulse el botón 
    ordenAscendente = !ordenAscendente;

    mostrarListadoOrdenado(listaOrdenar);
}

function mostrarListadoOrdenado(coches) {
    limpiarCaja();
    coches.forEach(element => {
        const spKms = document.createElement("small");
        spKms.textContent = "kms: " + element.kms;
        const spMarca = document.createElement("small");
        spMarca.textContent = "  MARCA: " + element.marca;
        const spConsumo = document.createElement("small");
        spConsumo.textContent = "  CONSUMO: " + element.consumo;
        const spPrecio = document.createElement("small");
        spPrecio.textContent = "  PRECIO: " + element.precio;
        const salto = document.createElement("br");
        cajaPrincipal.appendChild(spKms);
        cajaPrincipal.appendChild(spMarca);
        cajaPrincipal.appendChild(spConsumo);
        cajaPrincipal.appendChild(spPrecio);
        cajaPrincipal.appendChild(salto);
    });
}

function limpiarCaja() {
    Array.from(cajaPrincipal.children).forEach(child => {
        if (!child.classList.contains('btn')) {
            cajaPrincipal.removeChild(child);
        }
    });
}
