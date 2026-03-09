import React from "react";
import Button from "../../Button/Button";
import "./../styles/modalEaster.css";

// Utils
import { lenis } from "../../../types/lenis";

interface ModalEasterProps {
  open: boolean;
  onClose: () => void;
}

const ModalEaster: React.FC<ModalEasterProps> = ({ open, onClose }) => {

  React.useEffect(() => {
    if (!open) return;

    lenis.stop();
    document.body.classList.add("modal-open");

    return () => {
      lenis.start();
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  if (!open) return null;

  return (

     <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      <h2 className="modal-easter-title">
          ¡Me encontraste!
      </h2>

      <p className="modal-easter-text">
        Manda una captura de pantalla donde nos muestres que nos encontraste junto con la palabra "estrella perdida" a nuestro{" "}
        <a
          href="https://www.instagram.com/polillaofficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="modal-easter-instagram"
        >
          Instagram
        </a>
        {" "} y participa por una entrada gratis
      </p>

      <div className="modal-easter-eyes">
        👀
      </div>

      <Button
        onClick={onClose}
        variant="primary"
        className="modal-easter-close"
      >
        Cerrar
      </Button>
  </div>
      </div>
  );
};

export default ModalEaster;