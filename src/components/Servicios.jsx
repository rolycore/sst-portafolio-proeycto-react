import * as React from "react";
import { Link } from 'react-router-dom';
import image1 from '../multimedia/images/pexels-photo-3888151.png';
import image2 from '../multimedia/images/pexels-photo-5926382.png';
import image3 from '../multimedia/images/ciberseguridad1.jpg';
import image4 from '../multimedia/images/security.png';
import image5 from '../multimedia/images/pexels-photo-5380642.png';
import image6 from '../multimedia/images/post-ciberseguridad.png';
const Servicios = () => {
    const services = [
      { 
        id: 1, 
        name: 'Desarrollo de Software', 
        description: 'ofrecemos desarrollo de software personalizado y de alta calidad para satisfacer las necesidades específicas de su negocio.Soluciones de software a medida para tu negocio.',
        image: image1
      },
      { 
        id: 2, 
        name: 'Consultoría Tecnológica', 
        description: 'brindamos consultoría tecnológica experta para optimizar y transformar su infraestructura digital.',
        image: image2
      },
      { 
        id: 3, 
        name: 'Auditorias y Pentesting', 
        description: 'realizamos auditorías y pentesting exhaustivos para identificar y mitigar vulnerabilidades en su infraestructura digital.',
        image: image3
      },
      { 
        id: 4, 
        name: 'Respuesta a incidentes y Forense Digital', 
        description: 'ofrecemos rápida respuesta a incidentes y exhaustiva forense digital para proteger y asegurar su información crítica.',
        image: image4
      },
      { 
        id: 5, 
        name: 'Auditorias y Pentesting', 
        description: 'Servicios de Auditorias de seguridad e implementacion de medidas de seguridad.',
        image: image5
      },
      { 
        id: 6, 
        name: 'Consultoria y Capacitación en Ciberseguridad', 
        description: 'Servicios de consultoria en ciberseguridad y Capacitacion para la implementacion de medidas de seguridad.',
        image: image6
      },
      // Añade más servicios según sea necesario
    ];
    
  
    return (
      <section id="services" className="services-section">
        <h2>Servicios</h2>
        <div className="service-container">
          {services.map(service => (
            <div className="service-item" key={service.id}>
              <img src={service.image} alt={service.name} className="service-image" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.id}`} className="service-button">Ver más</Link>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Servicios;
  
  