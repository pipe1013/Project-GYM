// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <h4>Horario de atención</h4>
                <p>Lunes: 05:30 - 13:00 / 17:00 - 20:00</p>
                <p>Martes: 05:30 - 13:00 / 17:00 - 20:00</p>
                <p>Miércoles: 05:30 - 13:00 / 17:00 - 20:00</p>
                <p>Jueves: 05:30 - 13:00 / 17:00 - 20:00</p>
                <p>Viernes: 05:30 - 13:00 / 16:00 - 19:00</p>
                <p>Sábado: 09:00 - 12:00</p>
                <p>Domingo: 09:00 - 11:00</p>
            </div>
            <div className="footer-section">
                <h4>Contacto</h4>
                <p>Teléfono: 310 6049579 / 310 6049579</p>
                <p>Email: beatboxingcol@gmail.com</p>
            </div>
            <div className="footer-section">
                <h4>Dirección</h4>
                <p>Cl. 70 #4-83, Localidad de Chapinero</p>
                <p>Bogotá, Colombia, 110221, Calle 70 #4-83, Piso 2</p>
            </div>
            <div className="footer-social">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
            <div className="footer-legal">
                <a href="#">Políticas de Privacidad</a> | 
                <a href="#">Términos de Servicio</a>
            </div>
        </footer>
    );
};

export default Footer;
