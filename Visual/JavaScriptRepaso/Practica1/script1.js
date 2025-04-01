window.onload=inicio;

//La ponemos fuera de inicio para que luego se pueda recoger en las funciones fuera de inicio 

var texto=document.querySelector("#texto"); //let texto=document.getElementById("texto"); si no hay id en el selector tmbn se puede poner la etiqueta

function inicio(){
    console.log("entro en script")

    //Primero identificar componentes html

    let boton1=document.querySelector("#cambiar");  //let boton1=document.getElementById("cambiar");
    //console.log(boton1);
    let boton2=document.querySelector("#retornar"); //let boton2=document.getElementById("retornar");
   
    

    //Generar los eventos. Distintas formas de hacerlo 

    boton1.onclick=cambiar;
    boton2.onclick=retornar;


   /* boton1.onclick=()=>{
        console.log("entro en evento");

    }
        */

   /* boton1.addEventListener("click",function(){
        console.log("entro en evento");

    })

    */
  

    //boton1.addEventListener("click",cambiar);
   
    
}

function cambiar(){
    texto.textContent="Activado el evento cambio texto";
}
function retornar(){
    texto.textContent="Hola mundo";
}




    /*function cambiar(){
        console.log("entro en funcion");
       
    }

    */




 