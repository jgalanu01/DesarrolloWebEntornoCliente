window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("botonAdivinar").addEventListener("click", function() {
        // Genera un número aleatorio entre 1 y 10
        const numeroRandom = Math.round(Math.random() * 99) + 1;
        console.log(numeroRandom);
        let intentos = 0;
        let fin = false;

        while (!fin) {
            // Solicita al usuario que introduzca un número
            let numeroIntroducido = prompt("Introduce un número entre 1 y 100:");
            numeroIntroducido = parseInt(numeroIntroducido);
            console.log(numeroIntroducido);
            intentos++;

            // Muestra el número de intentos, si se ha acertado el número y/o si es mayor o menor que el número introducido
          

            if (numeroIntroducido === numeroRandom) {
                if (intentos==1){
                    alert("!!!MUY BIEN, LO HAS ADIVINADO A LA PRIMERA!!!");
                }
                else{
                    alert("!!!FELICIDADES!!!, ¡Lo has adivinado en " + intentos + " intentos!");
                }
                fin = true; // Terminar el juego
               
            } else if (numeroIntroducido > numeroRandom) {
                alert("El "+numeroIntroducido+" no es correcto, el número que buscas es menor."+" Intentos: " + intentos);
                
            } else {
                alert("El "+numeroIntroducido+" no es correcto, el número que buscas es mayor."+" Intentos: " + intentos);
            }
        }
      
    });
}
