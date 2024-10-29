window.addEventListener('DOMContentLoaded',inicio);


function inicio(){
//Apartado 2. Sacar los 5 primeros carácteres de un prompt y los 5 últimos
let nombre=prompt('Teclea tu nombre completo');
let primero5caracteres=nombre.slice(0,5)
alert(primero5caracteres)

let ultimo5carácteres;
ultimo5carácteres=nombre.slice(-5)
alert(ultimo5carácteres)




}