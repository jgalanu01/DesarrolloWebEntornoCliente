window.addEventListener("load",inicio)
function inicio(){
    vectorColores=["red","green","blue"]
    console.log("entro en js")
    document.body.style.backgroundColor='#90EE90';

    
//a)Fondo verde a la primera caja (utiliza firstElementChild)
    const div1=document.body.firstElementChild
    console.log(div1)
    div1.style.background='green';

//b)Color de fuente rojo al final en la última fila (tr) de la tabla (utiliza lastElementChild)

    const tabla=div1.firstElementChild
    const ultimaFila=tabla.firstElementChild.lastElementChild
    ultimaFila.style.color="red";

//c)Utilizando nextElementSibling accede al tercer div (lista de url) y cambia la url por otro períodico

const div2=div1.nextElementSibling;

const enlace=div2.querySelectorAll('a')[2];

enlace.href='https://www.elplural.com';
enlace.textContent='El Plural';

//d)En el tercer div utiliza lastElementChild y previousElementSibling para acceder al mes de Noviembre y ponerlo en color azul de fondo.
   

const div3=div2.nextElementSibling;

const ol=div3.querySelector('ol');

const ultimo=ol.lastElementChild;


const noviembre=ultimo.previousElementSibling;

noviembre.style.backgroundColor='blue';

// f) Con un bucle for...of coloca un fondo amarillo a cada etiqueta <li> (mes)

const meses=ol.querySelectorAll('li');
for (let mes of meses){
  mes.style.backgroundColor='yellow';
}

noviembre.style.backgroundColor='blue';


//Cambiar color de los parrafos del ultimo div

const div4=div3.nextElementSibling;

const parrafos=div4.querySelectorAll('p');

for (let i=0;i<parrafos.length;i++){
  parrafos[i].style.color=vectorColores[i];
}






}