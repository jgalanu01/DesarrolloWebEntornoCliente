let accion=document.getElementById("validar");
accion.onsubmit=()=>
{
    let avanzar=true;

    //Primer cuadro de texto: entre 3 y 5 dígitos

    let exped=document.getElementById("idExpediente");
    let contExp=exped.value; //value para obtener el contenido
    let smExp=document.getElementById("smExpediente");  //si no se cumple entre 3 y 5 digitos. Lo controla el small id
   
    if(contExp.length<3|| contExp.length>5){
        avanzar=false;                                  //Si es mayor de 5 o menor de 3 el programa no avanza
        smExp.textContent="* tiene que tener entre 3 y 5 carácteres numéricos"                        
   
   
    }else if(isNaN(contExp)){ //Si no es un número tampoco avanzará, la booleana salta a false
        avanzar=false;
        smExp.textContent="* el expediente tiene que ser un valor numérico"
    } else{
        smExp.textContent="";
    } 

    

    //Segunda validación nombre: al menos 3 letras y solo letras
    let nombre = document.getElementById("idNombre").value;
    let smNom = document.getElementById("smNombre");

     // Validación adicional de longitud del nombre
    if (nombre.length < 3) {
        avanzar = false;
        smNom.textContent = "* El nombre debe tener al menos 3 caracteres";
    } else{
        smNom.textContent = "";  // Si no hay números y la longitud es correcta, limpiamos el mensaje
    }
    
    // Bucle para verificar si el nombre contiene algún número (del 0 al 9)
    for (let i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre[i]) && nombre[i] !== " ") {  // Verificar si el carácter es un número
            avanzar = false;
            smNom.textContent = "* El nombre no debe contener números";
        }
    }
    
   
    


    //Tercera validación apellido: al menos 3 letras y solo letras
    let apellido = document.getElementById("idApellido").value;
    let smApell = document.getElementById("smApellido");
    
    // Bucle para verificar si el nombre contiene algún número (del 0 al 9)
    for (let i = 0; i <= 9; i++) {
        if (apellido.indexOf(i.toString()) !== -1) {
            avanzar = false;  // Si encontramos un número, evitamos el envío
            smApell.textContent = "* El apellido no debe contener números";
            break;  // No necesitamos seguir buscando si ya encontramos un número
        }
    }
    
    
    // El apellido debe tener 3 caracteres o más
    if (apellido.length < 3) {
        avanzar = false;
        smApell.textContent = "* El apellido debe tener al menos 3 caracteres";
    } else {
        smApell.textContent = "";  // Si no hay números y la longitud es correcta, limpiamos el mensaje
    }


                //VALIDACIONES PARA LAS NOTAS

    //Validación para Desarrollo web entorno cliente
   let desarrolloWebCliente = document.getElementById("idDWEC").value;
   let smCliente=document.getElementById("smDWEC");

   // Verificar que la nota sea entre 1 y 10 y que sea un número
   if (isNaN(desarrolloWebCliente) || desarrolloWebCliente < 1 || desarrolloWebCliente > 10) {
    avanzar = false;
    smCliente.textContent = "* La nota tiene que ser un número entre 1 y 10";
    } else {
        smCliente.textContent = "";  // Limpiar mensaje si es válido
    }

   

        //Validación para Desarrollo web entorno servidor

   let desarrolloWebServidor = document.getElementById("idDWES").value;
   let smServidor=document.getElementById("smDWES");

   // Verificar que la nota sea entre 1 y 10 y que sea un número
   if (isNaN(desarrolloWebServidor) || desarrolloWebServidor < 1 || desarrolloWebServidor > 10) {
    avanzar = false;
    smServidor.textContent = "* La nota tiene que ser un número entre 1 y 10";
    } else {
        smServidor.textContent = "";  // Limpiar mensaje si es válido
    }



       //Validación para Diseño de interfaces web

   let diseñoInterfacesWeb = document.getElementById("idDIW").value;
   let smInterfaces=document.getElementById("smDIW");

   // Verificar que la nota sea entre 1 y 10 y que sea un número
   if (isNaN(diseñoInterfacesWeb) || diseñoInterfacesWeb< 1 || diseñoInterfacesWeb > 10) {
    avanzar = false;
    smInterfaces.textContent = "* La nota tiene que ser un número entre 1 y 10";
    } else {
        smInterfaces.textContent = "";  // Limpiar mensaje si es válido
    }


    //Validación para Empresa

   let empresa = document.getElementById("idEmpresa").value;
   let smEmpresa=document.getElementById("smEmpresa");


   // Verificar que la nota sea entre 1 y 10 y que sea un número
   if (isNaN(empresa) || empresa< 1 || empresa > 10) {
    avanzar = false;
    smEmpresa.textContent = "* La nota tiene que ser un número entre 1 y 10";
    } else {
        smEmpresa.textContent = "";  // Limpiar mensaje si es válido
    }


    return avanzar;




    

   
  
    

   

    
}