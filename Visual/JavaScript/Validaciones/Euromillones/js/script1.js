let accion=document.getElementById("validar");
let avanzar=true;
accion.onsubmit=function(){
    avanzar=true;

    //identificar n1

    let n1=document.getElementById("idN1").value;
    let sm1=document.getElementById("smn1");

     //identificar n2

     let n2=document.getElementById("idN2").value;
     let sm2=document.getElementById("smn2");

      //identificar n3

    let n3=document.getElementById("idN3").value;
    let sm3=document.getElementById("smn3");

     //identificar n4

     let n4=document.getElementById("idN4").value;
     let sm4=document.getElementById("smn4");

      //identificar n5

    let n5=document.getElementById("idN5").value;
    let sm5=document.getElementById("smn5");

     //identificar n6

     let n6=document.getElementById("idN6").value;
     let sm6=document.getElementById("smn6");

     //repeticiones

     let arrayNumeros=[n1,n2,n3,n4,n5.n6];
     let arrayAux=[];
     let estaR=false;
     for(let i=0;i<arrayNumeros.length;i++){
        if(arrayAux.includes(arrayNumeros[i])){
            estaR=true;
        }else{
            arrayAux.push(arrayNumeros[i])
        }
     }
    let smD=document.getElementById("smDuplicados");
     if(estaR==true){
       smD.textContent="** ERROR: NÚMEROS DUPLICADOS"
        avanzar=false;

     }else{
        smD.textContent=""
     }





    //llamar a la función
    validar(n1,sm1);
    validar(n2,sm2);
    validar(n3,sm3);
    validar(n4,sm4);
    validar(n5,sm5);
    validar(n6,sm6);
    





   

    function validar(nX,smX){
        if (nX.length==0){
            smX.textContent="* Campo obligatorio" //o innerHtml
            avanzar=false;

        }else if (isNaN(nX)){
            smX.textContent="* no es un número"
            avanzar=false;

        }else if(!Number.isInteger(Number(nX))){
            smX.textContent="* no es un número entero"
            avanzar=false;

        }else if (Number(nX)<0 || Number(nX)>50) {
            smX.textContent="* número fuera de rango";
            avanzar=false;
        }else{
            smX.textContent="";

        }
    }



    return avanzar;
}