import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomAccordion from "./CustomAccordion";
import videosistemaventajava from "../multimedia/videos/sistemaventasjavamysql.mp4";
import videoappcitas from "../multimedia/videos/appcitas-sst.mp4";
import videoecommerce from "../multimedia/videos/ecommercbasico.mp4";
import videocriptomonedas from "../multimedia/videos/app-cripto.mp4";
import videopresupuesto from "../multimedia/videos/app-presupuesto.mp4";
import videocotizadorseguro from "../multimedia/videos/app-cotizadordeseguroautomovil.mp4";
import shalaomlab from "../multimedia/videos/shalaomlab.mp4"

import mirepositorio from "../multimedia/images/mireporsitorio.PNG";
import cotizador from "../multimedia/images/cotizador.PNG";
import appcitas from "../multimedia/images/appcitas.png";
import cripto from "../multimedia/images/criptomonedas.PNG";
import ecommercei from "../multimedia/images/ecommercebasico.png";
import presupuesto from "../multimedia/images/presupuesto.PNG";
import appreporte from "../multimedia/images/appreportes.PNG";
import sistemaVentas from "../multimedia/images/sistemadeventa.webp";


export default function Projects(props) {
  const { titulo } = props;

  
  const sistemaVentasImagenes=[
    { img: sistemaVentas,}
  ];
 
  const appcitasimg =[
    {img: appcitas,}
  ]
    
  const criptoimg =[
    {img: cripto, }
  ]
  const ecommerceimg =[
    {img: ecommercei, }
  ]

  const appreporteimg =[
    {img: appreporte, }
  ]
  const presupuestoimg =[
    {img: presupuesto, }
  ]

  const mirepositorioimg =[
    {img: mirepositorio }
  ]

  const cotizadorimg =[
    {img: cotizador}
  ]

const migithub=[
  {nombre:  "Mi reporsitorio",
  href: "https://github.com/rolycore"}
]

  const botonesreporteCrudApp = [
    {
      nombre: "Código fuente Frontend",
      href: "https://github.com/rolycore/sst-api-reportes-fullstack-demo/tree/frontend",
    },
    {
      nombre: "Código fuente Backend",
      href: "https://github.com/rolycore/sst-api-reportes-fullstack-demo/tree/backend",
    },
  ];
  const botonesCotizador=[
   {nombre: "Codigo fuente",
   href: "https://github.com/rolycore/sst-react-cotizador-seguro",} ,
   {nombre: "Demo",
    href:"https://sst-cotizadordeseguroautomovil.netlify.app/",
    color:"success",}
  ];
  const botonesAppcitas=[
    {nombre: "Codigo fuente",
    href: "https://github.com/rolycore/sst-citas",} ,
    {nombre: "Demo",
     href:"https://sst-administradorcitas.netlify.app/",
     color:"success",}
   ];
   const botonesCripto=[
    {nombre: "Codigo fuente",
    href: "https://github.com/rolycore/sst-criptomonedas",} ,
    {nombre: "Demo",
     href:"https://sst-cripto.netlify.app/",
     color:"success",}
   ];
   const botonesEcommerce=[
    {nombre: "Codigo fuente",
    href: "https://github.com/rolycore/ecommerce-basico",} ,
    {nombre: "Demo",
     href:"https://sst-ecommerce.netlify.app/",
     color:"success",}
   ];
   const botonesPresupuesto=[
    {nombre: "Codigo fuente",
    href: "https://github.com/rolycore/sst-presupuesto",} ,
    {nombre: "Demo",
     href:"https://sst-presupuesto.netlify.app/",
     color:"success",}
   ];


  const botonesSistemaVentas=[
    {nombre: "Código fuente",
    href: "https://github.com/rolycore/sst-punto-venta",
  }
  ]


  const lenguajesCitaApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "NodeJS", color: "success", variant: "outlined" },
  ];
  const lenguajesCriptoApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "NodeJS", color: "success", variant: "outlined" },
  ];
  const lenguajesPresupuestoApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "NodeJS", color: "success", variant: "outlined" },
  ];
  const lenguajesCotizadorApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "NodeJS", color: "success", variant: "outlined" },
  ];
  const lenguajesEcommerceApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "Material UI", color: "info", variant: "outlined" },
    { texto: "NodeJS", color: "success", variant: "outlined" },
  ];
  const lenguajesShalomApp=[
    {texto: "Java", color: "primary", variant: "outlined"},
    { texto: "Angular", color: "primary", variant: "outlined" },
    { texto: "Spring boot", color: "info", variant: "outlined" },
    { texto: "Boostrap", color: "success", variant: "outlined" },
    { texto: "MySQL", color: "warning", variant: "outlined" },
  ];
  const lenguajesSistemaVentaApp=[
    {texto: "Java", color: "primary", variant: "outlined"},
    { texto: "MySQL", color: "warning", variant: "outlined" },
  ];

  const detallesCitasApp = [
    { texto: "☑️ Ventana de registro de citas." },
    { texto: "☑️ Funcionalidad para agendar citas." },
    { texto: "☑️ Resúmenes citas agendadas." },
  ];
  const detallesCriptoApp = [
    { texto: "☑️ Ventana de interaccion de monedas" },
    { texto: "☑️ Seleccion de monedas" },
    { texto: "☑️ Seleccion de critopmoneda." },
    { texto: "☑️ Boton para la conversion de monedas." },
    { texto: "☑️ Resultado de la conversion de monedas." },
  ];
  const detallesPresupuestoApp = [
    { texto: "☑️ Ventana iteraccion con la aplicacion." },
    { texto: "☑️ Casilla de ingreso presupuesto inicial." },
    { texto: "☑️ Ingreso de gastos." },
    { texto: "☑️ Resúmenes de gastos contra presupuesto." },
    { texto: "☑️ Semaforo si el presupuesto esta agotandose." },
    { texto: "☑️ Calculo del presupuesto en tiempo real." },
  ];
  const detallesCotizadorApp = [
    { texto: "☑️ Ventana de iteraccion para cotizar seguros para el automovil." },
    { texto: "☑️ Seleccionador de Marca del Automovil (Europeo, Americano, Asiatico)." },
    { texto: "☑️ Seleccionador de Año del automovil." },
    { texto: "☑️ Escojer que tipo de plan (Si el Basico o el Completo)." },
    { texto: "☑️ Boton para calcular el seguro" },
    { texto: "☑️ El calculo en tiempo real del seguro segun los valores seleccionado." },
  ];
  const detallesEcommerceApp = [
    { texto: "☑️ Ventana principal con lista de los productos." },
    { texto: "☑️ Productos disponibles." },
    { texto: "☑️ Boton para comprar." },
    { texto: "☑️ Ver imagen del producto." },
    { texto: "☑️ Calcular cuantos productos llevas en el carrito." },
    { texto: "☑️ Calcular cuantos es el costo total de productos que llevas en el carrito." },
  ];
  const detallesreporteCrudApp = [
    { texto: "☑️ Ventana de iniciar sesión." },
    { texto: "☑️ Ventana de Clientes, Equipos, Reportes Tecnicos y Mantenimiento." },
    { texto: "☑️ Roles de usuario." },
    { texto: "☑️ Barra de Menú." },
    { texto: "☑️ Seguridad, Por token y roles." },
    { texto: "☑️ Añadir, modificar usuarios y permisos." },
    { texto: "☑️ Emisión de reportes en formato PDF totalmente personalizado" },
  ];
  const detallesSistemaVentaApp = [
    { texto: "☑️ Ventana de iniciar sesión." },
    { texto: "☑️ Roles de usuario." },
    { texto: "☑️ Menú lateral." },
    { texto: "☑️ Registro de ventas" },
    { texto: "☑️ Registro de clientes" },
    { texto: "☑️ Registro de proveedores" },
    { texto: "☑️ Registro de productos" },
    { texto: "☑️ Gestion de inventarios" },
    { texto: "☑️ Gestion de Facturación" },
    { texto: "☑️ Añadir y modificar usuarios." },
    { texto: "☑️ Emisión de reportes en formato PDF y XLSX." },
  ];


  return (
    <div id="projects">
      <Container sx={{ py: 4 }} maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {titulo}
        </Typography>
        <CustomAccordion
          titulo="Mi Repositorio"
          descripcion="Aqui encontraras todos mis proyectos"
          imagenes={mirepositorioimg}
          botones={migithub}
        />
        <CustomAccordion
          titulo="Shalom Lab App"
          descripcion="Aplicación para la automatizacion para reportes"
          lenguajes={lenguajesShalomApp}
          detalles={detallesreporteCrudApp}
          imagenes={appreporteimg}
          tituloVideo="Vista previa en vídeo"
          video={shalaomlab}
          botones={botonesreporteCrudApp}
        />
        <CustomAccordion
          titulo="Sistema para el control del presupuesto"
          descripcion="Aplicación calcular el presupuesto segun los gastos."
          lenguajes={lenguajesPresupuestoApp}
          detalles={detallesPresupuestoApp}
          botones={botonesPresupuesto}
          imagenes={presupuestoimg}
          tituloVideo="Vista previa en vídeo"
          video={videopresupuesto}
          
        />
        <CustomAccordion
          titulo="Sistema-de-Ventas"
          descripcion="Sistema de Venta, facturación e inventario."
          lenguajes={lenguajesSistemaVentaApp}
          detalles={detallesSistemaVentaApp}
          botones={botonesSistemaVentas}
          imagenes={sistemaVentasImagenes}
          tituloVideo="Vista previa en vídeo"
          video={videosistemaventajava}
          
        />
          <CustomAccordion
          titulo="Administrador de Citas"
          descripcion="Agendar citas para pacientes."
          lenguajes={lenguajesCitaApp}
          detalles={detallesCitasApp}
          botones={botonesAppcitas}
          imagenes={appcitasimg}
          tituloVideo="Vista previa en vídeo"
          video={videoappcitas}
          
        />
        <CustomAccordion
          titulo="Conversor Criptomonedas"
          descripcion="Conversor de Monedas a Criptomonedas."
          lenguajes={lenguajesCriptoApp}
          detalles={detallesCriptoApp}
          botones={botonesCripto}
          imagenes={criptoimg}
          tituloVideo="Vista previa en vídeo"
          video={videocriptomonedas}
          
        />
        <CustomAccordion
          titulo="Cotizador de Seguro para Automovil"
          descripcion="Calcula el seguro para un automovil segun de los factores como Año, Marca, y Plan de seguro."
          lenguajes={lenguajesCotizadorApp}
          detalles={detallesCotizadorApp}
          botones={botonesCotizador}
          imagenes={cotizadorimg}
          tituloVideo="Vista previa en vídeo"
          video={videocotizadorseguro}
          
        />
        <CustomAccordion
          titulo="Ecommerce (Tienda virtual)"
          descripcion="Venta de productos en linea, tu tienda virtual para tu negocio."
          lenguajes={lenguajesEcommerceApp}
          detalles={detallesEcommerceApp}
          botones={botonesEcommerce}
          imagenes={ecommerceimg}
          tituloVideo="Vista previa en vídeo"
          video={videoecommerce}
          
        />
      </Container>
    </div>
  );
}
