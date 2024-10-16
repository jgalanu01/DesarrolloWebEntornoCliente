// URL del fichero JSON
const url = "getImagenes.json";

//contenedor donde se muestran los datos

const ubicacion=document.querySelector("#cajaX");
console.log(ubicacion);


  //Realizar solicitud

fetch(url)
  .then((response) => response.json())
  .then((datos) => mostrar(datos))
  .catch((error) => alert("Error: " + error));

  function mostrar(datos){
    datos.forEach((item) => {
    const tarjeta=document.createElement("div");
    tarjeta.className="card";
    ubicacion.appendChild(tarjeta);

    const foto=document.createElement("img");
    //foto.className="card img";
    foto.setAttribute("src", item.imagen);
    tarjeta.appendChild(foto);

    const lugar=document.createElement("div");
    lugar.className="info";
    lugar.textContent=item.texto;
    tarjeta.appendChild(lugar);

    const contenedor=document.createElement("div");
    contenedor.className="fila";
    contenedor.style.display = "flex";
    tarjeta.appendChild(contenedor);


    const texto=document.createElement("div");
    texto.textContent=item.subtexto;
    texto.style.marginRight="20px";
    contenedor.appendChild(texto);


    
    const boton=document.createElement("button");
    boton.textContent="View";
    boton.style.marginRight="20px";
    boton.style.padding="2px";
    contenedor.appendChild(boton);

    const boton2=document.createElement("button");
    boton2.textContent="Edit";
    boton2.style.marginRight="20px";
    contenedor.appendChild(boton2);

    
    



  

  });

}


