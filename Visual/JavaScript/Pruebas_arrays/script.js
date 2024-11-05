


//PUSH Y POP

const alumnos =
    [{ nombre: 'Lola', nota: 9 }, { nombre: 'Lolo', nota: 5 }]

alumnos.push(
    { nombre: 'Petra', nota: 10 },
    { nombre: 'Paco', nota: 5 }
)
console.log("vector completo: ", alumnos)
console.log("longitud ", alumnos.length);

let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("vector completo:", vector1)
console.log("longitud vector completo:", vector1).length
let ultimoElemento = vector1.pop()
console.log("elemento borrado", ultimoElemento)
console.log("vector actualizado", vector1);
console.log("longitud del vector actualizado", vector1.length)


//UNSHIFT

const arboles = [{ nombre: 'encina', altura: 10 }, { nombre: 'chopo', altura: 30 }]
console.log(arboles)

//unshift añade alcornoque al principio del array, push lo hace al final
arboles.unshift({ nombre: 'alcornoque', altura: 20 });
let vector2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//shift elimina el primer elemento del array, el pop lo hace en el del final 
vector2.shift();
console.log("vector sin primer elemento: ", vector2);


//CONCAT

const vectorA = [1, 2, 3]
const vectorB = [4, 5, 6]
const vectorC = [7, 8, 9]
let numero = 1;
const vectorFinal = vectorA.concat(vectorB, vectorC, numero);
console.log("Máximo: ", Math.max(...vectorFinal));
console.log("Mínimo: ", Math.min(...vectorFinal))


//7. slice(inicio, fin) : devuelve una subcadena desde la posición de inicio hasta fin(no se incluye y éste es opcional), 
//Si solo aparece inicio se entiende que es hasta el final.
const vectorUno = [1, 2, 3, 4, 5]
const vectorDos = vectorUno.slice(0, 3)
console.log("vectorDos:", vectorDos)
console.log("vectorUno:", vectorUno)
const vector3 = vectorUno.slice(3, 5)
console.log("vector3:", vector3)

//const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const v1=vector.slice() esto es una copia exacta del vector


//8.splice(inicio, cantidadBorrar...): elimina y añade elementos a un vector.
const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

vector.splice(0, 1, 14) //sustituye el primer elemento por el valor 14. A partir de la posicion cero 
//cero en la segunda posición añade lo que está a la derecha a partir de la posición de la izquierda(5)

console.log(vector)

//9.fill(valor,comienzo,fin) El método fill rellena el array con el valor que se pasa como parámetro, 
//sustituyendo los valores actuales del vector.
const otroVector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
otroVector.fill(10)
otroVector.fill(10, 5) //A partir de la posición 5 todos se ponen a 10 


//10. join (separador) método join retorna un string con todos 
//los elementos del vector separados por el separador que se pasa como parámetro.
//Podemos pasar como separador un ";" y luego nos retorna un string con el contenido de cada componente 
//separado por dicho separador:
const vectorNombres = ['petra', 'pili', 'manuel']
const cadena = vectorNombres.join('-')

//12. sort() : Ordena el contenido del vector.

const numeros = [10, 8, 4, 9, 2, 1, 4];
numeros.sort((a, b) => a - b) //Para que ordene correctamente
console.log(numeros)
console.log(vector.sort().reverse()) //Ordena al reves

const letras = ['w', 'c', 'f', 'b', 'a']
console.log(letras.sort())
console.log(letras.sort(), reverse())


//se puede ordenar por un atributo si se trata de un vector de objetos

const fruta =
    [{ nombre: 'naranja', precio: 4, stock: 6300 },
    { nombre: 'manzanas', precio: 2, stock: 2000 },
    { nombre: 'kiwi', precio: 3, stock: 4500 }]


const listadoPorPrecio = fruta.sort((a, b) => a.precio - b.precio)
console.log(listadoPorPrecio);

const listadoPorPrecioReves = listadoPorPrecio.slice(); //Le hago una copia para que muestre la reversa en console.log
console.log(listadoPorPrecioReves.reverse());

const listadoPorStock = fruta.sort((a, b) => a.stock - b.stock)
console.log(listadoPorStock);
