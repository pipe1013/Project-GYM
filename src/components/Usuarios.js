// src/components/Usuarios.js
import React, { useState } from 'react';
import './Usuarios.css';

const mockUsers = [
    { id: 1, name: 'John Doe', lastName: 'Doe', documentNumber: '123456789', address: '123 Main St', phone: '555-555-5555', email: 'john@example.com', role: 'Cliente' },
    { id: 2, name: 'Jane Smith', lastName: 'Smith', documentNumber: '987654321', address: '456 Elm St', phone: '555-555-5556', email: 'jane@example.com', role: 'Entrenador' },
    { id: 3, name: 'Admin User', lastName: 'User', documentNumber: '1122334455', address: '789 Oak St', phone: '555-555-5557', email: 'admin@example.com', role: 'Administrador' }
];

const Usuarios = () => {
    const [selectedRole, setSelectedRole] = useState('Todos');
    const [users, setUsers] = useState(mockUsers);
    const [isModalVisible, setModalVisible] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        lastName: '',
        documentNumber: '',
        address: '',
        phone: '',
        email: '',
        role: 'Cliente'
    });

    const handleRoleChange = (e) => {
        const role = e.target.value;
        setSelectedRole(role);
        if (role === 'Todos') {
            setUsers(mockUsers);
        } else {
            setUsers(mockUsers.filter(user => user.role === role));
        }
    };

    const handleAdd = () => {
        setModalVisible(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers(prevUsers => [
            ...prevUsers,
            { ...newUser, id: prevUsers.length + 1 }
        ]);
        setModalVisible(false);
        setNewUser({
            name: '',
            lastName: '',
            documentNumber: '',
            address: '',
            phone: '',
            email: '',
            role: 'Cliente'
        });
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleEdit = (id) => {
        alert(`Editar usuario con ID ${id}`);
    };

    const handleDelete = (id) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    };

    return (
        <div className="admin-container">
            <h1>Administrar Usuarios</h1>
            <div className="filter-container">
                <select
                    className="role-filter"
                    value={selectedRole}
                    onChange={handleRoleChange}
                >
                    <option value="Todos">Todos</option>
                    <option value="Cliente">Clientes</option>
                    <option value="Entrenador">Entrenadores</option>
                    <option value="Administrador">Administradores</option>
                </select>
                <button className="action-button" onClick={handleAdd}>Agregar Usuario</button>
            </div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Número de Documento</th>
                        <th>Dirección</th>
                        <th>Celular</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.documentNumber}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="action-button" onClick={() => handleEdit(user.id)}>Editar</button>
                                <button className="delete" onClick={() => handleDelete(user.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for adding a new user */}
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Agregar Usuario</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Nombre:
                                <input
                                    type="text"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Apellido:
                                <input
                                    type="text"
                                    name="lastName"
                                    value={newUser.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Número de Documento:
                                <input
                                    type="text"
                                    name="documentNumber"
                                    value={newUser.documentNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Dirección:
                                <input
                                    type="text"
                                    name="address"
                                    value={newUser.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Celular:
                                <input
                                    type="text"
                                    name="phone"
                                    value={newUser.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Rol:
                                <select
                                    name="role"
                                    value={newUser.role}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="Cliente">Cliente</option>
                                    <option value="Entrenador">Entrenador</option>
                                    <option value="Administrador">Administrador</option>
                                </select>
                            </label>
                            <button type="submit" className="action-button">Guardar</button>
                            <button type="button" className="cancel-button" onClick={handleCloseModal}>Cancelar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Usuarios;
