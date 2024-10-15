// console.log("accedo al script js")
// alert("entro al js")

window.addEventListener("load",activar);

function activar(){

    const botonActivar=document.querySelector("#btn1"); //identifico el boton 1
    botonActivar.addEventListener("click",empezar) //función

}

function empezar(){
     const encab1=document.querySelector("h1")//identifica h1 como encab1
    console.log ("encabezado1"+encab1.tagName) //esto es para comprobar que se guarda encab1
    encab1.style.backgroundColor='pink' //modifica fondo a rosa
    encab1.style.color='red' //modifica letra a roja
   
   
    const etiqueta1=document.querySelector('h2')
    etiqueta1.style.backgroundColor='blue'
    etiqueta1.style.color='white'

    with(document.body.style) {//modificar el body
    //color='red'
    backgroundColor='yellow'
    border='2px solid green'
    fontFamily='sans'
    padding='30px'
    margin='2em'
    // opacity='0.5'
    }

    //setTimeout(() => {
     //   document.body.style.visibility='hidden'
   // },10000)
  //  setInterval(() =>{
      //  if (document.body.style.visibility==='visible'){
       //     document.body.style.visibility='hidden'
     //   } else{
     //       document.body.style.visibility='visible'
       // }
   // },100000)
    

}

