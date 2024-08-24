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
import './App.css';

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <>
            {/* Renderizar Header y Footer solo si no estamos en la ruta "/cliente" o sus subrutas */}
            {location.pathname.startsWith('/cliente') ? null : <Header />}
            <main>{children}</main>
            {location.pathname.startsWith('/cliente') ? null : <Footer />}
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
                        <Route path="perfile" element={<MyProfile />} />
                    </Route>
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
