import React from 'react';
import { Link } from 'react-router-dom';

import image1 from '../multimedia/images/paginasweb1.png';
import image2 from '../multimedia/images/pexels-photo-577585-1.png';
import image3 from '../multimedia/images/pexels-divinetechygirl-1181467.jpg';
import image4 from '../multimedia/images/desarrolloaplicacionesweb.png';
import image5 from '../multimedia/images/oferta-por-tiempo-limitado.png';
import image6 from '../multimedia/images/pexels-sora-shimazaki-5926389.jpg';


const Products = () => {
  const products = [
    { id: 1, name: 'Paginas Web - Diseño Web sin código (Worpress)', description: 'Diseño e Implementación de Paginas web hechas a la medida y de acuerdo a tu necesidad, nos ajustamos a tu presupuesto.',image: image1 },
    { id: 2, name: 'Paginas Web - Con Codigo Fuente (FrontEnd) Diseño personalizado ', description: 'Desarrollamos paginas y aplicaciones web hechas a la medita, nos ajustamos a tu presupuesto.',image: image2 },
    { id: 3, name: 'Ecommerce Tienda Virtual - Diseño Personalizado', description: 'Tenemos la mejor oferta en el mercado digital, para tu tienda virtual.',image: image3 },
    { id: 4, name: 'API RestFull Stack - FrontEnd, BackEnd y Base de Datos', description: 'Desarrollamos API Seguras, con todos los estandares exclusivo hechas a la medida de tus necesidades, nos ajustamos a tu presupuesto',image: image4 },
    { id: 5, name: 'Ofertas por tiempo limitado en Soluciones Tecnológicas', description: 'Páginas Web Desarrollo Web, Mantenimiento de Sitios Web, Consultoría de Ciberseguridad.',image: image5 },
    { id: 6, name: 'Aplicación Móvil - Diseño, Desarrollo e Implemenación Móvil', description: 'ofrecemos desarrollo de aplicaciones móvil compatibles con todos tus dispositivos, para optimizar tus operaciones empresariales.',image: image6  },
    // Añade más productos según sea necesario
  ];

  return (
    <section id="products" className="products-section"> {/* Utiliza la clase CSS aquí */}
      <h2>Productos</h2>
      <div className="products-container">
      {products.map(product => (
        <div className="product-item" key={product.id} >  {/* Utiliza la clase CSS aquí */}
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to={`/products/${product.id}`} className="product-button">Ver más</Link>
        </div>
        
      ))}
      </div>
    </section>
  );
};

export default Products;
