import React, { useEffect } from 'react'
import { useState } from 'react'

function Alumno() {
    const [alumnos,setAlumnos]=useState([])
    useEffect(()=>{
        fetch("public/daw.json")
        .then((response)=>{
            return response.json()
        })
        .then((alumno)=>{
            setAlumnos(alumno)
        })

    },[])
   
   
    




  return (
    <>
    <div>
        {
            alumnos.map((alumno,index)=>{

                const nota1=Number(alumno.nota1)
                const nota2=Number(alumno.nota2)
                const nota3=Number(alumno.nota3)
                const nota4=Number(alumno.nota4)
                const nota5=Number(alumno.nota5)
                const nota6=Number(alumno.nota6)
                const notaMedia=nota1+nota2+nota3+nota4+nota5+nota6/6

               
                
                if(nota1==10,nota2==10,nota3==10,nota4==10,nota5==10,nota6==10){
                    return(
                        
                        <p key={index}>{alumno.alumno} con una media de {nota1}</p>
                       
                    )
                    
                } else if(nota1>5,nota2>5,nota3>5,nota4>5,nota5>5,nota6>5){
                    return(
                     
                        <p key={index}>{alumno.alumno}</p>
                    )
                    

                }
                


                
               

                


            })
            

                

            
        }
      


    </div>


    
    </>
  )
}

export default Alumno