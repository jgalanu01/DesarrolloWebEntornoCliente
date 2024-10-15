window.addEventListener('load', init);

function init() {

    // Identificamos el body
    const body = document.body;

    // Creamos los elementos necesarios
    // El botón que realizará la acción y el div donde se guardarán las imágenes
    const boton = document.createElement('button');
    body.className = 'container';
    const div = document.createElement('div');

    // Poner texto al botón
    boton.textContent = 'Cargar imágenes';

    // Añadir el botón y el div al body
    body.appendChild(boton);
    body.appendChild(div);

    boton.addEventListener('click', () => {

        let numImagenes = parseInt(prompt('Introduce el número de imágenes'));

        if (numImagenes < 5 || numImagenes > 50) {
            alert('El número de imágenes no puede ser menor de 5 ni superior a 50');
            limpiarContenidoJesus();
        } else {
            // Limpiar el contenido cada vez que se hace click.
            limpiarContenidoJesus();

            // Generar las imágenes
            for (let i = 0; i < numImagenes; i++) {
                // Crear un elemento img para cada iteración
                const imagen = document.createElement('img');

                // Añadir las clases correctas
                imagen.classList.add('gallery', 'img');

                // Generar un número aleatorio entre 1 y 50
                let numAleatorio = Math.floor(Math.random() * 50) + 1;
                let genero = '';

                // Alternar entre hombre y mujer
                if (i % 2 == 0) {
                    genero = 'women';
                } else {
                    genero = 'men';
                }

                // Asignar el atributo src a la imagen
                imagen.setAttribute("src", "https://randomuser.me/api/portraits/" + genero + "/" + numAleatorio + ".jpg");

                // Añadir la imagen al div
                div.appendChild(imagen);
            }
        }

        // Función para limpiar el contenido anterior
        function limpiarContenidoJesus() {
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        }
    });
}
