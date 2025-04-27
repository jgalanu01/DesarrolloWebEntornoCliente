fetch("paises.json")
.then(response=>response.json())
.then(datos=>mostrar(datos))


function mostrar(datos){
    console.log(datos);

    const continenteUsuario=prompt("Introduce un continente")

    //Vector de paises del continente pedido

    const vectorContinente=datos.slice();

   const paisesContinente= vectorContinente.filter(item=>item.Continente==continenteUsuario).map(item=>item.Pais);
    console.log(paisesContinente);

     // Media de población de países de América
  const copiaVector = datos.slice();
  const paisesAmerica = copiaVector.filter(c => c.Continente == "América");

  console.log(paisesAmerica);

}