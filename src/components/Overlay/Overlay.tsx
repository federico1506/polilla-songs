import React from "react";
import overlayImage from "../../assets/PNG POLILLA - LOGO 01.png";
import "./styles/overlay.css";
import Button from "../Button/Button";


const Overlay = () => {
  return (
<div className="parent">
  <div className="overlay">
    <div>
      <img className="overlay-image" src={overlayImage} alt="home" />
    </div>
    <div>
      <Button variant="primary">Contacto</Button>
    </div>
  </div>
</div>

  );
};

export default Overlay;
