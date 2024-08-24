// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Imagen1 from '../assets/images/background.jpg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Lógica de autenticación aquí
        if (username === 'user' && password === 'pass') {
            navigate('/cliente'); // Redirige al perfil de cliente
        } else {
            alert('Username or password is incorrect');
        }
    };

    return (
        <div className="login-page">
            <div className="image-container">
                <img src={Imagen1} alt="Fondo de login" className="login-image" />
            </div>
            <div className="container">
                <div className="form" id="login">
                    <h1 className="form__title">Welcome back</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form__input-group">
                            <input 
                                type="text" 
                                className="form__input" 
                                placeholder="Username" 
                                id="usernameInput"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form__input-group">
                            <input 
                                type="password" 
                                className="form__input" 
                                placeholder="Password" 
                                id="passwordInput"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="form__button" id="loginButton">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
