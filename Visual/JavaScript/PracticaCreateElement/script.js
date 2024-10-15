window.addEventListener("load",inicio);
    function inicio(){

        //contenedor existente, el body
        const cuerpo=document.body;
        console.log("cuerpo:"+cuerpo)

        //crear contenedor principal
        const divPrincipal=document.createElement('div');

        //agregar estilo a la nueva caja. El estilo procede del fichero css
        divPrincipal.className='contenedorPrincipal' //nombre en css
        divPrincipal.textContent="Estoy en el contenedor principal" //agregar texto al contenedor
        cuerpo.appendChild(divPrincipal); //ahora si se mostrará en la pagina


        //crear contenedor secundario

        const divSecundario=document.createElement('div');
        divSecundario.className='contenedorSecundario'
        divSecundario.textContent="Esto en el contenedor secundario"
        divPrincipal.appendChild(divSecundario); // El padre ahora es el divPrincipal


        const listaBotones=['Botón 1', 'Botón 2','Botón 3', 'Botón 4','Botón 5','Botón 6','Botón 7','Botón 8'] 

        //bucle para recorrer cada elemenyo del array
        //item es cada elemento del array
        listaBotones.forEach((item,indice)=>{     //tiene los parámetros el for each item e indice
        //crear un nuevo botón (total botones: listaBotones.length)
            const nuevoBoton=document.createElement('button');
            nuevoBoton.textContent=item; //va cogiendo el texto de listaBotones, al iniciarlo atrás con el bucle forEach y el item, el item seria el vector listaBotones
            //agregar la clase botonX
            nuevoBoton.className='botonX';
            divSecundario.appendChild(nuevoBoton); //ahora se añade al padre, que es divSecundario
            nuevoBoton.addEventListener("click",()=>{
                console.log("evento de"+item);
                //crear una imagen por cada evento click
                const ImagenX=document.createElement("img");
                //añadir al atributo src de la etiqueta img un valor
                
                //generar un numero random para que salgan imagenes random
                let numeroRandom=Math.round(Math.random()*20);
                if (indice%2==0){
                ImagenX.setAttribute("src","https://randomuser.me/api/portraits/women/"+numeroRandom+".jpg");
                divSecundario.appendChild(ImagenX);

            }else{
                ImagenX.setAttribute("src","https://randomuser.me/api/portraits/men/"+numeroRandom+".jpg");
                divSecundario.appendChild(ImagenX);

            }


                
            })
          

    
    })

}
