window.addEventListener('DOMContentLoaded',inicio);


function inicio(){
    //Apartado 1
    let miNombre=prompt("tu nombre:")
    let nombreMayus=miNombre.toUpperCase();
    alert("Mi nombre en mayúscula"+nombreMayus)

    
    let validar=true;
    while(validar){
        let nombreEnMayus=prompt("tu nombre en mayúscula:")
        if(nombreEnMayus===nombreEnMayus.toUpperCase()){
            alert('tu nombre está en mayúscula')
    
        }else{
            alert('tu nombre no está en mayúscula')
        }

    }


    
    
}