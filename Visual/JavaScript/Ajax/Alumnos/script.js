window.addEventListener("load", inicio);

const url = "getDam1.json";

let arrayTodosAprobados = [];
let arrayNotasMedias = [];
let arrayMismaNotas = [];
let arrayMedia = [];
let NombreNotaAlta = "";
let notaMasAlta = 0;

function inicio() {
  // espacio de desarrollo de funciones de cálculos de cada apartado
  function calcularNotaMedia(alumno) {
    let suma = 0;
    const notas = [
      Number(alumno.nota1),
      Number(alumno.nota2),
      Number(alumno.nota3),
      Number(alumno.nota4),
      Number(alumno.nota5),
      Number(alumno.nota6),
    ];

    notas.forEach((elemento) => {
      suma += elemento;
    });

    return suma / notas.length;
  }

  function apruebaTodo(alumno) {
    let todo = true;
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    notas.forEach((element) => {
      if (Number(element) < 5) todo = false;
    });
    return todo;
  }

  function comprobarTresExamenes(alumno) {
    let tres = false;
    const notas = [
      Number(alumno.nota1),
      Number(alumno.nota2),
      Number(alumno.nota3),
      Number(alumno.nota4),
      Number(alumno.nota5),
      Number(alumno.nota6),
    ];

    let i = 0;

    while (i < notas.length && tres === false) {
      let contIgualdades = 0;

      notas.forEach((element) => {
        if (Number(element) === Number(notas[i])) {
          contIgualdades++;
        }
      });

      if (contIgualdades >= 3) {
        tres = true;
      }
      i++;
    }

    return tres;
  }

  function suspendeAlMenosUnaVez(alumno) {
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    let unSuspenso = false;
    notas.forEach((element) => {
      if (Number(element) < 5) {
        unSuspenso = true;
      }
    });

    return unSuspenso;
  }

  fetch(url)
    .then((response) => response.json())
    .then((datos) => calculos(datos))
    .catch((error) => alert("Error: " + error));

  function calculos(alumno) {
    // a) nombre del alumno con la nota media más alta
    let mejorAlumno = alumno[0];
    let mejorMedia = calcularNotaMedia(mejorAlumno);

    alumno.forEach((item) => {
      // continuación del apartado a) las comparaciones sucesivas
      let media = calcularNotaMedia(item);

      if (media > mejorMedia) {
        mejorMedia = media;
        mejorAlumno = item.alumno;
      }

      // b) alumnos que aprueban todo
      if (apruebaTodo(item)) {
        arrayTodosAprobados.push(item.alumno);
      }

      // c) Alumnos que sacan la misma nota en los 3 exámenes
      if (comprobarTresExamenes(item)) {
        arrayMismaNotas.push(item.alumno);
      }

      // d) Alumnos con nota media por encima de 5 pero suspenden algún examen
      if (calcularNotaMedia(item) >= 5 && suspendeAlMenosUnaVez(item)) {
        arrayMedia.push(item.alumno);
      }
    });

    alert("Mejor alumno: " + mejorAlumno + " - Nota: " + mejorMedia);
    alert("Aprueba todo: " + arrayTodosAprobados.join(", "));
    alert("Alumn@s con 3 notas iguales: " + arrayMismaNotas.join(", "));
    alert(
      "Alumn@s que aprueban con al menos un suspenso: " + arrayMedia.join(", ")
    );
  }
}
