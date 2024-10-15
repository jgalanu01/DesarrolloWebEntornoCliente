

window.onload = function() {
  // Asignar el evento al botón de submit
  let formulario = document.getElementById("cargar");
  formulario.onsubmit = function(event) {
      event.preventDefault(); // Evitar envío del formulario hasta que esté validado
      validarFormulario();
  };
};function validarFormulario() {
  // Obtener los valores de los campos
  let ciclo = document.querySelector("input[name=radio]:checked"); // Ciclo seleccionado
  let modulos = document.querySelectorAll("input[name='modulos[]']:checked"); // Módulos seleccionados
  let nombre = document.getElementById("nombre").value.trim(); // Nombre
  let curso = document.getElementById("selectCurso").value; // Curso seleccionado
  let horas = document.getElementById("exampleFormControlSelect2").selectedOptions; // Horas seleccionadas
  let comentario = document.getElementById("exampleFormControlTextarea1").value.trim(); // Comentario

  // Variables para mostrar mensajes de error
  let smCiclo = document.getElementById("smCiclo");
  let smModulos = document.getElementById("smModulos");
  let smNombre = document.getElementById("smNombre");
  let smCurso = document.getElementById("smCurso");
  let smHoras = document.getElementById("smHoras");

  // Limpiar mensajes de error previos
  smCiclo.innerHTML = "";
  smModulos.innerHTML = "";
  smNombre.innerHTML = "";
  smCurso.innerHTML = "";
  smHoras.innerHTML = "";

  // Variable para controlar si hay errores
  let hayErrores = false;

  // Validar nombre
  if (nombre === "") {
      smNombre.innerHTML = "* Campo Obligatorio";
      hayErrores = true;
  }

  // Validar ciclo seleccionado
  if (!ciclo) {
      smCiclo.innerHTML = "* Campo Obligatorio";
      hayErrores = true;
  }

  // Validar que al menos un módulo esté seleccionado
  if (modulos.length === 0) {
      smModulos.innerHTML = "* Debes seleccionar al menos un módulo";
      hayErrores = true;
  }

  // Validar curso seleccionado
  if (curso === "") {
      smCurso.innerHTML = "* Campo Obligatorio";
      hayErrores = true;
  }

  // Validar que al menos una hora esté seleccionada
  if (horas.length === 0) {
      smHoras.innerHTML = "* Debes seleccionar al menos una hora";
      hayErrores = true;
  }

  // Si hay errores, no continuar
  if (hayErrores) {
      return false;
  }

  // Obtener los módulos seleccionados usando un bucle `for`
  let modulosSeleccionados = [];
  for (let i = 0; i < modulos.length; i++) {
      modulosSeleccionados.push(modulos[i].value);
  }

  // Obtener las horas asistidas usando un bucle `for`
  let horasSeleccionadas = [];
  for (let i = 0; i < horas.length; i++) {
      horasSeleccionadas.push(horas[i].value);
  }

  // Crear el mensaje para mostrar en el alert
  let mensaje =
      "Ciclo: " + ciclo.value +
      "\nMódulos: " + modulosSeleccionados +
      "\nNombre: " + nombre +
      "\nCurso: " + curso +
      "\nHoras asistidas: " + horasSeleccionadas +
      "\nComentario: " + comentario;

  // Mostrar los datos en un alert
  alert(mensaje);

  return true; // Si todo está validado correctamente
}
