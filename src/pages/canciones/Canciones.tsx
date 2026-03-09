// React
import { useEffect, useState } from "react";

// Spring
import { animated, useSpring } from "@react-spring/web";

// Components
import RandomStickerPlace from "../../components/RandomStickerPlace/RandomStickerPlace";

// Utils
import { allSongs, type Song } from "../../data/songs";
import { lenis } from "../../types/lenis";
import "./styles/canciones.css";
import { sectionWords } from "../../constants/constants";

// Icons
import polillaLogo from "../../assets/PNG POLILLA - LOGO 01.png";
import sticker3 from "../../assets/stickers/Polilla_Stickers3.png";

// Styles
import "./styles/canciones.css";

const Canciones = () => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const fadeBlur = useSpring({
    from: { opacity: 0, filter: "blur(10px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    config: { tension: 100, friction: 20 },
  });

  const openSongModal = (song: Song) => {
    lenis.stop();
    setSelectedSong(song);
  };

  const closeSongModal = () => {
    lenis.start();
    setSelectedSong(null);
  };

  const getSongPreview = (lyrics: string[]) => {
    const firstLines = lyrics.slice(0, 6).filter((line) => line.trim() !== "");
    return formatLyrics(firstLines);
  };

  const formatLyrics = (lyrics: string[]) => {
    return lyrics.map((line, index) => {
      if (line.trim() === "") return <br key={index} />;
      const upperLine = line.trim().toUpperCase();
      const isSection = sectionWords.some(
        (word) =>
          upperLine === word ||
          (/^([A-ZÁÉÍÓÚÜÑ]+) [0-9]+$/.test(upperLine) &&
            upperLine.startsWith(word + " ")) ||
          upperLine === word + " FINAL",
      );
      return (
        <div
          key={index}
          className={isSection ? "lyrics-section" : "lyrics-line"}
        >
          {line}
        </div>
      );
    });
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", !!selectedSong);
  }, [selectedSong]);

  return (
    <div>
      <animated.div style={fadeBlur} className="songs-section">
        <div className="container">
          <RandomStickerPlace stickerId={3} position="left" image={sticker3}  />
          <div className="canciones-container-title">
            <h2 className="canciones-title">Canciones</h2>
            <img
              src={polillaLogo}
              alt="Polilla"
              className="canciones-image-polilla"
            />
          </div>
          <div className="songs-grid">
            {allSongs.map((song, index) => (
              <div
                key={song.title}
                className="song-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openSongModal(song)}
              >
                <h3 className="song-title">{song.title}</h3>
                <div className="song-preview">
                  {getSongPreview(song.lyrics)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </animated.div>

      {selectedSong && (
        <div className="modal-overlay" onClick={closeSongModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3 className="modal-title-canciones">{selectedSong.title}</h3>
              <button className="close-button" onClick={closeSongModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="lyrics-content">
                {formatLyrics(selectedSong.lyrics)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Canciones;
