import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Client.css'; // Asegúrate de que esta ruta sea correcta

const Client = () => {
    const location = useLocation();
    const showAnimation = location.pathname === '/cliente';

    const handleLogout = () => {
        console.log("User logged out");
        window.location.href = '/';
    };

    return (
        <div className="client-container">
            <nav className="client-nav">
                <ul>
                    <li><Link to="perfile">Mi Perfil</Link></li>
                    <li><Link to="clases">Clases</Link></li>
                    <li><Link to="pagos">Pagos</Link></li>
                </ul>
                <button className="logout-button" onClick={handleLogout}>Salir</button>
            </nav>
            <div className="client-content">
                {showAnimation && (
                    <div className="animation-container">
                        <div className="animation-text">
                            <span>B</span>
                            <span>I</span>
                            <span>E</span>
                            <span>N</span>
                            <span>V</span>
                            <span>E</span>
                            <span>N</span>
                            <span>I</span>
                            <span>D</span>
                            <span>O</span>
                        </div>
                    </div>
                )}
                <Outlet />
            </div>
        </div>
    );
};

export default Client;
