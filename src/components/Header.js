// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png'; // Asegúrate de que la ruta sea correcta

const Header = () => {
    return (
        
        <header className="navbar">
            <Link to="/" className="logo-link">
                <img src={logo} alt="Gimnasio" className="logo" />
            </Link>
            <nav>
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/sobre-nosotros" className="nav-link">Sobre nosotros</Link>
                <Link to="/login-container" className="nav-link">Login</Link>
            </nav>
        </header>
        
    );
};

export default Header;
