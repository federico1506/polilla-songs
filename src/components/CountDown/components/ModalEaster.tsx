import React from "react";
import Button from "../../Button/Button";
import "./../styles/modalEaster.css";

interface ModalEasterProps {
  open: boolean;
  onClose: () => void;
}

const ModalEaster: React.FC<ModalEasterProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal-easter-overlay">
      <div
        className="modal-easter-container"
        onClick={(e) => e.stopPropagation()}
      >
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