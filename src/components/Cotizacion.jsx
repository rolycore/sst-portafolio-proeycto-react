import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cotizacion = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;
  const product = location.state?.product;

  useEffect(() => {
    if (!service && !product) {
      navigate('/');
    }
  }, [service, product, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    // Construye el mensaje de WhatsApp
    const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AMensaje: ${message}%0A${service ? `Servicio: ${service}` : ''}${product ? `Producto: ${product}` : ''}`;
    const whatsappUrl = `https://wa.me/50764731436?text=${whatsappMessage}`; // Cambia el número de teléfono

    // Abre el enlace de WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');
  };

  const titulo = service ? `Solicitar Cotización para ${service}` : product ? `Solicitar Cotización para ${product}` : 'Solicitar Cotización';

  return (
    <div className="cotizacion-container">
      <h2>{titulo}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Nombre" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" placeholder="Celular" value={formData.phone} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" placeholder="Mensaje" value={formData.message} onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit" className="quote-button">Enviar Solicitud de Cotización</button>
      </form>
    </div>
  );
};

export default Cotizacion;
