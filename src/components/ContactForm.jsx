import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construye el mensaje de WhatsApp
    const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;
    const whatsappUrl = `https://wa.me/50764731436?text=${whatsappMessage}`; // Cambia el número de teléfono

    // Abre el enlace de WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');

    // Marca el formulario como enviado
    setSubmitted(true);
  };

  return (
    <div id="contacts" className="form-container">
      <h2 className="form-title">Contactanos</h2>
      {submitted ? (
        <p>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" placeholder="Nombre" className="label">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" placeholder="Correo Electrónico" className="label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" placeholder="Mensaje" className="label">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="textarea"
              required
            />
          </div>
          <button type="submit" className="button">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
