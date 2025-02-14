/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Listado3({ coches }) {
  let cocheMasCaro=coches[0];

  coches.forEach(coche=>{
    if(coche.precio>cocheMasCaro.precio){
      cocheMasCaro=coche;
    }
  })

  return (
    <div>
      <p>Coche más caro: {cocheMasCaro.modelo} - {cocheMasCaro.marca} - {cocheMasCaro.precio}</p>
    </div>
  )

 
}
