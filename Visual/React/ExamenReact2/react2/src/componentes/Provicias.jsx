import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
function Provicias() {
    const [datos ,setDatos] =useState('');

    const provincias=[    
        'Almeria',	
        'Andalucia',		
        'Avila',		
        'Badajoz',		
        'Caceres',	
        'Cadiz',		
        'CastillaLeon',		
        'Cordoba',
        'Extremadura',		
        'Huelva',		
        'Jaen',		
        'Leon',		
        'Palencia',		
        'Salamanca',	
        'Sevilla',	
        'Valladolid'
        ]
    const ImgProvincias=[    
        'http/localhost/imagenes/Almeria.png',	
        'http/localhost/imagenes/Andalucia.png',		
        'http/localhost/imagenes/Avila.png',		
        'http/localhost/imagenes/Badajoz.png',		
        'http/localhost/imagenes/Caceres.png',	
        'http/localhost/imagenes/Cadiz.png',		
        'http/localhost/imagenes/CastillaLeon.png',		
        'http/localhost/imagenes/Cordoba.png',
        'http/localhost/imagenes/Extremadura.png',		
        'http/localhost/imagenes/Huelva.png',		
        'http/localhost/imagenes/Jaen.png',		
        'http/localhost/imagenes/Leon.png',		
        'http/localhost/imagenes/Palencia.png',		
        'http/localhost/imagenes/Salamanca.png',	
        'http/localhost/imagenes/Sevilla.png',	
        'http/localhost/imagenes/Valladolid.png'
        ];
     
    
    const imgRandoms=Math.floor(Math.random*ImgProvincias.length)  ;
    
  
    const unoProvincias=useState(Math.floor(Math.random*provincias.length));
           
           
    const puntos=useState(0)
        

    function comprobarPuntos(){
        
        for (let i = 0; i < provincias.length; i++) {
            for (let j = 0; j < ImgProvincias.length; j++) {
                if(provincias[i]===ImgProvincias[j]){
                    puntos++

                }else{
                    puntos--
                }

                
            }
            
        }
        return puntos



    }
    
    function provinciasUno(){
        const [provinciasRandom,setProvincias]=useState(Math.floor(Math.random*provincias)); 
        setProvincias(provinciasRandom)

    }
 
    return (
    <>
    
        <h1>Selecciona la Provincias: {provincias} </h1>
        {
            // console.log(provinciasUno)

        }

        <h2>Puntos ;{puntos}</h2>

        <div>
        {
            ImgProvincias.map((img,index)=>{

                return(
                    <img key={index} src={imgRandoms[img]} onClick={()=>comprobarPuntos}   alt="" />
                )


            })
        }

        
            
            
            


        </div>
    
    
    
    
    </>



  )
}

export default Provicias