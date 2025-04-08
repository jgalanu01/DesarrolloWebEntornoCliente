fetch('meteo.json')
.then(response => response.json())
.then(contenido=>mostrar(contenido));

function mostrar(contenido){
    const tabla=document.createElement("table");
    tabla.border=1;
    document.body.appendChild(tabla);
    const cabecera=document.createElement("thead");
    tabla.appendChild(cabecera);
    //encabezamiento1
    const cabecera1=document.createElement("td");
    cabecera1.textContent="Ciudad";
    cabecera.appendChild(cabecera1);
    //encabezamiento2
    const cabecera2=document.createElement("td");
    cabecera2.textContent="Lluvia";
    cabecera.appendChild(cabecera2);
    //encabezamiento3
    const cabecera3=document.createElement("td");
    cabecera3.textContent="Temp Max";
    cabecera.appendChild(cabecera3);
    //encabezamiento4
    const cabecera4=document.createElement("td");
    cabecera4.textContent="Temp MIN";
    cabecera.appendChild(cabecera4);

    let totalLluvia=0;
    let totalTempMax=0;
    let totalTempMin=0;
    let ciudadMaxLluvia=contenido [0];
    let ciudadMaxTempMax=contenido [0];
    let ciudadMinTemp=contenido [0];


    contenido.forEach((item,indice)=>{
        const nuevaFila=document.createElement("tr");
        tabla.appendChild(nuevaFila);
        //Columna nombre
        const nuevoNombre=document.createElement("td");
        nuevoNombre.textContent=item.nombreCiudad;
        nuevaFila.appendChild(nuevoNombre);
        //Columna lluvia
        const nuevaLluvia=document.createElement("td");
        nuevaLluvia.textContent=item.litrosLluvia;
        nuevaFila.appendChild(nuevaLluvia);
        //Columna temperatura max
        const nuevaTempMax=document.createElement("td");
        nuevaTempMax.textContent=item.temperaturaMax;
        nuevaFila.appendChild(nuevaTempMax);
        //Columna temperatura min
        const nuevaTempMin=document.createElement("td");
        nuevaTempMin.textContent=item.temperaturaMin;
        nuevaFila.appendChild(nuevaTempMin);
        //Calcular media de parametros: lluvia temp max y temp min
        totalLluvia+=item.litrosLluvia;
        totalTempMax+=item.temperaturaMax;
        totalTempMin+=item.temperaturaMin;

        //Comparar para obtener los max y min de ciudad
        if(item.litrosLluvia>ciudadMaxLluvia.litrosLluvia){
            ciudadMaxLluvia=item;
        }
        if(item.temperaturaMax>ciudadMaxTempMax.temperaturaMax){
            ciudadMaxTempMax=item;
        }
        if(item.temperaturaMin<ciudadMinTemp.temperaturaMin){
            ciudadMinTemp=item;
        }

      
        
    })
    //Media única
    let mediaLluvia=totalLluvia/contenido.length;
    let pLluvia=document.createElement("p");
    pLluvia.textContent="Media de lluvia: "+mediaLluvia.toFixed(2);
    document.body.appendChild(pLluvia);

    //Media temperatura máxima
    let mediaTmax=totalTempMax/contenido.length;
    let pTempMax=document.createElement("p");
    pTempMax.textContent="Media de temperatura max: "+mediaTmax.toFixed(2);
    document.body.appendChild(pTempMax);
    
    //Media temperatura mínima
    let mediaTmin=totalTempMin/contenido.length;
    let pTempMin=document.createElement("p");
    pTempMin.textContent="Media de temperatura min: "+mediaTmin.toFixed(2);
    document.body.appendChild(pTempMin);


    let pMaxLluvia=document.createElement("p");
    pMaxLluvia.textContent="Ciudad con mayor lluvia: "+ciudadMaxLluvia.nombreCiudad;
    document.body.appendChild(pMaxLluvia);

    let pMaxTempMax=document.createElement("p");
    pMaxTempMax.textContent="Ciudad con mayor temperatura max: "+ciudadMaxTempMax.nombreCiudad;
    document.body.appendChild(pMaxTempMax);

    let pMinTemp=document.createElement("p");
    pMinTemp.textContent="Ciudad con temperatura mínima: "+ciudadMinTemp.nombreCiudad;
    document.body.appendChild(pMinTemp);

    



  


 



  
}