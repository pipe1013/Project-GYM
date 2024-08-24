// src/components/AboutUs.js
import React from 'react';
import './aboutus.css'; // Importa el archivo de estilos específico para este componente

// Importa las imágenes
import Entrenador1 from '../assets/images/entrenador1.jpg';
import Entrenador2 from '../assets/images/entrenador2.jpg';
import Entrenador3 from '../assets/images/entrenador3.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Sección de introducción con imagen de fondo */}
      <section className="intro-section">
        <div className="overlay">
          <h1>Bienvenidos a Nuestro Gimnasio</h1>
          <p>Donde el compromiso con tu salud es nuestra prioridad</p>
        </div>
      </section>
      
      {/* Sección de visión y misión */}
      <section className="vision-mission">
        <div className="vision">
          <h2>Visión</h2>
          <p>
            Ser el líder en bienestar y fitness, transformando vidas con nuestro compromiso y pasión.
          </p>
        </div>
        <div className="mission">
          <h2>Misión</h2>
          <p>
            Empoderar a nuestros miembros para alcanzar su máximo potencial a través de entrenamientos personalizados y un ambiente inspirador.
          </p>
        </div>
      </section>

      {/* Sección de Nuestro Equipo */}
      <section className="team">
        <h2>Conoce a Nuestro Equipo</h2>
        <p className="team-intro">
          Nuestro equipo está compuesto por profesionales apasionados que están aquí para guiarte en cada paso de tu viaje de fitness.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <img src={Entrenador1} alt="Entrenador 1" className="team-img" />
            <div className="team-info">
              <h3>Entrenador 1</h3>
              <p>Especialista en entrenamiento funcional y nutrición.</p>
            </div>
          </div>
          <div className="team-member">
            <img src={Entrenador2} alt="Entrenador 2" className="team-img" />
            <div className="team-info">
              <h3>Entrenador 2</h3>
              <p>Experto en entrenamiento de fuerza y rendimiento.</p>
            </div>
          </div>
          <div className="team-member">
            <img src={Entrenador3} alt="Entrenador 3" className="team-img" />
            <div className="team-info">
              <h3>Entrenador 3</h3>
              <p>Especialista en yoga y bienestar mental.</p>
            </div>
          </div>
          {/* Agrega más miembros del equipo según sea necesario */}
        </div>
      </section>

      {/* Sección de valores */}
      <section className="values">
        <h2>Nuestros Valores</h2>
        <div className="values-list">
          <div className="value-item">
            <i className="fas fa-heartbeat"></i>
            <h3>Salud y Bienestar</h3>
            <p>Promovemos un estilo de vida saludable en cuerpo y mente.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-users"></i>
            <h3>Comunidad</h3>
            <p>Fomentamos un ambiente de apoyo mutuo y camaradería.</p>
          </div>
          <div className="value-item">
            <i className="fas fa-dumbbell"></i>
            <h3>Excelencia</h3>
            <p>Nuestros entrenadores se destacan por su profesionalismo y dedicación.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
