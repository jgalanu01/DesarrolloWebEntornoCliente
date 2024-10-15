let accion = document.getElementById("validar");
accion.onsubmit = function(event) {

   

    let avanzar = true;

    // Obtener los valores de los campos
    let nombre = document.getElementById("idNombre").value.trim();
    let smNom = document.getElementById("smNombre");
    let cicloSeleccionado = document.querySelector('input[name="ciclo"]:checked'); // Verificar si se ha seleccionado un ciclo
    //let cicloSeleccionado = document.querySelector('input[type="radio"]:checked');
    let smCiclo = document.getElementById("smCiclo");
    let curso = document.getElementById("curso").value;
    let smCurso = document.getElementById("smCurso");
    let modulosSeleccionados = document.querySelectorAll('.Modulos input[type="checkbox"]:checked');
    //si los modulos vienen en un contenedor con id sería asi:
    //let modulosSeleccionados = document.querySelectorAll('#modulosContainer input[type="checkbox"]:checked'); seleccionandolos por el name

    //solo por el tipo checkbox: let modulosSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');

    
    let smModulos = document.getElementById("smModulos");

    // Limpiar mensajes de error al iniciar
    smNom.textContent = "";
    smCiclo.textContent = "";
    smCurso.textContent = "";
    smModulos.textContent = "";

    // Validar que el nombre no esté vacío y tenga al menos 3 caracteres
    if (nombre.length < 3) {
        avanzar = false;
        smNom.textContent = "* El nombre debe tener al menos 3 caracteres";
    }

    for (let i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre[i]) && nombre[i] !== " ") {  // Verificar si el carácter es un número
            avanzar = false;
            smNom.textContent = "* El nombre no debe contener números";
        }
    }

    // Validar que se haya seleccionado un ciclo
    if (!cicloSeleccionado) {
        avanzar = false;
        smCiclo.textContent = "* Campo Obligatorio";
    }

    // Validar que se haya seleccionado al menos un módulo
    if (modulosSeleccionados.length === 0) {
        avanzar = false;
        smModulos.textContent = "* Campo obligatorio";
    }

    // Validar que se haya seleccionado un curso
    if (curso === "") {
        avanzar = false;
        smCurso.textContent = "* Campo obligatorio";
    }

    // Obtener el texto de ciclo seleccionado y módulos seleccionados
    let cicloText = cicloSeleccionado ? cicloSeleccionado.value : "No seleccionado";
    let modulosText = Array.from(modulosSeleccionados).map(modulo => modulo.value).join(", ");

    // Mostrar el alert con las opciones seleccionadas
    window.alert(
        "Nombre: " + nombre +
        "\nCiclo: " + cicloText +
        "\nCurso: " + curso +
        "\nMódulos seleccionados: " + (modulosText ? modulosText : "Ninguno")
    );

    return avanzar;
}
