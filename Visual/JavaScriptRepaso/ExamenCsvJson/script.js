fetch("paises.csv")
  .then((response) => response.text())
  .then((data) => mostrar(data));

function mostrar(datos) {
  const linea = datos.split("\n");

  const tabla = document.createElement("table");
  tabla.border = 1;
  document.body.appendChild(tabla);

  // CABECERA
  const cabecera = document.createElement("thead");
  const filaCabecera = document.createElement("tr");
  const campos = linea[0].split(";");

  campos.forEach(campo => {
    const celdaTitulo = document.createElement("th");
    celdaTitulo.textContent = campo;
    filaCabecera.appendChild(celdaTitulo);
  });

  cabecera.appendChild(filaCabecera);
  tabla.appendChild(cabecera);

  // CUERPO
  const cuerpo = document.createElement("tbody");

  let sumaSuperficieEuropa = 0;
  let cantidadEuropa = 0;

  for (let i = 1; i < linea.length; i++) {
    const filaDatos = linea[i].split(";");

    if (filaDatos.length < 5) continue;

    const tr = document.createElement("tr");

    const poblacion = parseInt(filaDatos[3]);
    const superficie = parseInt(filaDatos[4]);
    const continente = filaDatos[2].trim();

    // Contabilizar países europeos
    if (continente === "Europa") {
      sumaSuperficieEuropa += superficie;
      cantidadEuropa++;
    }

    // Colores y condiciones
    if (
      poblacion >= 1000000 && poblacion <= 10000000 &&
      superficie >= 1000000 && superficie <= 5000000
    ) {
      tr.style.backgroundColor = "green";
    } else if (poblacion > 30000000 && superficie < 500000) {
      tr.style.backgroundColor = "yellow";
    } else if (continente === "Asia" || continente === "América") {
      tr.style.color = "red";
    } else {
      tr.style.display = "none";
    }

    filaDatos.forEach(dato => {
      const td = document.createElement("td");
      td.textContent = dato;
      tr.appendChild(td);
    });

    cuerpo.appendChild(tr);
  }

  tabla.appendChild(cuerpo);

  // Mostrar media de superficie de países europeos
  if (cantidadEuropa > 0) {
    const media = sumaSuperficieEuropa / cantidadEuropa;
    const texto = document.createElement("p");
    texto.textContent = `Media de la superficie de los países europeos: ${media.toFixed(2)} km²`;
    texto.style.fontWeight = "bold";
    document.body.appendChild(texto);
  }
}
