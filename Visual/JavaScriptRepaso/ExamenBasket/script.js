fetch("basket.csv")
.then(response=>response.text())
.then(datos=>mostrar(datos))

function mostrar(datos){
    const lineas=datos.split("\n");
    const cabecera=lineas[0].split(",");
    //Crear tabla y cabecera
    const tabla=document.createElement("table");
    tabla.border=1;
    document.body.appendChild(tabla);

    cabeceraTabla=document.createElement("thead");
    tabla.appendChild(cabeceraTabla);


    cabecera.forEach(item=>{
        const th=document.createElement("th");
        th.textContent=item;
        cabeceraTabla.appendChild(th);

    })

    let jugadorMasPuntos=0;
    let jugadorMasRebotes=0;
    let puntosTotales=0;
    let rebotesTotales=0;

    lineas.forEach((item,indice)=>{
        if(indice>0){
            const nuevoTr=document.createElement("tr");
            tabla.appendChild(nuevoTr);

            const puntos=item.split(",");
            console.log(puntos);



            puntosTotales+=Number(puntos[2])+Number(puntos[3])*2+Number(puntos[4])*3;
            rebotesTotales+=Number(puntos[6])+Number(puntos[7]);
            

            


            puntos.forEach((item,indice)=>{
                
               
                const nuevoTd=document.createElement("td");
                nuevoTd.textContent=item;
                nuevoTr.appendChild(nuevoTd);

                


            })
        }
    })

    const primerH3=document.createElement("h3");
    primerH3.textContent="Puntos totales del equipo: "+puntosTotales;
    document.body.appendChild(primerH3);


    const segundoH3=document.createElement("h3");
    segundoH3.textContent="Rebotes totales del equipo: "+rebotesTotales;
    document.body.appendChild(segundoH3);

    

    
}