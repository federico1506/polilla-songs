// React
import React from "react";
import { useSpring, animated } from "@react-spring/web";

// Components
import { Modal, Box, IconButton } from "@mui/material";

// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

// Utils
import { lenis } from "../../../types/lenis";

interface ImageModalProps {
  images: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ModalImage: React.FC<{ src: string }> = ({ src }) => {
  const spring = useSpring({
    from: { opacity: 0, transform: "scale(0.92)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 180, friction: 22 },
    reset: true,
  });

  return (
    <animated.img
      src={src}
      alt="preview"
      style={{
        ...spring,
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: "12px",
        display: "block",
      }}
    />
  );
};

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  selectedIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = selectedIndex !== null;

  const handlePrev = () => {
    if (selectedIndex === null) return;
    onNavigate(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    onNavigate(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

React.useEffect(() => {
  if (!isOpen) return;

  lenis.stop();

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
    lenis.start();
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isOpen, lenis]);

  React.useEffect(() => {
    document.body.classList.toggle("modal-open", !!isOpen);
  }, [isOpen]);

  return (
    <Modal open={isOpen} onClose={onClose} >
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.88)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          outline: "none",
          px: { xs: 1, md: 4 },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 10,
            backgroundColor: "rgba(255,255,255,0.12)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            width: { xs: "100%", md: "70vw" },
            maxWidth: "900px",
            maxHeight: { xs: "72vh", md: "80vh" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selectedIndex !== null && (
            <ModalImage key={selectedIndex} src={images[selectedIndex]} />
          )}
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 3,
            mt: 2,
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.12)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.85rem",
              letterSpacing: "2px",
              minWidth: "50px",
              textAlign: "center",
            }}
          >
            {selectedIndex !== null
              ? `${selectedIndex + 1} / ${images.length}`
              : ""}
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.12)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageModal;