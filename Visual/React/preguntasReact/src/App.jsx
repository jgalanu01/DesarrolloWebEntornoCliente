// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Login from './componentes/Login';
import Acordeon from './componentes/Acordeon';

function App() {
    const [autenticado, setAutenticado] = useState(false);

    return (
        <div className="App">
            {autenticado ? <Acordeon /> : <Login setAutenticado={setAutenticado} />}
        </div>
    );
}

export default App;
