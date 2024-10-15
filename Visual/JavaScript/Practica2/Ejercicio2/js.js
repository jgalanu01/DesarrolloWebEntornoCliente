window.addEventListener("load",inicio)

function inicio(){

document.getElementById("btn1").addEventListener("click",accion1)
document.getElementById("btn2").addEventListener("click",accion2)
document.getElementById("btn3").addEventListener("click",accion3)
document.getElementById("btn4").addEventListener("click",accion4)
//document.getElementById("btn5").addEventListener("click",accion5)
// document.getElementById("btn6").addEventListener("click",accion6)

function accion1(){

    const c1=document.getElementById("c1")
    c1.style.backgroundColor='green';

}


function accion2(){
    const c2=document.getElementById("c2")
    let numeroRandom=Math.round(Math.random()*1000)
    c2.textContent=numeroRandom

}


function accion3(){
    const c3=document.getElementById("c3")
    let n1=prompt("Introduce un número") //prompt para que te pida introducir por teclado
    let n2=prompt("Introduce otro número")
    n1=parseInt(n1) //para sumar y que no concatene
    n2=parseInt(n2) //para sumar y que no concatene
    c3.textContent=n1+n2

}

function accion4(){

    const c4=document.getElementById("c4")

    let numeroX=Math.round(Math.random()*10);
    console.log(numeroX);
    let intentos=0;
    let fin=false;
    while(!fin){
        let numerointroducir=prompt("Cual es el número oculto?");
        intentos++;
        if(parseInt(numeroX)==parseInt(numerointroducir)){
            alert ("Has acertado")
            fin=true;
        }else{
            alert("Inténtalo de nuevo");
        }
        c4.textContent="Intentos: "+ intentos;
        
    }

  

}






}
