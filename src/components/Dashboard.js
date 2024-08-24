// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Asegúrate de que el archivo CSS esté correctamente importado

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="main-content">
                <h1>Beat Boxing Studio</h1>
                <div className="button-row">
                    <div>
                        <a title="EMPIEZA AHORA"></a>
                    </div>
                </div>
            </div>

            <div className="plans-section">
                <h2>Nuestros Planes</h2>
                <div className="cards-container">
                    <div className="card">
                        <div className="card-content">
                            <h3>Plan Básico</h3>
                            <p>Acceso a clases generales y uso ilimitado del gimnasio.</p>
                            <p>Precio: $30/mes</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h3>Plan Premium</h3>
                            <p>Acceso a todas las clases, sesiones personalizadas y más.</p>
                            <p>Precio: $50/mes</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <h3>Plan VIP</h3>
                            <p>Incluye todos los beneficios del plan premium y sesiones ilimitadas con entrenador personal.</p>
                            <p>Precio: $80/mes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-section">
                <h2>Conoce Más Sobre Nosotros</h2>
                <div className="video-container">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/kG6Qs7M3EZg" 
                        title="Video de introducción" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
