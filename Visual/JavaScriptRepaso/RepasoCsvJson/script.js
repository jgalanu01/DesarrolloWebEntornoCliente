fetch("paises.csv")
.then(response=>response.text())
.then(datos=>mostrar(datos))


function mostrar(datos){
    const lineas=datos.split("\n");
    const cabecera=lineas[0].split(";");
    
    const table=document.createElement("table");
    table.border=1;
    document.body.appendChild(table);
    const cabeceraTabla=document.createElement("thead");
    table.appendChild(cabeceraTabla);

    cabecera.forEach(item=>{
        const th=document.createElement("th");
        th.textContent=item;
        cabeceraTabla.appendChild(th);

    })

    lineas.forEach((item,indice)=>{
        const nuevoTr=document.createElement("tr");
        table.appendChild(nuevoTr);

        if(indice>0){
            const pais=item.split(";");

            pais.forEach(item=>{
                const nuevoTd=document.createElement("td");
                nuevoTd.textContent=item;
                nuevoTr.appendChild(nuevoTd);

                const posicionPais=pais[0];
                const posicionCapital=pais[1];
                const posicionContinente=pais[2];
                const posicionPoblacion=pais[3];
                const posicionSuperficie=pais[4];
            
            
            
                if(posicionContinente=="Asia" && Number(posicionPoblacion)>1){
                nuevoTr.style.backgroundColor="red";
            
                }

            })
        }
    })


 

    



}