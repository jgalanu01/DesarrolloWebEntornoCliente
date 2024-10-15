window.addEventListener("load",inicio);
function inicio(){
var tiempoJuego; 
//identificar el botón de inicio
const btnInicio=document.querySelector("#iniciar");
btnInicio.addEventListener("click",comenzarJuego)
btnInicio.className='botonEmpezar'
//contenedor que contiene todas las imágenes
const cajaGallery=document.querySelector(".gallery");
//contenedor que contiene la imagen de muestra
const contenedorMuestra=document.querySelector(".claseMuestra");
const marcadorPuntos=document.querySelector("#puntos");
marcadorPuntos.style.fontSize="45px"
const marcadorTiempo=document.querySelector("#cuentaAtras")
marcadorTiempo.style.fontSize="45px"
var puntos=0;
var segundos=30;
var nR;
//función comienza el juego
function comenzarJuego(){
    
    contadorTiempo();
     nR=cargarImagenMuestra();
    //cada 2 segundos se cambian las imágenes
    
    cargarImagenes();
    //temporizador de juego
    tiempoJuego=setInterval(cargarImagenes,6000);
    btnInicio.setAttribute("disabled",true)
}
//carga del panel con 20 imágenes
function cargarImagenes(){
    //function que resetea el contenido de la caja
    //cada 2 segundos
    limpiarCaja();
    for (let i=0;i<10;i++){
        //crear una etiqueta imagen (img)
        let item=document.createElement("img");
        //texto que contiene el nombre de la imagen
        let rotulo=document.createElement("span");
        let x=Math.floor(Math.random()*20);
        //dotar de atributo una etiqueta img
        item.setAttribute("src",'img/'+x+'.JPG');
        //añadir nombre al item
        item.className="gallery img"
       
        
        //añadirlo a la caja padre
        cajaGallery.appendChild(item);
        //cajaGallery.appendChild(rotulo);
        item.addEventListener("click",()=>{
            if (nR==x){ 
              puntos++;
              item.style.display='none';
              //item.className="desactivar";
           
            
            }else
            {
                puntos--;
            }
            marcadorPuntos.innerText="Puntos: "+puntos;
        })
    }
}
function limpiarCaja(){
    while (cajaGallery.firstChild){
        cajaGallery.removeChild(cajaGallery.firstChild);
    }
}
//carga imagen de muestra
function cargarImagenMuestra(){
    //crear contenido de imagen de  referencia
    const imagenMuestra=document.createElement("img");
    //obtengo un random para seleccionar la imagen
    let numRandom=Math.floor(Math.random()*20)
    //cargar con setAttribue una imagen img/.jpg en el atributo src
    imagenMuestra.setAttribute("src",'img/'+numRandom+".JPG")
       
    //ubicar la imagen a la caja
    contenedorMuestra.appendChild(imagenMuestra);
    return numRandom;
}
function contadorTiempo(){
    tiempo=setInterval(cuentaAtras,1000);
    function cuentaAtras(){
        segundos--;
        marcadorTiempo.innerText="Tiempo:"+segundos;
       if (segundos==0){
        //se acaba el tiempo y se resetea todo
        btnInicio.disabled=false;
        clearInterval(tiempo);
        clearInterval(tiempoJuego);
        limpiarCaja();
        segundos=30;
        puntos=0;
        //borrar la imagen de muestra
        const itemBorrar = contenedorMuestra.querySelector("img");
        console.log(itemBorrar)
        contenedorMuestra.removeChild(itemBorrar);
        console.log("fin")
       }
    }

}
}