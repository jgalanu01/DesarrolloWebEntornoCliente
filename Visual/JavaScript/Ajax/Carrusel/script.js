window.addEventListener("load", function () {
    let url = "getTodoPersonal.json";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(datos) {
        mostrarDatos(datos);
      })
      .catch(function(error) {
        alert("error: " + error);
      });
  });
  
  function mostrarDatos(datos) {
    const carruselContenedor = document.querySelector(".carousel-inner");
    const listaIndicadores = document.querySelector(".carousel-indicators");
  
    // Limpiar cualquier contenido previo para evitar duplicados
    carruselContenedor.innerHTML = "";
    listaIndicadores.innerHTML = "";
  
    datos.forEach(function(persona, indice) {
      // Crear el indicador
      const indicador = document.createElement("li");
      indicador.setAttribute("data-target", "#carouselId");
      indicador.setAttribute("data-slide-to", indice);
      if (indice === 0) indicador.classList.add("active");
      listaIndicadores.appendChild(indicador);
  
      // Crear el elemento de carrusel
      const elementoCarrusel = document.createElement("div");
      elementoCarrusel.classList.add("carousel-item");
      if (indice === 0) elementoCarrusel.classList.add("active");
  
      const imagen = document.createElement("img");
      imagen.setAttribute("src",persona.imagen);
      imagen.classList.add("d-block");
      imagen.style.width = "50%"; // Ajusta el tamaño al 50%
      imagen.style.margin = "0 auto"; // Centra la imagen
  
      const pieDeFoto = document.createElement("div");
      pieDeFoto.classList.add("carousel-caption", "d-none", "d-md-block");
  
      const titulo = document.createElement("h3");
      titulo.textContent = persona.nombre;
  
      const descripcion = document.createElement("p");
      descripcion.textContent = persona.cargo + ", " + persona.edad + " años";

      carruselContenedor.appendChild(elementoCarrusel);

      elementoCarrusel.appendChild(imagen);
      elementoCarrusel.appendChild(pieDeFoto);
  
      pieDeFoto.appendChild(titulo);
      pieDeFoto.appendChild(descripcion);
    
  
    
    });
  }
  