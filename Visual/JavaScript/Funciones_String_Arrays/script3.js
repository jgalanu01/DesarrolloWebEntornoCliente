window.addEventListener('DOMContentLoaded',inicio);



//Apartado 3
function inicio(){

    let nombre=prompt("teclea tu nombre completo en minúscula")
    let nombreFinal=nombreFinal.charAt(0).toUpperCase;
    

    for(let index=1;index<nombre.length;index++){
        if(nombre.charAt(index)!=" "){  //Si no hay posición con espacios en blanco
            
            nombreFinal+=nombre.charAt(index)

        }else{
            nombreFinal+=nombre.charAt(index+1).toUpperCase()
            index++
            
        }
    }
    alert(nombreFinal)

}