// src/components/Pagos.js
import React from 'react';
import './Pagos.css'; // Importa el archivo de estilos

const Pagos = () => {
    // Datos de ejemplo para la tarjeta y el historial de pagos
    const cardInfo = {
        name: 'Juan Pérez',
        bank: 'Banco Ejemplo',
        number: '**** **** **** 9012',
        expDate: '08/2025',
        cvv: '***',
    };

    const paymentHistory = [
        { month: 'Junio', status: 'Pago exitoso', amount: '$30' },
        { month: 'Julio', status: 'Pago exitoso', amount: '$30' },
        { month: 'Agosto', status: 'Pago pendiente...', amount: '$30' },
        // Agrega más datos de ejemplo aquí
    ];

    return (
        <div className="pagos-container">
            <h2>Información de la Tarjeta</h2>
            <div className="card-info">
                <div className="card">
                    <div className="card-front">
                        <div className="bank-name">
                            {cardInfo.bank}
                        </div>
                        <div className="card-number">
                            {cardInfo.number}
                        </div>
                        <div className="card-details">
                            <div className="card-name">
                                {cardInfo.name}
                            </div>
                            <div className="card-expiry">
                                {cardInfo.expDate}
                            </div>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="strip"></div>
                        <div className="card-cvv">
                            CVV: {cardInfo.cvv}
                        </div>
                    </div>
                </div>
            </div>
            <h3>Historial de Pagos</h3>
            <table className="payment-history-table">
                <thead>
                    <tr>
                        <th>Mes</th>
                        <th>Estado</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentHistory.map((payment, index) => (
                        <tr key={index}>
                            <td>{payment.month}</td>
                            <td>{payment.status}</td>
                            <td>{payment.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pagos;
