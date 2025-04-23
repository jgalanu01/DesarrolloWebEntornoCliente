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



//si quisiera hacer una copia exacta seria:

const vectorAux=frutas.slice();
console.log(vectorAux);

//solo el listado de los nombres (map): 10

const soloNombres=frutas.map(fruta=>fruta.nombre); //map es una función que busca un campo concreto
console.log(soloNombres);
//ordenarlas por nombre(sort)
const ordenar=vectorAux.sort((a,b)=>a.nombre.localeCompare(b.nombre));
//ordenarlas por precio(sort)
const ordenar2=vectorAux.sort((a,b)=>a.precio-b.precio);
console.log(ordenar);
console.log(ordenar2);

//every va a determinar si todos los elementos cumplen con una condición, en este caso si todos tienen stock > 0
const todosTienenStock=vectorAux.every(fruta=>fruta.stock>0);
console.log(todosTienenStock);

//buscar dentro del array:find
let nombreFrutaBuscar=prompt("Teclear el nombre de la fruta");
let aparicion=vectorAux.find(fruta=>fruta.nombre.toLocaleUpperCase()===nombreFrutaBuscar.toLocaleUpperCase());

if(aparicion===undefined){
    console.log("No se encontró la fruta");

}else{
    console.log("si está "+nombreFrutaBuscar);
}

//Añadir una nueva fruta
let nombreF=prompt("Nombre de la nueva fruta");
let precioF=prompt("Precio de la nueva fruta");
let stockF=prompt("Stock de la nueva fruta"); 

vectorAux.push({nombre:nombreF,precio:Number(precioF),stock:Number(stockF)});
console.log(vectorAux);



//listado de frutas sin existencias (filter) : 2

const frutasSinExistencias=frutas.filter(fruta=>fruta.stock==0);
console.log(frutasSinExistencias);


//suma total del stock (reduce) :1485
const totalStock=frutas.reduce((acumulado,fruta)=>acumulado+fruta.stock,0);
console.log(totalStock);

const mediaStock=totalStock/frutas.length;
console.log("Media stock",mediaStock.toFixed(2));

//media de precios (reduce): 3.3 . Primero el total de medio y luego 
//divides entre frutas.length

const totalPrecios=frutas.reduce((acumulado,fruta)=>acumulado+fruta.precio,0);
const mediaPrecios=totalPrecios/frutas.length;
console.log("Media precio",mediaPrecios.toFixed(2));





//productos cuyo precio está por encima de la media (5)
const frutaPorEncima=frutas.filter(fruta=>fruta.precio>mediaPrecios);
console.log(frutaPorEncima);


//productos cuyo stock está por debajo de la media
const stockPorDebajo=frutas.filter(fruta=>fruta.stock<mediaStock);
console.log(stockPorDebajo);

// nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map
const frutasCaras=frutas.filter(fruta=>fruta.precio>=5).map(fruta=>fruta.nombre);
console.log(frutasCaras);

//Nombre de la fruta con mas stock (patatas)


//Fruta con stock entre 100 y 150 unidades y precio entre 4-6 euros
const frutaX=frutas.filter(fruta=>fruta.precio>=4).filter(fruta=>fruta.precio<=6).
filter(fruta=>fruta.stock>=100).filter(fruta=>fruta.stock<=150).map(fruta=>fruta.nombre);
console.log(frutaX);

//Fruta mas cara

let frutaMasCara=frutas[0];
frutas.forEach((item,indice)=>{
    if(item.precio>frutaMasCara.precio){
        frutaMasCara=item;
    }

})

console.log("La fruta mas cara es: "+frutaMasCara);



