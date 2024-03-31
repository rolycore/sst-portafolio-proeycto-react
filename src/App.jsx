import ResponsiveAppBar from "./components/AppBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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

export default function App() {
  const avatars = [
    { src: javalogo, alt: "JAVA Logo"},
    { src: springboot, alt: "SPRING Logo"},
    { src: html5logo, alt: "HTML5 Logo" },
    { src: css3logo, alt: "CSS3 Logo" },
    { src: javascriptlogo, alt: "JavaScript Logo" },
    { src: reactlogo, alt: "React Logo" },
    { src: angular, alt: "Angular Logo" },
    { src: mysqllogo, alt: "MySQL Logo" },
    { src: nodejslogo, alt: "NodeJS Logo" },
    { src: githublogo, alt: "Github Logo" },
  ];

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <ResponsiveAppBar
          tituloNombre="Portafolio"
          tituloSobreMi="Nosotros"
          tituloProyectos="Proyectos"
          tituloHabilidades="Herramientas"
          tituloEducacion="Formación"
          tituloContacto="Contacto"
        />
<AboutMe
  descripcionPerfil="¡Bienvenidos a"
  nombrePerfil="Shalom Solution Tech!"
  descripcionPerfil1="Soluciones tecnologicas para potenciar tu empresa."
  logoshalom={shalomlogo}
/>


        <Skills textoHabilidades="Herramientas" avatars={avatars} />

        <Projects titulo="Proyectos" />

        <Footer
          titulo="Contacto"
          descripcion="Si tienes alguna pregunta o propuesta de trabajo, mi bandeja de
                    entrada esta disponible."
          correo="shalomsolutiontech@gmail.com"
          nombreBotonGmail="Gmail"
          urlWhatsapp="https://api.whatsapp.com/send?text=¡Hola!&phone=+50768828672
                    WhatsApp"
          nombreBotonWhatsapp="WhatsApp"
          textoFinalFooter="Desarrollado con ❤️ por Rolando Alfredo Salinas Campos"
          urlInstagram="https://www.instagram.com/shalomsolutiontech/"
          urlGithub="https://github.com/rolycore"
          urlLinkedin="https://www.linkedin.com/in/rolycore/"
        />
      </ThemeProvider>
    </>
  );
}
