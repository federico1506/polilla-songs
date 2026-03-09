import React, { useState, useEffect } from "react";
import ModalEaster from "../CountDown/components/ModalEaster";
import { createPortal } from "react-dom";

export type StickerPosition =
  | "center"
  | "right"
  | "left"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type StickerId = 1 | 2 | 3 | 4 | 5;

interface RandomStickerPlaceProps {
  /** Qué sticker mostrar (1–5) */
  stickerId: StickerId;
  /** Imagen del sticker (import o URL) */
  image: string;
  /**
   * Posición fija en pantalla (fixed).
   * Si no se pasa, el sticker se comporta como elemento inline
   * y podés posicionarlo con CSS / flex / grid desde el padre.
   */
  position?: StickerPosition;
  /** Tamaño en px (default 80) */
  size?: number;
  /** Offset desde el borde cuando se usa `position` (default 24px) */
  offset?: number;
  /** Estilos extra que se mezclan sobre los del botón */
  style?: React.CSSProperties;
  /** Clase extra para el botón */
  className?: string;
}

// ─── Constantes ───────────────────────────────────────────────────────────────

const STORAGE_KEY = "easter_egg_stickers_clicked";
const TOTAL_STICKERS = 5;

function getClickedStickers(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as number[]);
  } catch {
    return new Set();
  }
}

function saveClickedStickers(set: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

// ─── Posicionamiento ──────────────────────────────────────────────────────────

function getPositionStyle(
  position: StickerPosition,
  offset: number
): React.CSSProperties {
  const base: React.CSSProperties = {
    position: "fixed",
    zIndex: 9999,
  };

  const map: Record<StickerPosition, React.CSSProperties> = {
    center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    top: { top: offset, left: "50%", transform: "translateX(-50%)" },
    bottom: { bottom: offset, left: "50%", transform: "translateX(-50%)" },
    left: { left: offset, top: "50%", transform: "translateY(-50%)" },
    right: { right: offset, top: "50%", transform: "translateY(-50%)" },
    "top-left": { top: offset, left: offset },
    "top-right": { top: offset, right: offset },
    "bottom-left": { bottom: offset, left: offset },
    "bottom-right": { bottom: offset, right: offset },
  };

  return { ...base, ...map[position] };
}

// ─── Componente ───────────────────────────────────────────────────────────────

const RandomStickerPlace: React.FC<RandomStickerPlaceProps> = ({
  stickerId,
  position,
  image,
  size = 80,
  offset = 24,
  style: customStyle,
  className: customClassName,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [wiggle, setWiggle] = useState<boolean>(false);

  useEffect(() => {
    const saved = getClickedStickers();
    if (saved.has(stickerId)) setClicked(true);
  }, [stickerId]);

  const handleClick = () => {
    const saved = getClickedStickers();

    if (!saved.has(stickerId)) {
      saved.add(stickerId);
      saveClickedStickers(saved);
      setClicked(true);
      setWiggle(true);
      setTimeout(() => setWiggle(false), 600);
    }

    if (saved.size >= TOTAL_STICKERS) setModalOpen(true);
  };

  // Si se pasa `position` → fixed en pantalla; si no → inline (se posiciona desde el padre)
  const positionStyle: React.CSSProperties = position
    ? getPositionStyle(position, offset)
    : { position: "relative" };

  return (
    <>
      <button
        onClick={handleClick}
        aria-label={`Easter egg sticker ${stickerId}`}
        style={{
          ...positionStyle,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          flexShrink: 0,
          transition: "filter 0.3s ease, transform 0.3s ease",
          filter: clicked
            ? "drop-shadow(0 0 10px var(--color-primary, #a855f7)) saturate(1.5)"
            : "none",
          transform: wiggle ? "scale(1.25) rotate(-10deg)" : "scale(1)",
          outline: "none",
          // estilos custom al final para pisar lo que se necesite
          ...customStyle,
        }}
        className={`sticker-easter-egg${clicked ? " sticker-clicked" : ""}${wiggle ? " sticker-wiggle" : ""}${customClassName ? ` ${customClassName}` : ""}`}
      >
        <img
          src={image}
          alt={`Sticker ${stickerId}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            // Tint de color cuando está clickeado
            filter: clicked
              ? "hue-rotate(20deg) brightness(1.1)"
              : "none",
            transition: "filter 0.3s ease",
          }}
          draggable={false}
        />
      </button>

      {modalOpen && createPortal(
        <ModalEaster open={modalOpen} onClose={() => setModalOpen(false)} />,
        document.body
      )}

      {/* Estilos inline para wiggle y hover */}
      <style>{`
        @keyframes sticker-wiggle-anim {
          0%   { transform: scale(1.25) rotate(-10deg); }
          25%  { transform: scale(1.3)  rotate(10deg);  }
          50%  { transform: scale(1.2)  rotate(-6deg);  }
          75%  { transform: scale(1.25) rotate(6deg);   }
          100% { transform: scale(1)    rotate(0deg);   }
        }

        .sticker-easter-egg:hover {
          transform: scale(1.1) rotate(3deg) !important;
        }

        .sticker-wiggle {
          animation: sticker-wiggle-anim 0.6s ease forwards !important;
        }

        .sticker-clicked:hover {
          filter: drop-shadow(0 0 16px var(--color-primary, #a855f7)) saturate(2) !important;
        }
      `}</style>
    </>
  );
};

export default RandomStickerPlace;