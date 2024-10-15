const cuerpo = document.body;
// Creación del botón
const boton = document.createElement('button');
boton.textContent = 'Crear imágenes';
// Introducción del botón en el body
cuerpo.appendChild(boton);

boton.addEventListener("click", () => {
    let nImagenes = parseInt(prompt('Indique el número de imágenes que quieres crear (5-50)'));

    if (isNaN(nImagenes) || nImagenes < 5 || nImagenes > 50) {
        alert('Error, número incorrecto');
    } else {
        limpieza(); // Limpiar imágenes previas
        let imagenes = declararArray(nImagenes); // Crear un array de imágenes

        let i = 0;
        for (const imagen of imagenes) {
            // Alternar entre hombres y mujeres
            let genero = (i % 2 === 0) ? 'men' : 'women';
            let num = generarNumero(40); // Generar número aleatorio entre 1 y 40
            imagen.setAttribute('src', 'https://randomuser.me/api/portraits/' + genero + '/' + num + '.jpg');
            cuerpo.appendChild(imagen); // Añadir la imagen al body
            i++;
        }
    }
});

// Función para crear el array de imágenes
function declararArray(nImagenes) {
    let imagenes = [];
    for (let i = 0; i < nImagenes; i++) {
        let imagenX = document.createElement('img');
        imagenX.style.margin = "10px"; // Añadir margen para separar las imágenes
        imagenes.push(imagenX);
    }
    return imagenes;
}

// Función para generar un número aleatorio
function generarNumero(max) {
    return Math.floor(Math.random() * max);
}

// Función para limpiar imágenes previas
function limpieza() {
    // Como el botón es el primer hijo, cuando sea el último significa que el resto han sido borrados
    while (cuerpo.lastChild !== boton) {
        cuerpo.removeChild(cuerpo.lastChild);
    }
}
