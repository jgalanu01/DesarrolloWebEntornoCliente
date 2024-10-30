window.addEventListener('load', inicio);

//Apartado 9

const url = "texto3.txt"

//Arrays necesarios

let temperaturaMediaMax = []
let mediaPluviometria = []
let temperaturaMasAlta = []
let puebloMasLlueve = []

const cuerpo = document.body;
const contenedor = cuerpo.querySelector(".col-lg-12")




//nombrePueblo;temperaturaMAX;temperaturaMIN;pluviometria

function inicio() {

    fetch(url)
        .then(response => response.text())
        .then(data => { mostrar(data) })
        .catch(error => console.error(error));

    function mostrar(datos) {

        let cadena = []
        cadena = datos.split("\n");

        let cadenaMeteo = []
        let sumaTemperaturaMax = 0
        let temperaturaMax = 0
        let mediaPluviometria = 0
        let puebloTMax = 0

        cadena.forEach(element => {
            cadenaMeteo = element.split(";")

            //Temparatura máxima

            sumaTemperaturaMax += Number(cadenaMeteo[1])

            //Media pluviometria

            mediaPluviometria += Number(cadenaMeteo[3])

            //Pueblo con la temperatura Máxima


        });
        let p = document.createElement("p")
        let media = sumaTemperaturaMax / cadena.length;
        let p2 = document.createElement("p")
        mediaPluviometria = mediaPluviometria / cadena.length

        p.textContent = "La media de las temperaturas es:" + media
        p2.textContent = "La media de la puvliometria es:" + mediaPluviometria.toFixed(2)
        contenedor.appendChild(p)
        contenedor.appendChild(p2)


    }


}