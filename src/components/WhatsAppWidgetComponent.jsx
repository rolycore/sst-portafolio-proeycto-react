import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css'; // Importación de estilos predeterminados


const WhatsAppWidgetComponent = () => {
  return (
    <WhatsAppWidget
      phoneNumber="50764731436"
      companyName="Shalom Solution Tech"
      message="Hola! ¿Cómo podemos ayudarte hoy?"
      className="whatsapp-widget" // Aplicar clase personalizada
    />
  );
};

export default WhatsAppWidgetComponent;
