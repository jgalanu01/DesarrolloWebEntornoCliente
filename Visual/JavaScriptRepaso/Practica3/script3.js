window.onload = inicio;

function cargarColores() {
    let cadenaColores = "#";
    let posiblesValores = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"
    ];

    for (let i = 0; i < 6; i++) {
        cadenaColores += posiblesValores[Math.floor(Math.random() * 16)];
    }
    return cadenaColores; // Retorna el color generado
}

function inicio() {
    var vectorLi = document.querySelectorAll(".elemento"); //. Para las clases
    console.log(vectorLi);
    let boton = document.querySelector("#cambiar");

    boton.addEventListener("click", function () {
        vectorLi.forEach((item) => {
            item.style.color = cargarColores(); // Llamamos a la función para obtener un color
        });
    });
}