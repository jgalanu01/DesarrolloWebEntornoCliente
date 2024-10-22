window.addEventListener("load", inicio);

const urlPlatos = "getPlatos.php.json";
const urlCocineros = "getCocinero.php.json";

function inicio() {
  numerosAlea();
  menu();

  /*function menu() {
    // Cambiar "Home" por "Inicio"
    const linkHome = document.querySelector('a[href="#hero"]');
    linkHome.textContent = "Inicio";
  
    // Cambiar "About" por "Nosotros"
    const linkAbout = document.querySelector('a[href="#about"]');
    linkAbout.textContent = "Nosotros";
  
    // Cambiar "Menu" por "Carta"
    const linkMenu = document.querySelector('a[href="#menu"]');
    linkMenu.textContent = "Carta";
  
    // Cambiar "Events" por "Eventos"
    const linkEvents = document.querySelector('a[href="#events"]');
    linkEvents.textContent = "Eventos";
  
    // Cambiar "Chefs" por "Cocineros"
    const linkChefs = document.querySelector('a[href="#chefs"]');
    linkChefs.textContent = "Cocineros";
  
    // Cambiar "Gallery" por "Galería"
    const linkGallery = document.querySelector('a[href="#gallery"]');
    linkGallery.textContent = "Galería";
  
    // Cambiar "Contact" por "Contacto"
    const linkContact = document.querySelector('a[href="#contact"]');
    linkContact.textContent = "Contacto";
  }
    */

  function menu() {
    // Array con las traducciones en español
    const traducciones = ["Inicio", "Nosotros", "Carta", "Eventos", "Cocineros", "Galería", "Contacto"];
    
    // Seleccionamos los enlaces del menú (los elementos <a> dentro de la navbar)
    const enlacesMenu = document.querySelectorAll(".navbar a");
  
    // Recorrer los enlaces del menú y asignar las traducciones
    enlacesMenu.forEach((enlace, index) => {
      if (index < traducciones.length) {  // Para evitar sobrepasar el tamaño del array
        enlace.textContent = traducciones[index];
      }
    });
  }

  fetch(urlCocineros)
    .then((response) => response.json())
    .then((datos) => mostrarCocineros(datos))
    .catch((error) => alert("error: " + error));

  function mostrarCocineros(datos) {
    console.log(datos);

    const tarjetasChef = document.querySelectorAll(".chef-member");

    datos.forEach((chef, index) => {
      if (index < tarjetasChef.length) {
        const imagenX = tarjetasChef[index].querySelector("img");
        imagenX.setAttribute("src", chef.imagen);

        const nombre = tarjetasChef[index].querySelector(".member-info h4");
        nombre.textContent = chef.nombre;

        const funcion = tarjetasChef[index].querySelector(".member-info span");
        funcion.textContent = chef.funcion;

        const descripcion = tarjetasChef[index].querySelector(".member-info p");
        descripcion.textContent = chef.descripcion;
      }
    });
  }

  fetch(urlPlatos)
    .then((response) => response.json())
    .then((datos) => mostrarPlatos(datos))
    .catch((error) => alert("error: " + error));

  function mostrarPlatos(datos) {
    console.log(datos);
    const tarjetasPlato = document.querySelectorAll(".menu-item");

    datos.forEach((plato, index) => {
      if (index < tarjetasPlato.length) {
        const imagenX = tarjetasPlato[index].querySelector("img");
        imagenX.setAttribute("src", plato.imagen);

        const nombre = tarjetasPlato[index].querySelector("h4");
        nombre.textContent = plato.nombre;

        const ingredientes = tarjetasPlato[index].querySelector(".ingredients");
        ingredientes.textContent = plato.ingredientes;

        const precio = tarjetasPlato[index].querySelector(".price");
        precio.textContent = "$ " + plato.precio;
      }
    });
  }
}

function numerosAlea() {
  const contadores = document.querySelectorAll(".purecounter");
  const parrafos = document.querySelectorAll(".stats-item p");

  contadores[0].setAttribute(
    "data-purecounter-end",
    Math.floor(Math.random() * 2001) //Genera un número entre 0 y 2000
  );
  contadores[1].setAttribute(
    "data-purecounter-end",
    Math.floor(Math.random() * 501)
  );
  contadores[2].setAttribute(
    "data-purecounter-end",
    Math.floor(Math.random() * 2001)
  );
  contadores[3].setAttribute(
    "data-purecounter-end",
    Math.floor(Math.random() * 201)
  );

  parrafos[0].textContent = "Clientes";
  parrafos[1].textContent = "Projectos";
  parrafos[2].textContent = "Horas de Soporte";
  parrafos[3].textContent = "Trabajadores";
}
