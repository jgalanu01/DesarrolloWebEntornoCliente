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
    salto=document.createElement("br");
    cajaPrincipal.appendChild(salto);



    //listado de frutas sin existencias (filter) : 2
    const nombresSinStock = frutas.filter(fruta => fruta.stock === 0).map(fruta => fruta.nombre).sort()
    const frutasSinExistencias = document.createElement("small")
    frutasSinExistencias.textContent = "Frutas sin stock:" + nombresSinStock.join(",")
    cajaPrincipal.appendChild(frutasSinExistencias)
    salto2=document.createElement("br")
    cajaPrincipal.appendChild(salto2);




    //suma total del stock (reduce) :1485
    const sumaTotalStock = frutas.reduce((suma, item) => suma + item.stock, 0);
    const totalStock = document.createElement("small");
    totalStock.textContent = "La suma total del stock es: " + sumaTotalStock;
    cajaPrincipal.appendChild(totalStock)
    salto3=document.createElement("br")
    cajaPrincipal.appendChild(salto3);






    //media de precios (reduce): 3.3 . Primero el total de medio y luego 
    //divides entre frutas.length

    
    const sumaTotal = frutas.reduce((suma, item) => suma + item.precio, 0);
    const media = (sumaTotal / frutas.length)


    const precioMedio = document.createElement("small");
    precioMedio.textContent = "La media de precios es: " + media;
    cajaPrincipal.appendChild(precioMedio);
    salto4=document.createElement("br")
    cajaPrincipal.appendChild(salto4);

    


    //productos cuyo precio está por encima de la media (5)

    const productosPorEncimaMedia = frutas.filter(fruta => fruta.precio > media);
    const productosPorEncima = document.createElement("small");
    productosPorEncima.textContent = "Los productos con precio por encima de la media son: "
     + productosPorEncimaMedia.map(fruta => fruta.nombre).join(", ");
    cajaPrincipal.appendChild(productosPorEncima);
    salto5=document.createElement("br")
    cajaPrincipal.appendChild(salto5);
 


    //productos cuyo stock está por debajo de la media

     // 1. Calcular la media del stock con reduce

    const sumaStock=frutas.reduce((suma,item)=> suma + item.stock,0);
    const mediaStock=(sumaStock/frutas.length)

    const stockMedio=document.createElement("small");
    stockMedio.textContent="La media de stock es:" + mediaStock;
    cajaPrincipal.appendChild(stockMedio);
    salto6=document.createElement("br");
    cajaPrincipal.appendChild(salto6);

      // 2. Filtrar las frutas con stock por debajo de la media (148.5) filter

    const productosDebajoMedia = frutas.filter(fruta => fruta.stock < mediaStock);
    const productosPorDebajo = document.createElement("small");
    productosPorDebajo.textContent =  "Los productos con stock por debajo de la media son: " + 
    productosDebajoMedia.map(fruta => fruta.nombre).join(", ");
    cajaPrincipal.appendChild(productosPorDebajo);
    salto7=document.createElement("br");
    cajaPrincipal.appendChild(salto7);

    
    
   


  


    // nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map

    const frutasMenor5euros=frutas.filter(fruta=>fruta.precio>=5);
    const frutasMenor=document.createElement("small");
    frutasMenor.textContent="Las frutas cuyo precio son igual o mayor de 5 euros son:" 
    +frutasMenor5euros.map(fruta=>fruta.nombre).join(", ");
    cajaPrincipal.appendChild(frutasMenor);


}

