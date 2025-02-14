/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Listado1({ coches }) {
  return (
    <div>
      <p>Listado 1</p>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Color</th>
            <th>Consumo</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {coches.filter((item) => item.color === 'Green' && item.precio>10000).sort((a,b)=>a.precio>b.precio)
            .map((item, index) => (
              
              <tr key={index}>
                <td>{item.marca}</td>
                <td>{item.modelo}</td>
                <td>{item.color}</td>
                <td>{item.consumo}</td>
                <td>{item.precio} €</td>
              </tr>
              
            ))}
        </tbody>
      </table>
    </div>
  );
}
