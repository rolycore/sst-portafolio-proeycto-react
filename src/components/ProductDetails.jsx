import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import image1 from '../multimedia/images/paginasweb1.png';
import image2 from '../multimedia/images/pexels-photo-577585-1.png';
import image3 from '../multimedia/images/pexels-divinetechygirl-1181467.jpg';
import image4 from '../multimedia/images/desarrolloaplicacionesweb.png';
import image5 from '../multimedia/images/oferta-por-tiempo-limitado.png';
import image6 from '../multimedia/images/pexels-sora-shimazaki-5926389.jpg';

const ProductDetails = ({ setProductForQuote }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Lista de productos (simulada como estado local)
  const [productDetails] = useState([
    { id: 1, name: 'Paginas Web - Diseño Web sin código (Worpress)', description: 'En Shalom Solution Tech, ofrecemos servicios de diseño web sin código utilizando WordPress, permitiéndole obtener una página web profesional y funcional sin necesidad de conocimientos técnicos. Nuestro equipo de expertos crea sitios web personalizados, atractivos y fáciles de gestionar, adaptados a las necesidades específicas de su negocio. Con nuestra solución de diseño web en WordPress, puede tener una presencia en línea impactante y efectiva de manera rápida y sencilla.',image: image1,costo:'Desde $250 hasta $499', nota:'Facilidades de pagos mensuales, o anuales, Este producto incluye: 6 a 7 Sub - Páginas, Diseño Personalizado con Plantillas gratuitas de Worpress, Optimizada para varios dispositivos, Banners, Google Maps, Configuración de dominio, El Producto no incluye Hosting ni Domino, no incluye backup (costos adicionales si no tiene, estos pueden ser mensuales, o anuales.) los costos pueden variar, dependiento factores extras o fuera de la cotiación.'},
    { id: 2, name: 'Paginas Web - Con Codigo Fuente (FrontEnd) Diseño personalizado', description: 'En Shalom Solution Tech, ofrecemos servicios de diseño web personalizado con código fuente (FrontEnd), creando páginas web únicas y adaptadas a las necesidades específicas de su negocio. Nuestro equipo de desarrolladores expertos se especializa en diseñar interfaces atractivas, intuitivas y altamente funcionales, garantizando una experiencia de usuario excepcional. Con nuestro enfoque personalizado, su sitio web destacará y se alineará perfectamente con su visión y objetivos empresariales.',image: image2,costo:'Desde $500 hasta $1,999', nota:'Facilidades de pagos mensuales, o anuales, Páginas web / Web Apps(Portal web + Gestión de Usuarios), (dependiendo robustez de la necesidad).Este producto incluye: Login por usuarios (sesiones de inicio), Base de datos (Nube o Local), Diseño y desarrollo web personalizados, Formularios de contactos, Desde 6 a 8 subs – páginas de contenido Banners dinámicos (estilizados) Paginas optimizadas para varios dispositivos, Soporte en línea 24 / 7 Mantenimientos Seguridad garantizada, Configuración de dominio y hosting, El Producto no incluye Hosting ni Domino, no incluye backup (costos adicionales si no tiene, estos pueden ser mensuales, o anuales.) los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
    { id: 3, name: 'Ecommerce Tienda Virtual - Diseño Personalizado', description: 'En Shalom Solution Tech, ofrecemos servicios de diseño personalizado para tiendas virtuales de eCommerce, ayudándole a crear una plataforma de ventas en línea atractiva y funcional. Nuestro equipo de expertos se enfoca en desarrollar soluciones eCommerce que no solo reflejan la identidad de su marca, sino que también proporcionan una experiencia de usuario intuitiva y optimizada. Con nuestro diseño personalizado, su tienda virtual destacará en el mercado digital, impulsando sus ventas y crecimiento empresarial.',image: image3,costo:'Desde $2,000 hasta $5,000', nota:'Facilidades de pagos mensuales, o anuales, Configuración de dominio y hosting, El Producto no incluye Hosting ni Domino, no incluye backup (costos adicionales si no tiene, estos pueden ser mensuales, o anuales.) los costos pueden variar, dependiento factores extras o fuera de la cotiación, los costos pueden variar, dependiento factores extras o fuera de la cotiación.'},
    { id: 4, name: 'API RestFull Stack - FrontEnd, BackEnd y Base de Datos', description: 'En Shalom Solution Tech, ofrecemos desarrollo de API RestFull Stack que abarca FrontEnd, BackEnd y Base de Datos, proporcionando soluciones completas y robustas para sus necesidades tecnológicas. Nuestro equipo de desarrolladores expertos crea API eficientes y escalables que facilitan la integración y el intercambio de datos entre diferentes sistemas y aplicaciones. Con nuestro enfoque integral, garantizamos un rendimiento óptimo y una experiencia de usuario superior para su negocio.',image: image4,costo:'Desde 1,000 hasta $10,000', nota:'Facilidades de pagos mensuales, o anuales, los costos pueden variar, dependiento factores extras o fuera de la cotiación.'},
    { id: 5, name: 'Ofertas por tiempo limitado en Soluciones Tecnológicas', description: 'En Shalom Solution Tech, aproveche nuestras ofertas por tiempo limitado en soluciones tecnológicas de vanguardia. Desde desarrollo de software hasta servicios de ciberseguridad, nuestras promociones especiales le permiten acceder a servicios de alta calidad a precios excepcionales. No pierda la oportunidad de mejorar su infraestructura tecnológica y potenciar su negocio con nuestras ofertas exclusivas.',image: image5, costo:'Excluisvos por tiempo limitado en los productos mencionados, el 20% de descuentos de cada uno',nota:'Facilidades de pagos mensuales, o anuales, los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
    { id: 6, name: 'Aplicación Móvil - Diseño, Desarrollo e Implemenación Móvil', description: 'En Shalom Solution Tech, ofrecemos servicios completos de diseño, desarrollo e implementación de aplicaciones móviles, creando soluciones personalizadas que impulsan su negocio. Nuestro equipo de expertos desarrolla aplicaciones intuitivas y funcionales para diversas plataformas móviles, asegurando una experiencia de usuario excepcional y alineada con sus objetivos empresariales. Con nuestro enfoque integral, su aplicación móvil destacará en el mercado y conectará eficazmente con su audiencia.',image: image6,costo:'Desde 1,000 hasta $5,000', nota:'Facilidades de pagos mensuales, o anuales, los costos pueden variar, dependiento factores extras o fuera de la cotiación.' },
    // Añade más productos según sea necesario
  ]);

  const product = productDetails.find(product => product.id === parseInt(id));

  const handleQuoteButtonClick = () => {
    navigate('/cotizacion', { state: { product: product.name } });
  };

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {product ? (
        <div className="product-details">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.costo}</p>
          <p>{product.nota}</p>
          <button onClick={handleQuoteButtonClick} className="quote-button">
            Cotizar Ahora Mismo
          </button>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ProductDetails;
