// src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();

    // Definir rutas donde no se mostrará el Header y Footer
    const hideHeaderFooter = ['/cliente', '/cliente/clases', '/cliente/pagos'].includes(location.pathname);

    return (
        <>
            {/* Renderizar Header y Footer solo si no estamos en rutas específicas */}
            {!hideHeaderFooter && <Header />}
            <main>{children}</main>
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

export default Layout;
