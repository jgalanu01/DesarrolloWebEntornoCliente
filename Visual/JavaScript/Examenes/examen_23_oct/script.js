window.addEventListener("load", inicio);

const url = "coches.json";

fetch(url)
  .then((response) => response.json())
  .then((datos) => datos(coches))
  .catch((error) => alert("Error: " + error));

function datos(coches) {
  // a) Listado de coches verdes, de la marca Volkswagen, que consuman menos de 7 litros
  //que valgan mas de 25.000 euros.

  coches.forEach((item, index) => {
    if (
      item.color == "Green" &&
      item.marca == "Tesla" &&
      item.consumo <= "7" &&
      item.precio <= "25.000"
    ) {
      alert("Listado de coches verdes " + item.modelo);
    }

    //b)Listado de coches que tengan un precio por encima de la media, kms
// por encima de la media y precio por encima de la media.


  });
}
