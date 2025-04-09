fetch("empleados.csv")
.then((response)=>response.text())
.then((data)=>mostrar(data));

function mostrar(data){
    const tabla=document.createElement("table");
    tabla.border="1px solid red";
    document.body.appendChild(tabla);
    let filas=[];

    filas=data.split("\n");
    let cabecera=filas[0];
    let elementosCabecera=cabecera.split(",");
    const filaCabecera=document.createElement("thead");
    tabla.appendChild(filaCabecera);
    elementosCabecera.forEach((item,indice)=>{
    const th=document.createElement("th");
        th.textContent=item;
        filaCabecera.appendChild(th);
    });

    const cuerpoTabla=document.createElement("tbody");
    tabla.appendChild(cuerpoTabla);
    filas.forEach((item,indice)=>{
        if(indice>0){
            const tr=document.createElement("tr");
            cuerpoTabla.appendChild(tr);
            let elementosFila=item.split(",");

            elementosFila.forEach((miniItem,indiceTd)=>{
                const td=document.createElement("td");
                tr.appendChild(td);
                td.textContent=miniItem;

            })
        }
    })




    
}