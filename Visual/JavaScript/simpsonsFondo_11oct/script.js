window.onload=inicio;


const listaImagenes=document.querySelectorAll("#images img");
//identifico el contenedor de fondo para colorFondo o colorBorde
const contenedorFondo=document.getElementById("picture");

const contenedorDestino=document.querySelector("#picture img");
//array de los colores de fondo
const listaFondos=document.querySelectorAll("#fondos div");

//const listaFondos=document.getElementById("fondos").getElementsByTagName("div");
//array de los colores de bordes
const listaBordes=document.querySelectorAll("#bordes div");

const zoom=document.querySelectorAll("#zoom img");
//funcion principal
function inicio(){
    //versión Camacho
listaImagenes.forEach(cargarImagenes);

// versión Adrián
//listaImagenes.forEach(item=>{
//     item.onclick=()=>{
//         cargarImagenes2(item,contenedorDestino);
//     }
//} 
//)

//cargar colores de fondo

listaFondos.forEach(cargarFondos);

//cargar bordes

listaBordes.forEach(cargarBordes);

//funcion de zoom

zoom[0].onclick=zoomMas;
zoom[1].onclick=zoomMenos;






}



//funcionalidades

function zoomMas(objeto){
    contenedorDestino.style.transform="scale(2)";
}

function zoomMenos (objeto){
    contenedorDestino.style.transform="scale(1)";
}
function cargarImagenes(item,indice){
  item.onclick=mostrar;
}

// function cargarImagenes2(item,contenedorDestino){
// contenedorDestino.src=item.src;
// }


function mostrar(item){
    //contenedorDestino.src=img.target.src;
    contenedorDestino.setAttribute("src",item.target.src);

}


function cargarFondos(item,indice){
    item.onclick=mostrarFondo
}

function mostrarFondo(item){

    let nombreColor=item.target.id;
    switch(nombreColor){
        case "negro": contenedorFondo.style.backgroundColor="black";
        break;
        case "rojo": contenedorFondo.style.backgroundColor="red";
        break;
        case "azul": contenedorFondo.style.backgroundColor="blue";
        break;
        case "amarillo": contenedorFondo.style.backgroundColor="yellow";
        break;
        case "verde": contenedorFondo.style.backgroundColor="green";
        break;
        case "rosa": contenedorFondo.style.backgroundColor="pink";
        break;
    }

}

function cargarBordes(item,indice){
    item.onclick=mostrarBorde
}

function mostrarBorde(item){

    let nombreBorde=item.target.id;
    switch(nombreBorde){
        case "negroBorde":contenedorFondo.style.border='10px solid black';
        break;
        case "rojoBorde":contenedorFondo.style.border='10px solid red';
        break;
        case "azulBorde":contenedorFondo.style.border='10px solid blue';
        break;
        case "amarilloBorde":contenedorFondo.style.border='10px solid yellow';
        break;
        case "verdeBorde":contenedorFondo.style.border='10px solid green';
        break;
        case "rosaBorde":contenedorFondo.style.border='10px solid pink';
        break;
        
    }

}



