//botón de generar imágenes 40 random ordenadas

const boton=document.createElement("button");
boton.textContent="Generar imágenes";
boton.style.backgroundColor="blue";
boton.style.padding="5px";
boton.style.margin="0 auto";
boton.style.display="block";
document.body.appendChild(boton);

//Contenedor de imágenes
const contenedor=document.createElement("div");
contenedor.style.margin="0 auto";
contenedor.style.display="flex";
contenedor.style.justifyContent="center";
contenedor.style.flexWrap="wrap";
contenedor.style.width="50%";
contenedor.style.gap="5px";
contenedor.style.border="1px solid black";
document.body.appendChild(contenedor);


boton.addEventListener("click",function(){
    let imagenes=[];
    contenedor.textContent="";
    for(let i=0;i<40;i++){
        let numRandom=Math.floor(Math.random()*20);
        let ficheroCompleto="./img/imagen"+numRandom+".jpg";
        imagenes.push(ficheroCompleto);

    }
    imagenes.sort();

    //Recorrer el vector de imágenes
    imagenes.forEach((item,indice)=>{
        const imagen=document.createElement("img");
        imagen.src=item;
        imagen.alt=item;
        imagen.style.width="100px";
        contenedor.appendChild(imagen);
        imagen.addEventListener("click",function(){
            alert("nombre del fichero:"+imagen.src)
            mostrarRepeticion(imagen.alt,imagenes);
        });
    });
});

function mostrarRepeticion(imagen,imagenes){
    let contadorR=0;
    imagenes.forEach((item,indice)=>{
        console.log(item.src);
        if(item==imagen){
            contadorR++;
        }
        
    });
    alert("repeticiones de la imagen:"+contadorR);
}
