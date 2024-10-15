window.addEventListener("load", inicio);

function inicio(){

    let precioTotal=0;

const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
"melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña", 
"platanos", "pomelos", "prunus", "sandias" ];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6 ];

const imagenes=["imagenes/chirimoya.PNG","imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
"imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
"imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG", 
"imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];


const cuerpo=document.body;

let campoMaestro=document.querySelector(".container");
cuerpo.appendChild(campoMaestro);

let galeria=document.querySelector(".gallery");
campoMaestro.appendChild(galeria);

//Generar imagenes en la galeria


for(let i=0;i<imagenes.length;i++){
    let imagen=document.createElement("div");
    imagen.setAttribute("src",imagenes[i])
    galeria.appendChild(imagen);
}

let textoImagen=document.createElement("div")
imagen.appendChild(textoImagen);






let tabla=document.getElementById("cesta")

}




