// src/components/Admin.js
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './AdminPanel.css'; // Asegúrate de que esta ruta sea correcta

const Admin = () => {
    const location = useLocation();
    const showAnimation = location.pathname === '/admin';

    const handleLogout = () => {
        console.log("Admin logged out");
        window.location.href = '/';
    };

    return (
        <div className="admin-container">
            <nav className="admin-nav">
                <ul>
                    <li><Link to="usuarios">Administrar Usuarios</Link></li>
                    <li><Link to="clases">Administrar Clases</Link></li>
                    <li><Link to="pagos">Administrar Pagos</Link></li>
                </ul>
                <button className="logout-button" onClick={handleLogout}>Salir</button>
            </nav>
            <div className="admin-content">
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

export default Admin;
