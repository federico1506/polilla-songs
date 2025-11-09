// React
import React from "react";

// Routing
import overlayImage from "../../assets/PNG POLILLA - LOGO 01.png";
import "./styles/overlay.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Overlay = () => {
  return (
    <div className="parent">
      <div className="overlay">
        <div>
          <Link to="/">
            <img className="overlay-image" src={overlayImage} alt="home" />
          </Link>
        </div>
        <div>
          <Button variant="primary">Contacto</Button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
