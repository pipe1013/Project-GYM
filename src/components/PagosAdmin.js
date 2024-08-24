// src/components/PagosAdmin.js
import React, { useState } from 'react';
import './PagosAdmin.css';

const mockClients = [
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'Ana Gómez' },
    // Agrega más datos de ejemplo aquí
];

const PagosAdmin = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('todos');
    const [payments, setPayments] = useState([
        { id: 1, name: 'Juan Pérez', plan: 'Mensual', amount: '$30', card: '**** 1234', bank: 'Banco ABC', date: '2024-08-15' },
        { id: 2, name: 'Ana Gómez', plan: 'Trimestral', amount: '$75', card: '**** 5678', bank: 'Banco XYZ', date: '2024-07-10' },
        // Agrega más datos de ejemplo aquí
    ]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleAddPayment = () => {
        setModalVisible(true);
    };

    const handleClientChange = (event) => {
        setSelectedClient(event.target.value);
    };

    const handleSubmitClient = () => {
        if (selectedClient) {
            setPaymentFormVisible(true);
        }
    };

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        setModalVisible(false);
        setPaymentFormVisible(false);
        setConfirmationMessage('Pago procesado con éxito.');
        // Aquí puedes manejar el estado de los pagos, si es necesario
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setPaymentFormVisible(false);
        setSelectedClient(null);
        setConfirmationMessage('');
    };

    const filteredPayments = payments.filter(payment => {
        const isMatch = payment.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isMonthMatch = selectedMonth === 'todos' || payment.date.startsWith(selectedMonth);
        return isMatch && isMonthMatch;
    });

    const handleDownloadReport = () => {
        const csvRows = [
            ['Nombre', 'Plan', 'Monto', 'Tarjeta', 'Banco'], // Encabezados de la CSV
            ...filteredPayments.map(payment => [
                payment.name,
                payment.plan,
                payment.amount,
                payment.card,
                payment.bank
            ])
        ];

        let csvContent = "data:text/csv;charset=utf-8,"
            + csvRows.map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "informe_pagos.csv");
        document.body.appendChild(link);
        link.click();
    };

    const months = ['todos', 'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO'];

    return (
        <div className="admin-container">
            <h1>Pagos</h1>
            <div className="filter-container">
                <input
                    type="text"
                    placeholder="Buscar cliente..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    className="month-filter"
                >
                    {months.map(month => (
                        <option key={month} value={month}>
                            {month === 'todos' ? 'Todos los meses' : month}
                        </option>
                    ))}
                </select>
                <button className="add-payment-button" onClick={handleAddPayment}>
                    Añadir Pago
                </button>
            </div>
            <table className="payments-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Plan</th>
                        <th>Monto</th>
                        <th>Tarjeta</th>
                        <th>Banco</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPayments.map(payment => (
                        <tr key={payment.id}>
                            <td>{payment.name}</td>
                            <td>{payment.plan}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.card}</td>
                            <td>{payment.bank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="download-button" onClick={handleDownloadReport}>
                Descargar informe
            </button>

            {/* Modal for adding a payment */}
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        {!isPaymentFormVisible ? (
                            <>
                                <h2>Seleccionar Cliente</h2>
                                <select
                                    value={selectedClient}
                                    onChange={handleClientChange}
                                    className="client-select"
                                >
                                    <option value="">Seleccione un cliente</option>
                                    {mockClients.map(client => (
                                        <option key={client.id} value={client.id}>
                                            {client.name}
                                        </option>
                                    ))}
                                </select>

                                <h2>Seleccionar Plan</h2>
                                <select
                                    className="plan-select"
                                >
                                    <option value="">Seleccionar plan</option>
                                    <option value="premium">Premium</option>
                                    <option value="basic">Basic</option>
                                </select>

                                <button className="action-button" onClick={handleSubmitClient}>
                                    Ir a pasarela de pagos
                                </button>
                                <button className="cancel-button" onClick={handleCloseModal}>
                                    Cancelar
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="pagos-container">
                                    <h2>Pasarela de Pagos</h2>
                                    <form className="pagos-form" onSubmit={handlePaymentSubmit}>
                                        <label>
                                            Nombre en la tarjeta:
                                            <input type="text" required />
                                        </label>
                                        <label>
                                            Número de tarjeta:
                                            <input type="text" required />
                                        </label>
                                        <label>
                                            Fecha de expiración:
                                            <input type="month" required />
                                        </label>
                                        <label>
                                            CVV:
                                            <input type="text" required />
                                        </label>
                                        <button type="submit" className="submit-button">Añadir</button>
                                        <button type="button" className="cancel-button" onClick={handleCloseModal}>
                                            Cancelar
                                        </button>
                                    </form>
                                </div>
                                {confirmationMessage && (
                                    <div className="confirmation-message">
                                        {confirmationMessage}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PagosAdmin;
