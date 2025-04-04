let textos_=[]

.fetch("texto.json")
.then(response=>response.json())
.then(data=>{
    textos=data;
    comienzoTipear();
})

function comienzoTipear(){

    function tipear(){
        nuevoTexto.textContent+=textos.texto[indice]
    }

    tiempo=setInterval(tipear,textos.velocidad)
    
}