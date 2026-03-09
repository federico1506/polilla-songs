// React
import React from "react";

// Components
import Masonry from "@mui/lab/Masonry";
import ImageModal from "./components/ImageModal";
import RandomStickerPlace from "../../components/RandomStickerPlace/RandomStickerPlace";

// Icons
import sticker4 from "../../assets/stickers/Polilla_Stickers4.png";

// Spring
import { useSpring, animated, useTrail } from "@react-spring/web";

// Styles
import "./styles/fotos.css";
import { Box } from "@mui/material";

const images = [
  new URL("../../assets/fotos/foto1.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto2.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto3.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto4.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto5.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto6.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto7.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto8.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto9.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto10.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto11.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto12.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto13.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto14.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto15.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto16.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto17.webp", import.meta.url).href,
  new URL("../../assets/fotos/foto18.webp", import.meta.url).href,
];

const AnimatedImage: React.FC<{
  src: string;
  style: object;
  onClick: () => void;
}> = ({ src, style, onClick }) => {
  const [hovered, setHovered] = React.useState(false);

  const hoverSpring = useSpring({
    transform: hovered ? "scale(1.03)" : "scale(1)",
    config: { tension: 220, friction: 18 },
  });

  return (
    <animated.div style={style}>
      <animated.img
        src={src}
        alt="img"
        loading="lazy"
        decoding="async"
        onClick={onClick}
        style={{
          ...hoverSpring,
          width: "100%",
          display: "block",
          borderRadius: "12px",
          boxShadow: hovered
            ? "0 8px 20px rgba(0,0,0,0.25)"
            : "0 4px 10px rgba(0,0,0,0.15)",
          transition: "box-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </animated.div>
  );
};

const Fotos: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 80, friction: 20 },
  });

  const trail = useTrail(images.length, {
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 160, friction: 22 },
    delay: 200,
  });

  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  return (
    <animated.div style={fadeIn} className="fotos-container">
      <div className="fotos-titles-container">
        <h1 className="fotos-title">Memorias del Escenario</h1>
        <Box display={'flex'} alignItems="center" gap={1}>
        <h3 className="fotos-subtitle">
          Recitales, momentos <span>especiales</span>
        </h3>
        <RandomStickerPlace stickerId={4} image={sticker4} size={60} />
        </Box>

      </div>

      <Masonry columns={{ xs: 2, md: 3 }} spacing={2}>
        {trail.map((style, i) => (
          <div key={i}>
            <AnimatedImage
              src={images[i]}
              style={style}
              onClick={() => setSelectedIndex(i)}
            />
          </div>
        ))}
      </Masonry>

      <ImageModal
        images={images}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={setSelectedIndex}
      />
    </animated.div>
  );
};

export default Fotos;
