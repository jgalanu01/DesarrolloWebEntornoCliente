window.addEventListener("load",inicio)

let intentos=0;
let vectorColores=['red','blue','green','pink','orange']
function inicio(){

    //Identificar el hueco (li) donde se ubican los resultados
    //const dias= document.getElementsByTagName("li");
    const dias=document.querySelectorAll("li");

    //identificar el botón que desencadena el evento, y función (acción) donde se desarrolla

   document.getElementById("btn1").addEventListener("click",accion1);
    document.getElementById("btn2").addEventListener("click",accion2);
    document.getElementById("btn3").addEventListener("click",accion3);
    document.getElementById("btn4").addEventListener("click",accion4);



    function accion1(){

        //recorrer los huecos

        for(let item of dias){ 
            //en cada hueco un valor random,
            let numeroRandom=Math.round(Math.random()*1000)

            item.textContent=numeroRandom
        }





    }

    function accion2(){

        for(let item of dias){
            let numeroRandom=Math.round(Math.random()*1000);
            item.textContent=numeroRandom;

            if(numeroRandom>500){
                item.style.color='Red';
            }else{
                item.style.color='blue'
            }
        }


    }


    function accion3(){
        for (let item of dias){
            let numeroRandom=Math.round(Math.random()*1000);
            item.textContent=numeroRandom;
            let coloraleatorio=Math.round(Math.random()*vectorColores.length)
            item.style.color=vectorColores[coloraleatorio];

            

        }
    }






    function accion4(){

        console.log("entro en accion4")

        //huecos donde ubicar el resultado del proyecto
        const items=document.querySelector("ul");
        const li1=items.firstElementChild;
        const li2=li1.nextElementSibling;
        let num1=Math.floor(Math.random()*10);
        let num2=Math.floor(Math.random()*10);
        //desarrollar el resultado
        li1.textContent=num1;
        li2.textContent=num2;

        //mostrar o rendericar el resultado

        if(num1==num2){
            alert("Número1:"+num1+" Numero2:"+num2+"son iguales")
        }
    }
   




}