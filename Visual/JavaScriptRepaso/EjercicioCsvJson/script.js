fetch("paises.csv")
.then(response=>response.text())
.then(datos=>mostrar(datos))


function mostrar(datos){
    const lineas=datos.split("\n");
    const cabecera=lineas[0].split(";");
    console.log(cabecera);

    const tabla=document.createElement("table");
    tabla.border=1;
    document.body.appendChild(tabla);
    const cabeceraTabla=document.createElement("thead");
    tabla.appendChild(cabeceraTabla);

    cabecera.forEach(item=>{
        const nuevoTh=document.createElement("th");
        nuevoTh.textContent=item;
        cabeceraTabla.appendChild(nuevoTh);


        let sumaSuperficieEuropa = 0;
        let contadorEuropa = 0;

        
        lineas.forEach((item,indice)=>{
            if(indice>0){
                const nuevoTr=document.createElement("tr");
                tabla.appendChild(nuevoTr);

                

                const pais=item.split(";");

                if(pais[0]=="Andorra"){
                    nuevoTr.style.backgroundColor="red";

                }

                pais.forEach(item=>{
                    const nuevoTd=document.createElement("td");
                    nuevoTd.textContent=item;
                    nuevoTr.appendChild(nuevoTd);

                   
                })
            }
        })

    })
}