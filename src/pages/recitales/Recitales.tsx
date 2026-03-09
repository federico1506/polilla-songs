// React
import { useState } from "react";

// Styles
import "./styles/recitales.css";

// Components
import Button from "../../components/Button/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IconButton, Tooltip } from "@mui/material";
import RandomStickerPlace from "../../components/RandomStickerPlace/RandomStickerPlace";

// Constants
import { RECITALES } from "./constants/constants";

// Icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import sticker1 from "../../assets/stickers/Polilla_Stickers1.png";

// Spring
import { animated, useSpring } from "@react-spring/web";

// Utils
import { ALIAS_MERCADO_PAGO, INSTAGRAM_URL } from "../../constants/constants";


const Recitales = () => {
  const [copied, setCopied] = useState(false);
  const fadeBlur = useSpring({
    from: { opacity: 0, filter: "blur(10px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    config: { tension: 100, friction: 20 },
  });

  const copyAndOpen = (link: string) => {
    window.open(link, "_blank");
  };

  const handleCopyAlias = () => {
    navigator.clipboard
      .writeText(ALIAS_MERCADO_PAGO)
      .catch((err) => console.error("no se pudo copiar", err));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
  }


  return (
    <animated.div style={fadeBlur} className="recitales-container">
      <h2 className="recitales-title">Próximos Recitales</h2>
      <Accordion className="recitales-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="recitales-expand-icon" />}
          sx={{
            '& .MuiAccordionSummary-content': { justifyContent: 'center', textAlign: 'center' },
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              alignItems: 'center',
              '& .MuiAccordionSummary-expandIconWrapper': {
                transform: 'none !important',
                marginBottom: '0.25rem',
              }
            }
          }}
        >
          <p className="recitales-info-title">
            ¿Cómo comprar tu entrada?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="recitales-info">
            <p className="recitales-info-text">
              Para comprar tu entrada del recital, hace click en el siguiente botón
              para copiar el Alias (polillabanda.mp), a nombre de Juan Pablo Garraza,
              enviar el monto estimado de la última fecha disponible y mandar comprobante al{" "}
              <a
                className="recitales-instagram-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>.
            </p>

            <Tooltip title={copied ? "¡Copiado!" : null} arrow open={copied}>
              <IconButton
                className="recital-info-button"
                onClick={handleCopyAlias}
              >
                <ContentCopyIcon sx={{ height: 20 }} />
              </IconButton>
            </Tooltip>
        </div>
        </AccordionDetails>
      </Accordion>
      <div className="recitales-list">
        {RECITALES.map((recital) => (
          <div key={recital.id} className="recital-item">
            <div className="recital-info">
              <div className="recital-subtitles">
                <h3 className="recital-lugar">{recital.lugar}</h3>
                <p className="recital-direccion">{recital.direccion}</p>
              </div>

              <p className="recital-fecha">
                📅{" "}
                {new Date(recital.fecha).toLocaleDateString("es-AR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="recital-precios">
                {recital.precio_anticipada && (
                  <p className="recital-precio">
                    <span className="recital-precio-label">Anticipada:</span>
                    <span className="recital-precio-valor">
                      {recital.precio_anticipada}
                    </span>
                  </p>
                )}

                {recital.precio_puerta && (
                  <p className="recital-precio">
                    <span className="recital-precio-label">Puerta:</span>
                    <span className="recital-precio-valor">
                      {recital.precio_puerta}
                    </span>
                  </p>
                )}
              </div>
              {recital.descripcion && (
                <p className="recital-descripcion">{recital.descripcion}</p>
              )}
            </div>
            {recital.tickets_button && (
              <div>
                <Button
                  variant="secondary"
                  className="recital-tickets"
                  onClick={() => copyAndOpen(recital.link_pago)}
                >
                  Tickets
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
       <RandomStickerPlace stickerId={1} position="bottom-right"     image={sticker1} />
    </animated.div>
  );
};

export default Recitales
