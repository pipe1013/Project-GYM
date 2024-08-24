// src/components/Clases.js
import React, { useState } from 'react';
import './Clases.css'; // Importa el archivo de estilos

const clases = [
    { id: 1, fecha: '2024-08-20', hora: '09:00', tipo: 'Yoga', entrenador: 'Ana Gómez' },
    { id: 2, fecha: '2024-08-21', hora: '11:00', tipo: 'Box', entrenador: 'Luis Martínez' },
    { id: 3, fecha: '2024-08-22', hora: '17:00', tipo: 'Spinning', entrenador: 'María Pérez' },
];

const Clases = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleAgendar = (id) => {
        console.log(`Clase con ID ${id} agendada`);
        setIsModalVisible(true);
        setTimeout(() => setIsModalVisible(false), 2000); // Ocultar el modal después de 2 segundos
    };

    return (
        <div className="clases-container">
            <h2>Clases Disponibles</h2>
            <div className="clases-list">
                {clases.map(clase => (
                    <div key={clase.id} className="clase-item">
                        <p><strong>Fecha:</strong> {clase.fecha}</p>
                        <p><strong>Hora:</strong> {clase.hora}</p>
                        <p><strong>Tipo de Clase:</strong> {clase.tipo}</p>
                        <p><strong>Entrenador:</strong> {clase.entrenador}</p>
                        <button onClick={() => handleAgendar(clase.id)}>Agendar Clase</button>
                    </div>
                ))}
            </div>

            {isModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Clase Agendada</h3>
                        <p>Tu clase ha sido agendada con éxito.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Clases;
