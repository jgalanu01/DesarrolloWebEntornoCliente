window.addEventListener('load', inicio);
const tabla = document.querySelector("table")
const cabecera = document.querySelector("tr thead");
const contenido = document.querySelector("tbody");


const url = "eleccionesUSA.csv"







function inicio() {

    fetch(url)
        .then(response => response.text())
        .then(data => { mostrar(data) })

}

function mostrar(data) {

}