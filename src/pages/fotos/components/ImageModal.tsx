import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Modal, Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { lenis } from "../../../types/lenis";

interface ImageModalProps {
  images: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

// Precarga next y prev en background
const useImagePreloader = (images: string[], currentIndex: number | null) => {
  React.useEffect(() => {
    if (currentIndex === null) return;
    const toPreload = [
      images[(currentIndex + 1) % images.length],
      images[(currentIndex - 1 + images.length) % images.length],
    ];
    toPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [currentIndex, images]);
};

const ModalImage: React.FC<{ src: string }> = ({ src }) => {
  const [loaded, setLoaded] = React.useState(false);

  const spring = useSpring({
    from: { opacity: 0, transform: "scale(0.92)" },
    to: { opacity: loaded ? 1 : 0, transform: loaded ? "scale(1)" : "scale(0.92)" },
    config: { tension: 180, friction: 22 },
    reset: true,
  });

  const skeletonSpring = useSpring({
    opacity: loaded ? 0 : 1,
    config: { tension: 180, friction: 22 },
  });

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Skeleton del modal */}
      <animated.div
        style={{
          ...skeletonSpring,
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          background: "linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.4s infinite linear",
          pointerEvents: "none",
        }}
      />
      <animated.img
        src={src}
        alt="preview"
        onLoad={() => setLoaded(true)}
        style={{
          ...spring,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "12px",
          display: "block",
        }}
      />
    </Box>
  );
};

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  selectedIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = selectedIndex !== null;

  useImagePreloader(images, selectedIndex);

  const handlePrev = React.useCallback(() => {
    if (selectedIndex === null) return;
    onNavigate(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  }, [images.length, onNavigate, selectedIndex]);

  const handleNext = React.useCallback(() => {
    if (selectedIndex === null) return;
    onNavigate(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  }, [images.length, onNavigate, selectedIndex]);

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
  }, [isOpen, handlePrev, handleNext, onClose]);

  React.useEffect(() => {
    document.body.classList.toggle("modal-open", !!isOpen);
  }, [isOpen]);

  return (
    <Modal open={isOpen} onClose={onClose}>
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
            {selectedIndex !== null ? `${selectedIndex + 1} / ${images.length}` : ""}
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