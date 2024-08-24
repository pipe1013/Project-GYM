// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Client from './components/Client';
import Clases from './components/Clases';
import Pagos from './components/Pagos';
import MyProfile from './components/MyProfile';
import Admin  from './components/AdminPanel'; // Importa el nuevo componente AdminPanel
import Usuarios from './components/Usuarios';
import ClasesAdmin from './components/ClasesAdmin';
import PagosAdmin from './components/PagosAdmin';
import './App.css';

const Layout = ({ children }) => {
    const location = useLocation();

    // Oculta el Header y el Footer en las rutas del panel de cliente o administración
    const isPanelRoute = location.pathname.startsWith('/cliente') || location.pathname.startsWith('/admin');

    return (
        <>
            {!isPanelRoute && <Header />}
            <main>{children}</main>
            {!isPanelRoute && <Footer />}
        </>
    );
};

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/sobre-nosotros" element={<AboutUs />} />
                    <Route path="/login-container" element={<Login />} />
                    
                    {/* Rutas para el panel del cliente */}
                    <Route path="/cliente" element={<Client />}>
                        <Route path="clases" element={<Clases />} />
                        <Route path="pagos" element={<Pagos />} />
                        <Route path="perfil" element={<MyProfile />} />
                    </Route>
                    
                     {/* Rutas para el panel del cliente */}
                     <Route path="/cliente" element={<Client />}>
                        <Route path="clases" element={<Clases />} />
                        <Route path="pagos" element={<Pagos />} />
                        <Route path="perfile" element={<MyProfile />} />
                    </Route>

                    {/* Rutas para el panel del administrador */}
                    <Route path="/admin" element={<Admin />}>
                        <Route path="usuarios" element={<Usuarios />} />
                        <Route path="clases" element={<ClasesAdmin />} />
                        <Route path="pagos" element={<PagosAdmin />} />
                    </Route>
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
