// Home.js
import React from 'react';

import { Link } from 'react-router-dom';
import Products from './Products';
import ContactForm from './ContactForm';
import Servicios from "./Servicios"; // Importa el componente Services
import AboutMe from "./AboutMe";
import shalomlogo from "./logo.jpg";
import Projects from "./Projects";
import Skills from "./Skills";
import WhatsAppWidgetComponent from '../components/WhatsAppWidgetComponent';

const Home = () => {

  return (
    <>

      <AboutMe descripcionPerfil="¡Bienvenidos a" nombrePerfil="Shalom Solution Tech!" descripcionPerfil1="Soluciones tecnologicas para potenciar tu empresa." logoshalom={shalomlogo}/>
      <section className="about-section">
      <h2>Nosotros</h2>
      <div className="about-container">
      <strong>¡Bienvenido a ShalomSoutionTech! </strong>
      <p>🚀 Impulsando ideas a través del desarrollo de software, creación web y ciberseguridad 🛡⚔. <br/>
        Somos un equipo apasionado por el desarrollo de software y la implementación web.💻✨<br/>
        💡 Inspiramos soluciones innovadoras.<br/>
        🌐 Transformamos ideas en realidad digital.<br/>
        🔧 Desarrollamos herramientas poderosas para tu éxito.<br/>
        {/* Nuevo mensaje sobre ciberseguridad */}
        🛡 Proteger tus datos es nuestra prioridad. Nos especializamos en servicios de ciberseguridad para proteger tus datos y mantener tus sistemas a salvo de amenazas.
        ¡Conéctate con nosotros y descubre cómo podemos llevar tu proyecto al siguiente nivel!</p>
        <Link to={`/about`} className="about-button"> Ver más</Link>
        </div>
        </section>
      <Servicios />
      <Products />
      <Projects />
      <Skills />
      <ContactForm />
      <WhatsAppWidgetComponent />
      
    </>
  );
};

export default Home;
