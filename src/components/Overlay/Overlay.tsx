// React
import React from "react";

// Routing
import overlayImage from "../../assets/PNG POLILLA - LOGO 01.png";
import "./styles/overlay.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {
  mailRecipient,
  mailSubject,
  mensajeDefault,
} from "../../constants/constants";
import { Drawer, IconButton } from "@mui/material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { FaEnvelope, FaInstagram, FaCalendarAlt, FaBars } from "react-icons/fa";
import ModalFollow from "../ModalFollow/ModalFollow";

const Overlay = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    mailRecipient
  )}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(
    mensajeDefault
  )}`;

  const handleOnClick = () => {
    window.open(gmailLink, "_blank");
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        paddingY: 2,
      }}
      role="presentation"
      className="drawer"
    >
      <div className="overlay-button">
        <Link to="/">
          <img className="overlay-image" src={overlayImage} alt="home" />
        </Link>
      </div>
      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleOnClick}>
            <ListItemIcon>
              <FaEnvelope />
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => handleOnClickSeguinos()}>
            <ListItemIcon>
              <FaInstagram />
            </ListItemIcon>
            <ListItemText primary="Seguinos" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/recitales" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <FaCalendarAlt />
            </ListItemIcon>
            <ListItemText primary="Recitales" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleOnClickSeguinos = () => {
    setOpenModal(true);
    setOpenDrawer(false);
  };

  return (
    <div className="parent">
      <div className="overlay">
        <div className="overlay-button">
          <Link to="/">
            <img className="overlay-image" src={overlayImage} alt="home" />
          </Link>
        </div>
        <div className="overlay-button">
          <Button
            className="button-contact"
            variant="primary"
            onClick={handleOnClick}
          >
            Contacto
          </Button>

          <IconButton onClick={() => setOpenDrawer(true)}>
            <FaBars size={26} color="white" className="button-menu" />
          </IconButton>
        </div>
      </div>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        {DrawerList}
      </Drawer>
      <ModalFollow open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Overlay;
