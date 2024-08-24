// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contacto</h2>
            <div>
                <iframe
                    title="Ubicación del Gimnasio"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7407233050706!2d-122.41941868468139!3d37.7749292797591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809e0284c041%3A0x8a08d5f2f9f66a9!2sSan%20Francisco%2C%20CA%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1637252748322!5m2!1ses!2sco"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
