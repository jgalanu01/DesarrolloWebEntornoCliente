let accion=document.querySelector("form");

accion.onsubmit=()=>{

    let avanzar=true;

    //Validacion 1

    let validar1=document.getElementById("v1").value;
    let smVal1=document.getElementById("smv1");

    if(validar1.length<10||validar1.length>10){
        avanzar=false;
        smVal1.textContent="* El campo tiene que tener 10 carácteres"
    }else if(isNaN(validar1[0]) || isNaN(validar1[9])){
        smVal1.textContent="* El primer y el último dígito deben ser números";
    }else{
        smVal1.textContent="";
    }
    

    //Validacion 2

    let validar2=document.getElementById("v2").value;
    let smVal2=document.getElementById("smv2");

    if(validar2.length<12||validar2.length>12){
        avanzar=false;
        smVal2.textContent="* El campo tiene que ser 12 carácteres"
    }else if(!isNaN(validar2[0]) || !isNaN(validar2[1]) || !isNaN(validar2[2]) || !isNaN(validar2[3]) || !isNaN(validar2[4]) || !isNaN(validar2[5])){
        avanzar=false;
        smVal2.textContent="* Los primeros 6 carácteres no pueden ser números "

    }else if(isNaN(validar2[6]) || isNaN(validar2[7]) || isNaN(validar2[8]) || isNaN(validar2[9]) || isNaN(validar2[10]) || isNaN(validar2[11])){
        smVal2.textContent="* Los últimos 6 carácteres tienen que ser números";
    }

    //Validacion 3

    let validar3=document.getElementById("v3").value;
    let smVal3=document.getElementById("smv3");

    if(validar3.length<20||validar3.length>20){
        avanzar=false;
        smVal3.textContent=" El campo tiene que tener 20 carácteres"
    }else{
        smVal3.textContent="";
    }

    //Validacion 4

    let validar4=document.getElementById("v4").value;
    let smVal4=document.getElementById("smv4");

    if(validar4.length<8||validar4.length>8){
        avanzar=false;
        smVal4.textContent="* El campo tiene que tener 8 carácteres"
    }else{
        smVal4.textContent="";
    }




              

    return avanzar;



    

  
  
    

   

    
}




























