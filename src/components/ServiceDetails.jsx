// ServicesDetails.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import image1 from '../multimedia/images/pexels-photo-3888151.png';
import image2 from '../multimedia/images/pexels-photo-5926382.png';
import image3 from '../multimedia/images/ciberseguridad1.jpg';
import image4 from '../multimedia/images/security.png';
import image5 from '../multimedia/images/pexels-photo-5380642.png';
import image6 from '../multimedia/images/post-ciberseguridad.png';
const ServicesDetails = ({setServiceForQuote}) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID del servicio desde la URL

  const [serviceDetails] = useState([
    { id: 1, name: 'Desarrollo de Software', description: 'Nuestro servicio de Desarrollo de Software en Shalom Solution Tech se distingue por su enfoque personalizado y su calidad excepcional. Desde aplicaciones móviles hasta sistemas empresariales, nuestro equipo de expertos trabaja para transformar sus ideas en soluciones digitales innovadoras y efectivas, adaptadas a las necesidades únicas de su negocio. Confíe en nosotros para llevar sus proyectos tecnológicos al siguiente nivel con nuestro compromiso con la excelencia y la satisfacción del cliente.', image: image1, costo: 'Desde $2,000 hasta $4,000 (dependiendo la robustez y la necesidad.) ', nota: 'Los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
    { id: 2, name: 'Consultoría Tecnológica', description: 'Nuestra Consultoría Tecnológica en Shalom Solution Tech ofrece un enfoque integral y personalizado para abordar los desafíos tecnológicos de su empresa. Desde la evaluación de la infraestructura existente hasta la implementación de soluciones innovadoras, nuestro equipo de expertos trabaja codo a codo con usted para maximizar el rendimiento y la eficiencia de sus sistemas. Con un profundo conocimiento del panorama tecnológico actual, estamos aquí para guiarlo en cada paso del camino hacia el éxito digital de su negocio.', image: image2, costo: 'Desde $50 hasta $200 (dependiendo la necesidad y la estrategia del negocio.) ', nota: 'Los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
    { id: 3, name: 'Mantenimiento de Sistemas', description: 'En Shalom Solution Tech, entendemos la importancia del funcionamiento ininterrumpido de sus sistemas. Nuestro servicio de Mantenimiento de Sistemas garantiza que su infraestructura tecnológica opere de manera óptima y segura en todo momento. Desde actualizaciones de software hasta monitoreo proactivo, nuestro equipo experto está dedicado a prevenir problemas antes de que surjan, asegurando así la continuidad del negocio y la tranquilidad de nuestros clientes.', image: image3, costo: 'Desde $50 hasta $500 (dependiendo la implementación, la integridad del código, la complejidad del código y la logica del negocio.) ', nota: 'Los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
    { id: 4, name: 'Respuesta a incidentes y Forense Digital', description: 'En Shalom Solution Tech, ofrecemos servicios especializados de Respuesta a Incidentes y Forense Digital diseñados para proteger y asegurar la integridad de su información crítica. Nuestro equipo altamente capacitado responde de manera rápida y eficiente a cualquier incidente de seguridad, minimizando el impacto en su negocio. Realizamos investigaciones forenses digitales exhaustivas para identificar, analizar y mitigar amenazas, garantizando que los datos sean preservados y que se cumplan con los requisitos legales y normativos. Con Shalom Solution Tech, usted puede confiar en una protección integral y una recuperación rápida ante cualquier eventualidad.', image: image4, costo: 'Desde $500 hasta $2,500 (dependiendo la implementación, la integridad de los datos, la complejidad de la infraestructura de seguridad implementada y la estrategia del negocio.) ', nota: 'Los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
    { id: 5, name: 'Auditorias y Pentesting', description: 'En Shalom Solution Tech, ofrecemos servicios de Auditorías y Pentesting para garantizar la seguridad de su infraestructura digital. Nuestros expertos en seguridad informática realizan evaluaciones exhaustivas para identificar y mitigar vulnerabilidades, asegurando así la protección de sus datos y sistemas críticos. Con nuestro enfoque meticuloso y personalizado, puede estar seguro de que su empresa está protegida contra las amenazas cibernéticas en constante evolución.', image: image5, costo: 'Una auditoría de seguridad básica para una pequeña empresa puede costar entre $2,000 y $5,000 dólares. Una prueba de penetración más completa para una mediana empresa puede oscilar entre $5,000 y $15,000 dólares. Los servicios de monitoreo continuo y respuesta a incidentes pueden tener tarifas mensuales que van desde unos pocos cientos hasta varios miles de dólares, dependiendo del alcance y las necesidades específicas.', nota: 'Los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
    { id: 6, name: 'Consultoria y Capacitación en Ciberseguridad', description: 'En Shalom Solution Tech, ofrecemos servicios integrales de Consultoría y Capacitación en Ciberseguridad para fortalecer las defensas de su empresa contra las amenazas cibernéticas. Nuestros expertos en seguridad informática brindan asesoramiento personalizado y capacitación especializada para ayudarlo a comprender, prevenir y responder eficazmente a los ataques cibernéticos. Con nuestro enfoque proactivo y orientado a soluciones, puede estar seguro de que su organización está preparada para enfrentar los desafíos de seguridad digital en el mundo actual', image: image6, costo: 'Consultoría de Seguridad: Los honorarios por hora de un consultor de seguridad cibernética pueden variar entre $100 y $300 dólares por hora, dependiendo de su experiencia y reputación. Para proyectos más grandes o consultoría estratégica a largo plazo, podrías esperar tarifas más altas. Capacitación en Ciberseguridad: Los costos de la capacitación pueden oscilar entre $100 y $500 dólares por participante por día, dependiendo del nivel de personalización, la duración del curso y la reputación del proveedor de capacitación. Algunos proveedores pueden ofrecer descuentos por grupos grandes o sesiones de capacitación a largo plazo. Materiales y Recursos: Dependiendo de los materiales y recursos necesarios para la consultoría y la capacitación, podrías gastar entre $500 y $2000 dólares adicionales, aunque estos costos pueden variar considerablemente según las necesidades específicas de tu empresa. Consultoría para Respuesta a Incidentes: Los costos de consultoría para responder a incidentes pueden ser más altos y pueden oscilar entre $200 y $500 dólares por hora, especialmente si se requiere una respuesta rápida y experta a un incidente de seguridad.', nota: 'Los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
  ]);
  const services = serviceDetails.find(services => services.id === parseInt(id));

  const handleQuoteButtonClick = () => {
    
    navigate('/cotizacion', {state: {service: services.name}});
  };
  return (
    <div>
      <h2>Detalles del Servicio</h2>
      {services ? (
        <div className="service-details">
          <img src={services.image} alt={services.name} className="service-image" />
          <h3>{services.name}</h3>
          <p>{services.description}</p>
          <p>{services.costo}</p>
          <p>{services.nota}</p>
          <div className="quote-button-container">
            <button onClick={handleQuoteButtonClick} className="quote-button">
              Cotizar Ahora Mismo
            </button>
          </div>
        </div>
      ) : (
        <p>Servicio no encontrado</p>
      )}
    </div>
  );
};


export default ServicesDetails;
