window.onload = inicio;

function inicio(){
    let claseTexto=document.querySelectorAll(".texto");
    claseTexto.forEach((item,indice)=>{
        if(indice==0){
            item.style.color="red";
        }
        if(indice==2){
            item.style.color="blue";
        }
        if(indice==5){
            item.style.color="green";
        }


    });
}