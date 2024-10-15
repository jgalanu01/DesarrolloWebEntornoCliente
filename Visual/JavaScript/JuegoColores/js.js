window.addEventListener('load', iniciar);

function iniciar() {
    // Arrays de colores y nombres
    const nombresColores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Naranja', 'Púrpura', 'Rosa', 'Negro'];
    const codigosColores = ['#FF0000', '#008000', '#0000FF', '#FFFF00', '#FFA500', '#800080', '#FFC0CB', '#000000'];
    
    let puntuacion = 0;
    let intervaloId;
    let colorActual = '';  // Variable para almacenar el color actual
    let nombreActual = ''; // Variable para almacenar el nombre actual

    // Elementos del DOM
    const botonComenzar = document.getElementById('comenzarJuego');
    const bloqueColor = document.getElementById('bloqueColor');
    const elementoNombreColor = document.getElementById('nombreColor');
    const elementoPuntuacion = document.getElementById('puntuacion');

    // Función para iniciar el juego
    botonComenzar.addEventListener('click', () => {
        clearInterval(intervaloId); // Limpiar intervalos previos si existieran
        intervaloId = setInterval(cambiarColor, 1000); // Cambiar cada segundo
    });

    // Función para cambiar el color y el texto
    function cambiarColor() {
        // Generar índices aleatorios para el color y el nombre
        const indiceColor = Math.floor(Math.random() * codigosColores.length);
        const indiceNombre = Math.floor(Math.random() * nombresColores.length);

        // Cambiar el color de fondo y el nombre mostrado
        colorActual = codigosColores[indiceColor];
        nombreActual = nombresColores[indiceNombre];
        bloqueColor.style.backgroundColor = colorActual;
        elementoNombreColor.textContent = nombreActual;
    }

    // Evento al hacer clic en el bloque de color
    bloqueColor.addEventListener('click', () => {
        // Comprobar si el color y el nombre coinciden
        if (nombreActual.toLowerCase() === obtenerNombreColor(colorActual).toLowerCase()) {
            puntuacion++; // Sumar 1 si aciertas
        } else {
            puntuacion--; // Restar 1 si fallas
        }

        // Actualizar la puntuación
        elementoPuntuacion.textContent = puntuacion;
    });

    // Función para obtener el nombre del color a partir del código hexadecimal
    function obtenerNombreColor(hex) {
        const indice = codigosColores.indexOf(hex);
        return nombresColores[indice];
    }
}
