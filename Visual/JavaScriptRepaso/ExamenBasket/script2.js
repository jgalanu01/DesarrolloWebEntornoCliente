fetch("daw.json")
.then(respuesta=>respuesta.json())
.then(datos=>mostrar(datos))

function mostrar(datos){
    console.log(datos);

    const vectorLucia=datos.slice().filter(item=>item.nombre="Lucía García").map(item=>item.ProyectoDAW);
    console.log(vectorLucia);

    const vectorDaniel=datos.slice().filter(item=>item.nombre="Daniel López").map(item=>item.ProyectoDAW);
    console.log(vectorDaniel);

    
    
    

    
    

  

   

  
}