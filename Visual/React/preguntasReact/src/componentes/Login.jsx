import React, { useState } from 'react';

function Login({ setAutenticado }) {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Simulación de usuario guardado localmente
    const usuarioValido = {
        username: "admin",
        password: "1234"
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (usuario === usuarioValido.username && password === usuarioValido.password) {
            setAutenticado(true);  // Cambia el estado para mostrar el acordeón
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={usuario} 
                        onChange={(e) => setUsuario(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
    );
}

export default Login;
