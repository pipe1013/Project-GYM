// src/components/Pagos.js
import React from 'react';
import './Pagos.css'; // Importa el archivo de estilos

const Pagos = () => {
    return (
        <div className="pagos-container">
            <h2>Pasarela de Pagos</h2>
            <form className="pagos-form">
                <label>
                    Nombre en la tarjeta:
                    <input type="text" />
                </label>
                <label>
                    Número de tarjeta:
                    <input type="text" />
                </label>
                <label>
                    Fecha de expiración:
                    <input type="month" />
                </label>
                <label>
                    CVV:
                    <input type="text" />
                </label>
                <button type="submit">Pagar</button>
            </form>
        </div>
    );
};

export default Pagos;
