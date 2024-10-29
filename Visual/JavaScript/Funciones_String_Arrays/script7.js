window.addEventListener('load', inicio);
const cuerpo = document.body;
const contenedor = cuerpo.querySelector(".col-lg-12")


//Apartado 7

function inicio() {

    const url = "texto2.txt"

    fetch(url)
        .then(response => response.text())
        .then(data => { mostrar(data) })
        .finally(() => console.log("Fin"))
        .catch(error => console.error(error));

    function mostrar(data) {
        let cadenaLinea = [];
        let cadenaPuntos = [];

        cadenaLinea = data.split("\n");

        cadenaLinea.forEach(element => {
            const espacio = document.createElement("p");
            espacio.style.border = "3px solid red";
            contenedor.appendChild(espacio);
            cadenaPuntos = element.split(":")

            let media = (Number(cadenaPuntos[2]) + Number(cadenaPuntos[3]) + Number(cadenaPuntos[4])) / 3
            espacio.textContent = "Media de " + cadenaPuntos[1] + ": Nota Final: " + media.toFixed(2)
        });


    }

}