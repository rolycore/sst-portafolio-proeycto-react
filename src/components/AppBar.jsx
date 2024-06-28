import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";  // Importa Link desde react-router-dom
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";  // Asegúrate de importar MenuItem

const ResponsiveAppBar = (props) => {
  const {
    tituloHome,
    tituloSobreMi,
    tituloNosotros,
    tituloServicios,
    tituloProductos,
    tituloHabilidades,
    tituloProyectos,
    tituloContacto,
    tituloNombre,
  } = props;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handleCloseNavMenu}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                {tituloHome}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/aboutme">
                {tituloSobreMi}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/about">
                {tituloNosotros}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/skills">
                {tituloHabilidades}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/projects">
                {tituloProyectos}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/services">
                {tituloServicios}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/products">
                {tituloProductos}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/contacts">
                {tituloContacto}
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {tituloNombre}
          </Typography>
          <Box
            style={{ justifyContent: "center" }}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button component={Link} to="/">{tituloHome}</Button>
            <Button component={Link} to="/about">{tituloNosotros}</Button>
            <Button component={Link} to="/aboutme">{tituloSobreMi}</Button>
            <Button component={Link} to="/skills">{tituloHabilidades}</Button>
            <Button component={Link} to="/projects">{tituloProyectos}</Button>
            <Button component={Link} to="/services">{tituloServicios}</Button>
            <Button component={Link} to="/products">{tituloProductos}</Button>
            <Button component={Link} to="/contacts">{tituloContacto}</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;

