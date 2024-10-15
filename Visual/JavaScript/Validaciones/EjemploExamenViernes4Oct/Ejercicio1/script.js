let accion = document.getElementById("validar");
accion.onsubmit = function(event) {


   let avanzar = true;

   // Validar usuario
   let usuario = document.getElementById("idUsuario").value;
   let smUsu = document.getElementById("smUsuario");

   if (usuario.length < 4) {
      smUsu.textContent = "* El usuario no puede tener menos de 4 caracteres";
      avanzar = false;
   } else {
      smUsu.textContent = "";
   }

   // Validar correo electrónico
   let correo = document.getElementById("idCorreo").value;
   let smCorreo = document.getElementById("smEmail");

   if (!correo.includes('@')) {
      avanzar = false;
      smCorreo.textContent = "* El email debe contener '@'";
   } else {
      smCorreo.textContent = "";
   }


// Expresión regular para validar la contraseña

let contrasena = document.getElementById("idContrasena").value;
let smContrasena = document.getElementById("smContrasena");

let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\$).+$/;

if (!regexContrasena.test(contrasena)) {
   smContrasena.textContent = "* La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un símbolo de dólar ($)";
   avanzar = false;
} else {
   smContrasena.textContent = "";
}

//Validar repetición de contraseña

let contrasena2=document.getElementById("idRepContrasena").value;
let smContrasena2=document.getElementById("smRepContrasena");



if(contrasena===contrasena2){
   smContrasena2.textContent="";
   console.log("Las contraseñas son iguales");
}
else{
   smContrasena2.textContent="* Las contraseñas no coinciden";
   avanzar = false;
   console.log("Las contraseñas no coinciden");
}




   return avanzar; 
}
