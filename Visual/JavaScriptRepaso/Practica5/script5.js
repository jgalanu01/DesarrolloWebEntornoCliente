window.onload = inicio;

function inicio() {
  //1. Crear el contenedor principal, se añade al body

  const contenedorP = document.createElement("div");
  contenedorP.style.background = "lightblue";
  contenedorP.style.width = "1000px";
  contenedorP.style.height = "800px";

  document.body.appendChild(contenedorP);

  //2. Crear un parrafo y añadirlo al contenedor

  const parrafo = document.createElement("p");
  parrafo.textContent = "Hola Mundo creado dinámicamente con JavaScript";
  contenedorP.appendChild(parrafo);

  //3. Crear un botón, llamar evento y mostrar un alert

  const boton1 = document.createElement("button");
  boton1.textContent = "Pulsar botón";

  boton1.addEventListener("click", function () {
    alert("Entro en evento");
    parrafo.textContent += " Botón pulsado";
  });
  contenedorP.appendChild(boton1);

  //4.Contenedor dentro del principal, con estilos

  const contenedor2 = document.createElement("div");
  contenedor2.textContent = "Contenedor con estilos";
  contenedor2.style.backgroundColor = "lightcoral";
  contenedor2.style.width = "200px";
  contenedor2.style.height = "200px";
  contenedor2.style.display = "flex";
  contenedor2.style.alignItems = "center";
  contenedor2.style.justifyContent = "center";
  contenedorP.appendChild(contenedor2);

  //5. Listado de items en un array

  const listadoItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const lista_ul = document.createElement("ul");

  //definir la lista

  listadoItems.forEach((item, indice) => {
    //Crear cada elemento de la lista

    const elemento_li = document.createElement("li");

    //contenido de cada item de la lista(li dentro de ul)
    elemento_li.textContent = item;

    //incorporar al contenedor de la lista
    lista_ul.appendChild(elemento_li);
  });
  //Añadir la lista al contenedor principal
  contenedorP.appendChild(lista_ul);

  //6. Imagen random con enlace

  let jpgAleatorio = Math.floor(Math.random() * 100);
  const imagen = document.createElement("img");

  imagen.src = "http://randomuser.me/portraits/men/" + jpgAleatorio + ".jpg"; //Hacemos random el numero
  //Al pasar el raton por la imagen aparece otra imagen
  imagen.addEventListener("mouseover", function () {
    jpgAleatorio = Math.floor(Math.random() * 100);
    jpgGenero = Math.floor(Math.random() * 2);

    if (jpgGenero == 0) {
      imagen.src =
        "http://randomuser.me/portraits/men/" + jpgAleatorio + ".jpg";
    }
    if (jpgGenero == 1) {
      imagen.src =
        "http://randomuser.me/portraits/women/" + jpgAleatorio + ".jpg";
    }
  });

  //Añadir al contenedor
  contenedorP.appendChild(imagen);

  //7.Tabla dinámica

  const tabla = document.createElement("table");
  tabla.border = 1;
  let nFilas = parseInt(prompt("Ingrese la cantidad de filas"));
  let nColumnas = parseInt(prompt("Ingrese la cantidad de columnas"));
  let contador = 0;

  for (let f = 0; f < nFilas; f++) {
    //Crear fila
    const nuevaFila = document.createElement("tr");
    tabla.appendChild(nuevaFila);
    for (let c = 0; c < nColumnas; c++) {
      //Crear celdas
      const nuevaCelda = document.createElement("td");
      tabla.appendChild(nuevaCelda);
      //Enumeración total del numero de celdas
      contador++;
      nuevaCelda.textContent = contador;
    }
  }

  contenedorP.appendChild(tabla);

  //8.formulario
  const formulario = document.createElement("form");
  const texto = document.createElement("input");
  const boton = document.createElement("button");

  //diseño y acciones
  texto.type = "text";
  texto.placeholder = "Ingrese tu nombre";
  boton.type = "submit";
  boton.textContent = "Enviar";

  boton.addEventListener("click", function () {
    alert("Tu nombre es: " + texto.value);
  });

  //añadir a contenedores
  formulario.appendChild(texto);
  formulario.appendChild(boton);
  contenedorP.appendChild(formulario);


  //9. Crear dinamicamente una lista

  const elementoLI=document.createElement("input");
  const botonAniadirLi=document.createElement("button");
  const nuevaLista=document.createElement("ul");
  botonAniadirLi.textContent="Añadir Tarea";
  
  botonAniadirLi.addEventListener("click",function(){
    const nuevoLi= document.createElement("li");
    nuevoLi.textContent=elementoLI.value;
    nuevaLista.appendChild(nuevoLi);
    elementoLI.value="";
    
  })

  contenedorP.appendChild(elementoLI);
  contenedorP.appendChild(botonAniadirLi);
  contenedorP.appendChild(nuevaLista);
}
