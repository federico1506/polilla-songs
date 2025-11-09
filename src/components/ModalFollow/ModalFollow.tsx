import React from "react";
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import {
  INSTAGRAM_URL,
  SPOTIFY_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "../../constants/constants";
import "./styles/modalfollow.css";

// Routing
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface ModalFollowProps {
  open: boolean;
  onClose: () => void;
}

const ModalFollow: React.FC<ModalFollowProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">¡Seguinos!</h2>
        <p className="modal-text">
          Encontranos en nuestras redes y plataformas 🎵
        </p>

        <div className="modal-icons">
          <Link
            to={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
            title="Instagram"
          >
            <FaInstagram />
          </Link>
          <Link
            to={SPOTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon spotify"
            title="Próximamente"
          >
            <FaSpotify />
          </Link>
          <Link
            to={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon tiktok"
            title="TikTok"
          >
            <FaTiktok />
          </Link>
          <Link
            to={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="icon youtube"
            title="Próximamente"
          >
            <FaYoutube />
          </Link>
        </div>

        <Button onClick={onClose} variant= 'primary' className="modal-close">
          Cerrar
        </Button>
      </div>
    </div>
  );
};

export default ModalFollow;
