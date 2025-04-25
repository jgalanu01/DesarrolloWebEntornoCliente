fetch("paises.csv")
  .then((response) => response.text())
  .then((datos) => mostrar(datos));

function mostrar(datos) {
  const lineas = datos.split("\n");
  const cabecera = lineas[0].split(";");
  const nuevaTabla = document.createElement("table");

  nuevaTabla.border = 1;
  document.body.appendChild(nuevaTabla);
  //Crear la cabecera
  const etiquetaCabecera = document.createElement("thead");
  //construit los 5 encabexamientos(nombre,capital,etc...)
  cabecera.forEach((head) => {
    const nuevoTh = document.createElement("th");
    //por cada vuelta se añade uno nuevo
    nuevoTh.textContent = head;
    etiquetaCabecera.appendChild(nuevoTh);
  });
  nuevaTabla.appendChild(etiquetaCabecera);
  //Al transformar lineas con split se puede ya usar como array y hacer forEach.
  lineas.forEach((item, indice) => {
    //Si el indice es mayor que cero porque lineas[0] es la cabecera y no queremos que salga en la tabla
    if (indice > 0) {
      const tr = document.createElement("tr");
      nuevaTabla.appendChild(tr);
      console.log(item);
      const pais = item.split(";");
      pais.forEach(campo => {
        console.log(campo);
        const td = document.createElement("td");
        td.textContent = campo;
        tr.appendChild(td);

        //condición de población y superficie

        if(Number(pais[3])>10000000 && Number(pais[3])<100000000 && Number(pais[4])>500000 && Number(pais[4])<1000000){
            tr.style.backgroundColor="green";
        }else if(Number(pais[3])>30000000 && Number(pais[4])<500000 && pais[2]=="Europa"){
            tr.style.backgroundColor="yellow";
        }else if(pais[2]=="Asia" || pais[2]=="América"){
            tr.style.backgroundColor="red";
        }

       
      })
    }
  })
}
