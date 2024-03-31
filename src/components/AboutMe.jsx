import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Typewriter from "typewriter-effect";
// Importa la imagen

export default function AboutMe(props) {
  const {
    descripcionPerfil,
    nombrePerfil,
    descripcionPerfil1,
    logoshalom
  } = props;

  return (
    <div id="aboutme">
      <Box className="aboutme">
        <Container>
          <Typography
            component="h1"
            variant="h5"
            color="text.secondary"
            paragraph
          >
            {descripcionPerfil}
          </Typography>

          <Typography
            variant="h2"
            component="h1"
            color="text.secondary"
            paragraph
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(nombrePerfil).start();
              }}
            />
          </Typography>

          <Typography variant="h6" color="text.secondary" paragraph>
            {descripcionPerfil1}
          </Typography>

          <img 
  src={logoshalom} 
  alt="Shalom Logo" 
  style={{ 
    maxWidth: "25%", 
    height: "auto",
    display: "block", /* Para que la imagen se comporte como un bloque y pueda centrarse */
    margin: "0 auto" /* Margen automático horizontal para centrar la imagen */
  }} 
/>

        </Container>
      </Box>
    </div>
  );
}
