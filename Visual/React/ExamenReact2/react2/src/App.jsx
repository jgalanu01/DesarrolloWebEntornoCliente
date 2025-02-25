import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Provicias from './componentes/Provicias'
import Alumno from './componentes/Alumno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  
    <Provicias/>
    {/* <Alumno/> */}
    </>
  )
}

export default App
