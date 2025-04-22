fetch("empleados.csv")
  .then((res) => res.text())
  .then((data) => {
    mostrar(data);
    filtrosDesdeCSV(data);
  });

function mostrar(data) {
  const tabla = document.createElement("table");
  tabla.border = "1px solid red";
  document.body.appendChild(tabla);
  let filas = data.split("\n");
  let cabecera = filas[0];
  let elementosCabecera = cabecera.split(",");
  const filaCabecera = document.createElement("thead");
  tabla.appendChild(filaCabecera);

  elementosCabecera.forEach((item) => {
    const th = document.createElement("th");
    th.textContent = item;
    filaCabecera.appendChild(th);
  });

  const cuerpoTabla = document.createElement("tbody");
  tabla.appendChild(cuerpoTabla);
  filas.forEach((item, indice) => {
    if (indice > 0) {
      const tr = document.createElement("tr");
      cuerpoTabla.appendChild(tr);
      let elementosFila = item.split(",");

      elementosFila.forEach((miniItem) => {
        const td = document.createElement("td");
        td.textContent = miniItem;
        tr.appendChild(td);
      });
    }
  });
}

function filtrosDesdeCSV(data) {
  const filas = data.trim().split("\n");
  const cuerpo = filas.slice(1).map((f) => f.trim().split(","));

  // Empleado con mayor edad
  let filaMayor = cuerpo[0];
  cuerpo.forEach((fila) => {
    if (parseInt(fila[1]) > parseInt(filaMayor[1])) {
      filaMayor = fila;
    }
  });
  console.log("Empleado con mayor edad:", filaMayor[0]);

  // Empleado con menor edad
  let filaMenor = cuerpo[0];
  cuerpo.forEach((fila) => {
    if (parseInt(fila[1]) < parseInt(filaMenor[1])) {
      filaMenor = fila;
    }
  });
  console.log("Empleado con menor edad:", filaMenor[0]);

  // Empleados del departamento Finanzas
  const delFinanzas = cuerpo.filter((fila) => fila[4].trim() === "Finanzas");
  console.log("Empleados del departamento Finanzas:");
  delFinanzas.forEach((f) => {
    console.log(f[0]);
  });
}
