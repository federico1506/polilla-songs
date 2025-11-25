// React
import React from "react";

// Components
import Masonry from "@mui/lab/Masonry";
import { Modal, Box } from "@mui/material";

// Spring
import { useSpring, animated } from "@react-spring/web";

// Styles
import "./styles/fotos.css";

const images = [
  "https://dummyimage.com/400x600/aaa/fff",
  "https://dummyimage.com/300x300/bbb/fff",
  "https://dummyimage.com/500x400/ccc/fff",
  "https://dummyimage.com/350x500/999/fff",
  "https://dummyimage.com/450x350/666/fff",
  "https://dummyimage.com/600x450/444/fff",
];

const AnimatedImage: React.FC<{ src: string; onClick: () => void }> = ({
  src,
  onClick,
}) => {
  const [hovered, setHovered] = React.useState(false);

  const appear = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 18 },
  });

  const hoverSpring = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    config: { tension: 220, friction: 18 },
  });

  return (
    <animated.div style={appear}>
      <animated.img
        src={src}
        alt="img"
        onClick={onClick}
        style={{
          ...hoverSpring,
          width: "100%",
          borderRadius: "12px",
          transition: "box-shadow 0.3s ease",
          boxShadow: hovered
            ? "0 8px 20px rgba(0,0,0,0.25)"
            : "0 4px 10px rgba(0,0,0,0.15)",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </animated.div>
  );
};

const Fotos: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedImg(src);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="fotos-container">
      <div className="fotos-titles-container">
        <h1 className="fotos-title">POLILLA OFFICIAL</h1>
        <h3 className="fotos-subtitle">
          Recitales, momentos <span>especiales</span>
        </h3>
      </div>

      <Masonry columns={{ xs: 2, md: 3 }} spacing={2}>
        {images.map((img, i) => (
          <div key={i}>
            <AnimatedImage src={img} onClick={() => handleOpen(img)} />
          </div>
        ))}
      </Masonry>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
          }}
        >
          {selectedImg && (
            <img
              src={selectedImg}
              alt="preview"
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
                borderRadius: "10px",
              }}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Fotos;
