window.onload = inicio;

var texto = document.querySelector("h1");

function inicio() {
  let botones = document.querySelectorAll("button");

  botones[0].addEventListener("click", function () {
    texto.textContent = "Activado el evento cambio texto";
    texto.style.color = "red";
  });
  botones[1].addEventListener("click", function () {
    texto.textContent = "Hola mundo";
    texto.style.color = "black";
  });

  //para recorrer todos los botones que haya

  /*botones.forEach((item,indice)=>{
       item.addEventListener("click",function(){
       switch(indice{
       case 0:console.log("entro en accion 1")
       break;
       case 1:console.log("entro en accion 2")
       break;
       case 2:console.log("entro en accion 3")
       break;
       case 3:console.log("entro en accion 4")
       break;
       })
    })
        */
}
