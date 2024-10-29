window.addEventListener('load',inicio);
const cuerpo=document.body;
const contenedor=cuerpo.querySelector(".col-lg-12")
const espacio=document.createElement("span");
const espacio2=document.createElement("span");
const espacio3=document.createElement("span");
espacio.style.border="3px solid yellow";
contenedor.appendChild(espacio);
espacio2.style.border="3px solid blue";
contenedor.appendChild(espacio2)
espacio3.style.border="3px solid red";
contenedor.appendChild(espacio3)



//Apartado 5


function inicio(){

    const cadena='red green blue yellow blue pink';
    espacio.textContent=cadena;

   const cadena2= cadena.replace("red","rojo").replace("green","verde")                   //Remplazar el texto en ingles a español
    espacio2.textContent=cadena2;

    const cadena3= cadena.replaceAll(" ",";")                                           //sustituir los espaciso en blanco por ;
    espacio3.textContent=cadena3;

   

}