let accion=document.querySelector("form")


accion.onsubmit=()=>{

    let avanzar=true;

    //Declarar validaciones y small
    let validacion1=document.getElementById('v1').value
    let validacion2=document.getElementById('v2').value
    let validacion3=document.getElementById('v3').value
    let validacion4=document.getElementById('v4').value

    let smvalidacion1=document.getElementById('smv1')
    let smvalidacion2=document.getElementById('smv2')
    let smvalidacion3=document.getElementById('smv3')
    let smvalidacion4=document.getElementById('smv4')


    //Creamos las funciones de cada validacion

    validacion1Campo(validacion1,smvalidacion1)
    validacion2Campo(validacion2,smvalidacion2)
    validacion3Campo(validacion3,smvalidacion3)
    validacion4Campo(validacion4,smvalidacion4)

    function validacion1Campo(v1,texto){

        //Crear la condición
        if(v1.length !=10){
            avanzar=false;
            texto.textContent="* El campo tiene que ser 10 carácteres"
        }else if(isNaN(v1[0])||isNaN(v1[v1.length-1])){
            avanzar=false;
            texto.textContent="* Son 10 carácteres, pero el primero y el último deben ser un número  "
        }else{
            texto.textContent="";
        }

      

    }
    function validacion2Campo(v2,texto){

        //Crear la condición
        if(v2.length !=12){
            avanzar=false;
            texto.textContent="* El campo tiene que ser 12 carácteres"
        }else{
            for(let i=0;i<v2.length;i++){
                if(!isNaN(v2.charAt(i)) && i < v2.length/2){
                    avanzar=false;
                    texto.textContent="Cumples la longitud de 12, pero los primeros 6 carácteres no pueden ser números "

                }

                else if(isNaN(v2.charAt(i)) && i >= v2.length/2){
                    avanzar=false;
                    texto.textContent="Cumples la longitud de 12, pero 6 últimos carácteres no pueden ser letras"

                }
                
            
           
        }
          
        

        
    }
    function validacion3Campo(v3,texto){

        //Crear la condición
        if(v3.length !=20){
            avanzar=false;
            texto.textContent="* El campo tiene que ser 20 carácteres"
        }else{
            for(let i=0;i<v3.length;i++){
                if(i==4||i==9||i==14||i==19 && v3.charAt(i)!="-"){
                        avanzar=false;
                        texto.textContent="* El formato no es correcto, debe ser 1254-"
                    }
                    else if(isNaN(v3.charAt(i))){
                        avanzar=false;
                        texto.textContent="* Tienen que ser números"
                    }
                }

            }
        }

        }

        
    }
    function validacion4Campo(v4,texto){

        //Crear la condición
        if(v4.length !=8){
            avanzar=false;
            texto.textContent="* El campo tiene que ser 8 carácteres"
        }else{

            let numMayus=0;
            for (let i=0;i<v4.length;i++){
                if(v4.charAt(i)==v4.charAt(i).toUpperCase())
                numMayus+=1;

               

            }
        }
        if(numMayus!=2){
            avanzar=false;
            texto.textContent="Debe haber exacrtamente dos carácteres en mayúscula"
        }

        
    



    return avanzar;

}