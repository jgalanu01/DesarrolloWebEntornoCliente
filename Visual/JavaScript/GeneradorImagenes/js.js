window.addEventListener("load",inicio);
    function inicio(){

        //contenedor existente, el body


            //identificar contenedor padre

            const cuerpo=document.body;

            //crear boton de comando para ejecutar la acción principal
            const boton=document.createElement("button")

            //añadir texto al botón
            boton.textContent="Cargar Imagen";
             //programar evento
            // boton.onClick=()=>cargarImagen();

            boton.addEventListener("click",cargarimagen);

            //Para que aparezca en la página
         
           cuerpo.appendChild(boton); 
           
           //declarar la funcion
           function cargarimagen(){

        // Eliminar imágenes previas antes de añadir nuevas 
        const imagenesPrevias = document.querySelectorAll("img");
        imagenesPrevias.forEach(eliminarImagen);

        function eliminarImagen(img){
            img.remove();
        }

            for (let i=0;i<20;i++){
                const imagen=document.createElement("img");
                    let nR=Math.floor(Math.random()*40);
                    let genero="women";
                    if(i%2==0){
                        genero="women";
                        
                    }else
                    {
                        genero="men";
                    }
                    imagen.setAttribute("src","https://randomuser.me/api/portraits/"+genero+"/"+nR+".jpg")
                    cuerpo.appendChild(imagen)
                }
            }
            
           }







     
        





