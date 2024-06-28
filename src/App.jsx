import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from "./components/AppBar";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios"; // Importa el componente Services
import ServicesDetails from './components/ServiceDetails'; 
import Products from "./components/Products";
import ProductDetails from './components/ProductDetails';
import Cotizacion from './components/Cotizacion';
import ContactForm from './components/ContactForm';
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./styles/components/muiStyles";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/styles.css";
import shalomlogo from "./components/logo.jpg";
import html5logo from "./multimedia/images/html5-logo.webp";
import css3logo from "./multimedia/images/css3-logo.webp";
import mysqllogo from "./multimedia/images/mysql-logo.webp";
import nodejslogo from "./multimedia/images/nodejs-logo.webp";
import reactlogo from "./multimedia/images/react-logo.webp";
import javascriptlogo from "./multimedia/images/javascript-logo.webp";
import githublogo from "./multimedia/images/github-logo.webp";
import javalogo from "./multimedia/images/java-logo.webp";
import angular from "./multimedia/images/angular.png";
import springboot from "./multimedia/images/sprinbootlogo.png";
import Home from './components/Home';
import WhatsAppWidgetComponent from './components/WhatsAppWidgetComponent'; // Importa el componente
import Politica from './components/Politica';

export default function App() {
  const avatars = [
    { src: javalogo, alt: "JAVA Logo" },
    { src: springboot, alt: "SPRING Logo" },
    { src: html5logo, alt: "HTML5 Logo" },
    { src: css3logo, alt: "CSS3 Logo" },
    { src: javascriptlogo, alt: "JavaScript Logo" },
    { src: reactlogo, alt: "React Logo" },
    { src: angular, alt: "Angular Logo" },
    { src: mysqllogo, alt: "MySQL Logo" },
    { src: nodejslogo, alt: "NodeJS Logo" },
    { src: githublogo, alt: "Github Logo" },
  ];

  const [serviceForQuote, setServiceForQuote] = useState('');
  const [productForQuote, setProductForQuote] = useState('');

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar
        tituloHome="Home"
        tituloNombre="Shalom Solution Tech"
        tituloSobreMi="Shalom"
        tituloNosotros="Nosotros"
        tituloServicios="Servicios"
        tituloProductos="Productos"
        tituloProyectos="Proyectos"
        tituloHabilidades="Herramientas"
        tituloEducacion="Formación"
        tituloContacto="Contactanos"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe descripcionPerfil="¡Bienvenidos a" nombrePerfil="Shalom Solution Tech!" descripcionPerfil1="Soluciones tecnologicas para potenciar tu empresa." logoshalom={shalomlogo} />} />
        <Route path="/skills" element={<Skills textoHabilidades="Herramientas" avatars={avatars} />} />
        <Route path="/projects" element={<Projects titulo="Proyectos" />} />
        <Route path="/about" element={<About titulo="Nosotros" />} /> 
        <Route path="/services" element={<Servicios titulo="Servicios" />} />
        <Route path="/services/:id" element={<ServicesDetails setServiceForQuote={setServiceForQuote} />} /> 
        <Route path="/cotizacion" element={<Cotizacion titulo="Cotizacion" service={serviceForQuote} product={productForQuote} />} />
        <Route path="/products" element={<Products titulo="Productos" />} />
        <Route path="/products/:id" element={<ProductDetails setProductForQuote={setProductForQuote} />} /> 
        <Route path='/politica' element={<Politica />} /> 
        <Route path="/contacts" element={<ContactForm titulo="Contactanos"/>} />  
        <Route component={()=>(
            <div className="error">
                <h1>Error 404</h1>
                <span>Página no encontrada</span>
            </div>
          )}/>
      </Routes>
      <WhatsAppWidgetComponent /> {/* Añade el componente del widget de WhatsApp */}
      <Footer
        titulo="Shalom Solution Tech"
        descripcion="Si tienes alguna pregunta o propuesta de trabajo, mi bandeja de entrada está disponible."
        correo="shalomsolutiontech@gmail.com"
        nombreBotonGmail="Gmail"
        urlWhatsapp="https://api.whatsapp.com/send?text=¡Hola!&phone=+50764731436"
        nombreBotonWhatsapp="WhatsApp"
        textoFinalFooter="Desarrollado con ❤️ por Rolando Alfredo Salinas Campos"
      />
    </ThemeProvider>
  );
}
