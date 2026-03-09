// React
import React from "react";

// Routing
import { Link } from "react-router-dom";

// Components
import { Box, Tooltip } from "@mui/material";
import Button from "../Button/Button";
import RandomStickerPlace from "../../components/RandomStickerPlace/RandomStickerPlace";

// Icons
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import sticker5 from "../../assets/stickers/Polilla_Stickers5.png";

// Utils
import { INSTAGRAM_URL, TIKTOK_URL } from "../../constants/constants";
import { lenis } from "../../types/lenis";

// Styles
import "./styles/modalfollow.css";

interface ModalFollowProps {
  open: boolean;
  onClose: () => void;
}

const ModalFollow: React.FC<ModalFollowProps> = ({ open, onClose }) => {

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

        <Box display={'flex'} justifyContent="center" alignItems="center" position="relative" flexDirection={'row'} gap={2}>
            <h2 className="modal-title">¡Seguinos</h2>
            <RandomStickerPlace stickerId={5} image={sticker5}/>
            <h2 className="modal-title">!</h2>
        </Box>

        <p className="modal-text">
          Encontranos en nuestras redes y plataformas 🎵
        </p>

        <div className="modal-icons">
          <Tooltip title="Instagram" placement="top">
            <Link
              to={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="icon instagram"
            >
              <FaInstagram />
            </Link>
          </Tooltip>

          <Tooltip title="TikTok" placement="top">
            <Link
              to={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="icon tiktok"
            >
              <FaTiktok />
            </Link>
          </Tooltip>

          <Tooltip title="Próximamente" placement="top">
            <div className="icon youtube disabled">
              <FaYoutube />
            </div>
          </Tooltip>

          <Tooltip title="Próximamente" placement="top">
            <div className="icon spotify disabled">
              <FaSpotify />
            </div>
          </Tooltip>
        </div>

        <Button onClick={onClose} variant="primary" className="modal-close">
          Cerrar
        </Button>
      </div>
    </div>
  );
};

export default ModalFollow;