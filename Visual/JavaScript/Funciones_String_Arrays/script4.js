window.addEventListener('load',inicio);
const cuerpo=document.body;
const contenedor=cuerpo.querySelector(".col-lg-12")
const espacio=document.createElement("span");
espacio.style.border="3px solid red";
contenedor.appendChild(espacio);





//Apartado 4

function inicio(){
    const titulo="  Desarrollo de aplicaciones web  "
    const titulo2="  Desarrollo de aplicacioens multiplataorma "
    const resultado=titulo.trim().concat(titulo2.trim());
    espacio.textContent=resultado;
    
}