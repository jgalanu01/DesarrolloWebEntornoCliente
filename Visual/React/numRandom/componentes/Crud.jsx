// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Crud() {
    const generarNumeroRandom = () => Math.round(Math.random() * 100);
    const [Vector, setVector] = useState(Array.from({ length: 10 }, generarNumeroRandom));

    // Eliminar un número del vector en la posición indicada
    function eliminar(index) {
        const nuevoVector = Vector.filter((_, i) => i !== index); // Filtramos el elemento en el índice `index`
        setVector(nuevoVector); // Actualizamos el estado con el nuevo array sin el elemento eliminado
    }

    // Modificar un número del vector en la posición indicada
    function modificar(index) {
        const nuevoNumero = prompt('Ingresa el nuevo número:'); // Pedimos un nuevo número al usuario
        if (nuevoNumero !== null && !isNaN(nuevoNumero)) {
            const nuevoVector = [...Vector]; // Creamos una copia del array
            nuevoVector[index] = parseInt(nuevoNumero); // Reemplazamos el valor en el índice indicado
            setVector(nuevoVector); // Actualizamos el estado con el nuevo array modificado
        } else {
            alert('Por favor, ingresa un número válido'); // Validación en caso de que no ingrese un número
        }
    }

    // Agregar un número aleatorio al final del vector
    function agregarNumero() {
        setVector([...Vector, generarNumeroRandom()]);
    }

    // Ordenar el vector de manera ascendente
    function orderASC() {
        const vectorAux = [...Vector].sort((a, b) => a - b);
        setVector(vectorAux);
    }

    // Ordenar el vector de manera descendente
    function orderDESC() {
        const vectorAux = [...Vector].sort((a, b) => b - a);
        setVector(vectorAux);
    }

    return (
        <div className="container">
            <button type="button" onClick={agregarNumero} className="btn btn-outline-primary">Añadir</button>
            <button className="btn btn-danger" onClick={orderASC}>Orden ASC</button>
            <button className="btn btn-warning" onClick={orderDESC}>Orden DESC</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Número</th>
                        <th>Eliminar</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Vector.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item}</td>
                                    <td><button className="btn btn-danger" onClick={() => eliminar(index)}>Eliminar</button></td>
                                    <td><button className="btn btn-warning" onClick={() => modificar(index)}>Modificar</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Crud;
