// src/components/MyProfile.js
import React, { useState } from 'react';
import './MyProfile.css';

const MyProfile = () => {
    const [image, setImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = URL.createObjectURL(e.target.files[0]);
            setImage(file);
        }
    };

    const handlePlanClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="my-profile">
            <h1 className="titulo">Perfil del Cliente</h1>
            <div className="profile-card">
                <div className="profile-header">
                    <h2>Juan Pérez</h2>
                    <p>
                        <span onClick={handlePlanClick} className="plan-link">Plan: Premium</span>
                    </p>
                </div>
                <div className="profile-body">
                    <div className="profile-image-upload">
                        <label htmlFor="image-upload" className="upload-button">
                            Subir Imagen de Perfil
                            <input
                                type="file"
                                id="image-upload"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </label>
                        {image && (
                            <div className="image-preview">
                                <img src={image} alt="Imagen de perfil" />
                            </div>
                        )}
                    </div>
                    <div className="progress-container">
                        <label>Clases asistidas este mes:</label>
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                        <p>5/10 clases</p>
                    </div>
                    <div className="client-info">
                        <h3>Datos Personales</h3>
                        <ul>
                            <li><strong>Email:</strong> juan.perez@example.com</li>
                            <li><strong>Teléfono:</strong> +123 456 7890</li>
                            <li><strong>Fecha de Inscripción:</strong> 01/01/2023</li>
                        </ul>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                    <span className="close-modal" onClick={closeModal}>×</span>
                        <h3>Información del Plan Premium</h3>
                        <p>El plan Premium incluye acceso ilimitado a todas las clases, sesiones de entrenamiento personalizadas y descuentos en productos de la tienda del gimnasio.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfile;
