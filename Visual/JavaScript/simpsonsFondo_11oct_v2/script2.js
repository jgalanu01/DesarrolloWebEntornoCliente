window.onload=inicio;
//const listaImagenes=document.querySelectorAll("#images img");
const listaImagenes=document.getElementById("images").querySelectorAll("img");
const contenedorDestino=document.querySelector("#picture img");
//identifico el contenedor de fondo para colorFondo o colorBorde
const contenedorFondo=document.getElementById("picture");
//array de los colores de fondo
//const listaFondos=document.querySelectorAll("#fondos div");
const listaFondos=document.getElementById("fondos").querySelectorAll("div");
//const listaFondos=document.getElementById("fondos").getElementsByTagName("div");
//array de los colores de bordes
//const listaBordes=document.querySelectorAll("#bordes div");
const listaBordes=document.getElementById("bordes").querySelectorAll("div");
const zoom=document.querySelectorAll("#zoom img");
//funcion principal
function inicio(){
    listaImagenes.forEach(img=>{
        img.onclick=()=>{
            cargarImagenes(img,contenedorDestino);
        }
    })
    listaFondos.forEach(fondo=>{
        fondo.onclick=()=>{
            cargarFondo (fondo,contenedorFondo);
        }
    })
}
function cargarImagenes(img, contenedorDestino){
contenedorDestino.src=img.src;
}
function cargarFondo(fondo,contenedorFondo){
    
}