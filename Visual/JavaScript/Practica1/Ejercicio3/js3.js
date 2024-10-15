window.addEventListener("load",inicio)
function inicio(){
    console.log("entro en js")

    const ol=document.body.firstElementChild
    console.log(ol)
    ol.style.color='blue';
    ol.style.fontSize='30px';
    ol.style.fontFamily='Sans-serif';
    ol.style.marginLeft='5px';
    ol.style.marginTop='10px';
    ol.style.marginBottom='10px';

    const sabado=document.getElementById("itemSabado")
    sabado.style.backgroundColor='green';

    const domingo=document.getElementById("itemDomingo")
    domingo.style.backgroundColor='red';


    const num73=document.getElementById("edad")
    num73.style.color='red';



    //la tabla que se muestren los bordes
    const tabla=document.body.lastElementChild;
    tabla.style.fontFamily='Sans-serif';



   


}