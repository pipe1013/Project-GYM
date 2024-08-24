// src/components/ClasesAdmin.js
import React, { useState } from 'react';
import './ClasesAdmin.css'; // Asegúrate de que esta ruta sea correcta

const ClasesAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clases, setClases] = useState([]);
    const [formData, setFormData] = useState({
        entrenador: '',
        fecha: '',
        hora: '',
        duracion: '',
        tipo: ''
    });
    const [selectedDate, setSelectedDate] = useState('todos');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddClass = () => {
        setClases([...clases, formData]);
        setFormData({
            entrenador: '',
            fecha: '',
            hora: '',
            duracion: '',
            tipo: ''
        });
        setIsModalOpen(false);
    };

    const handleFilterChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const filteredClases = selectedDate === 'todos'
        ? clases
        : clases.filter(clase => clase.fecha === selectedDate);

    return (
        <div className="admin-container">
            <h1>Administrar Clases</h1>
            <div className="filter-container">
                <select className="role-filter" onChange={handleFilterChange}>
                    <option value="todos">Todos los días</option>
                    {/* Aquí puedes agregar opciones de días dinámicamente */}
                    {[...new Set(clases.map(clase => clase.fecha))].map((fecha, index) => (
                        <option key={index} value={fecha}>{fecha}</option>
                    ))}
                </select>
                <button className="action-button" onClick={() => setIsModalOpen(true)}>Agregar Clase</button>
            </div>

            <table className="user-table">
                <thead>
                    <tr>
                        <th>Entrenador</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Duración</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClases.map((clase, index) => (
                        <tr key={index}>
                            <td>{clase.entrenador}</td>
                            <td>{clase.fecha}</td>
                            <td>{clase.hora}</td>
                            <td>{clase.duracion}</td>
                            <td>{clase.tipo}</td>
                            <td>
                                <button className="action-button">Editar</button>
                                <button className="delete-button" onClick={() => {
                                    setClases(clases.filter((_, i) => i !== index));
                                }}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Agregar Clase</h2>
                        <form>
                            <label>
                                Entrenador:
                                <select
                                    name="entrenador"
                                    value={formData.entrenador}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Selecciona un entrenador</option>
                                    <option value="Entrenador 1">Entrenador 1</option>
                                    <option value="Entrenador 2">Entrenador 2</option>
                                    {/* Agregar opciones de entrenadores aquí */}
                                </select>
                            </label>
                            <label>
                                Fecha:
                                <input
                                    type="date"
                                    name="fecha"
                                    value={formData.fecha}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Hora:
                                <input
                                    type="time"
                                    name="hora"
                                    value={formData.hora}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Duración:
                                <input
                                    type="text"
                                    name="duracion"
                                    value={formData.duracion}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Tipo:
                                <input
                                    type="text"
                                    name="tipo"
                                    value={formData.tipo}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <button type="button" className="action-button" onClick={handleAddClass}>
                                Agregar
                            </button>
                            <button type="button" className="cancel-button" onClick={() => setIsModalOpen(false)}>
                                Cancelar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClasesAdmin;
