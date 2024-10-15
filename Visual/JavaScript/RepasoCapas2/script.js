window.addEventListener("load",inicio);

function inicio(){

    //Seleccionar agregar boton
    let btnMover=document.getElementById("boton-agregar");
    let divInterno=document.querySelector(".gallery")
    
    //crear contenedor para que los botones queden arriba
    let contenedorBotones=document.createElement("div");
    divInterno.appendChild(contenedorBotones);
    
    //crear un contenedor para agregar las imagenes
    let contenedorImagenes=document.createElement("div");
    divInterno.appendChild(contenedorImagenes);
   
    let contadorBoton=1;



    btnMover.onclick=function(){

        //Crear botones
    let nuevoBoton=document.createElement("button");
    nuevoBoton.textContent= "Botón" + contadorBoton;
    contenedorBotones.appendChild(nuevoBoton);


    nuevoBoton.addEventListener("click",function(){
        //Generar número aleatorio entre 1 y 10
        let numeroRandom=Math.floor(Math.random() * 10)+1;
        nuevoBoton.textContent=String (numeroRandom);

        //Eliminar imagenes
        while (contenedorImagenes.firstChild) {
            contenedorImagenes.removeChild(contenedorImagenes.firstChild);
        }

        

        
        //Añadir imagenes
        for(let i=0; i<numeroRandom; i++){
            let imagen=document.createElement("img");
            let numeroImagen=Math.floor(Math.random()*10)+1;
            imagen.setAttribute("src", ".img/" + numeroImagen + ".jpg");
            contenedorImagenes.appendChild(imagen);
        }
    });

    contadorBoton++;

   

    };
    





}