window.addEventListener('load',inicio);
const cuerpo=document.body;
const contenedor=cuerpo.querySelector(".col-lg-12")


//Apartado 6


function inicio(){

    const url="texto.txt"

    fetch(url)
    .then(response=>response.text())
    .then(data=>{mostrar(data)})
    .finally(()=>console.log("Fin"))
    .catch(error=>console.error(error));

    function mostrar(data){
        let nombres=[];
        nombres=data.split("\n")   //Lectura del fichero
        let nombreCad=nombres

        //Esto es para quitar las "," y mostrarlo uno debajo del otro en cada span construyendolo uno a uno 
        nombres.forEach(element=>{
            const espacio=document.createElement("p");
            espacio.textContent=element;
            contenedor.appendChild(espacio);

        });
    }


}