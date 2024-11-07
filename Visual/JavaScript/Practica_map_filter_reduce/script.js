document.addEventListener('DOMContentLoaded', inicio);


function inicio() {






    const cajaPrincipal = document.querySelector(".container");



    const frutas = [
        { nombre: 'patatas', precio: 3, stock: 500 },
        { nombre: 'manzanas', precio: 2, stock: 200 },
        { nombre: 'peras', precio: 1, stock: 100 },
        { nombre: 'plátanos', precio: 1.5, stock: 0 },
        { nombre: 'uvas', precio: 4, stock: 150 },
        { nombre: 'naranjas', precio: 2.5, stock: 250 },
        { nombre: 'piñas', precio: 5, stock: 0 },
        { nombre: 'kiwis', precio: 3.5, stock: 120 },
        { nombre: 'fresas', precio: 6, stock: 90 },
        { nombre: 'mangos', precio: 4.5, stock: 75 }
    ];


    //solo el listado de los nombres (map): 10



    const nombreFruta = document.createElement("small");
    const nombres = frutas.map(fruta => fruta.nombre)
    nombreFruta.textContent = "Listado de nombres de fruta: " + nombres.join(",")
    cajaPrincipal.appendChild(nombreFruta);



    //listado de frutas sin existencias (filter) : 2
    const nombresSinStock = frutas.filter(fruta => fruta.stock === 0).map(fruta => fruta.nombre).sort()
    const frutasSinExistencias = document.createElement("small")
    frutasSinExistencias.textContent = "Frutas sin stock:" + nombresSinStock.join(",")
    cajaPrincipal.appendChild(frutasSinExistencias)




    //suma total del stock (reduce) :1485






    //media de precios (recduce): 3.3 . Primero el total de medio y luego 
    //divides entre frutas.length


    //productos cuyo precio está por encima de la media (5)
    // 1. Calcular la media de precios con reduce


    // 2. Filtrar los productos que están por encima de la media 


    //productos cuyo stock está por debajo de la media
    // 1. Calcular la media del stock con reduce


    // 2. Filtrar las frutas con stock por debajo de la media (148.5) filter


    // nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map


}

