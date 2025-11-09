import { useState } from 'react'
import { allSongs, type Song } from '../../data/songs'
import logoPolilla from '../../assets/PNG POLILLA - LOGO 01.png'
import '../../styles/App.css'
import './styles/canciones.css'
import { sectionWords } from '../../constants/constants'


const Canciones = () => {
 const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const openSongModal = (song: Song) => {
    setSelectedSong(song);
  };

  const closeSongModal = () => {
    setSelectedSong(null);
  };

  const getSongPreview = (lyrics: string[]) => {
    const firstLines = lyrics.slice(0, 6).filter((line) => line.trim() !== "");
    return firstLines.join("\n");
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
          upperLine === word + " FINAL"
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



  return (
        <div className="App">
          <section className="songs-section">
            <div className="container">
              <h2 className="section-title">Canciones</h2>
              <div className="songs-grid">
                {allSongs.map((song, index) => (
                  <div
                    key={song.title}
                    className="song-card hover-glow fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => openSongModal(song)}
                  >
                    <img
                      src={logoPolilla}
                      alt="Logo Polilla"
                      className="song-card-logo"
                      style={{
                        width: "38px",
                        height: "38px",
                        position: "absolute",
                        top: "18px",
                        right: "18px",
                        opacity: 0.7,
                        pointerEvents: "none",
                      }}
                    />
                    <h3 className="song-title">{song.title}</h3>
                    <div className="song-preview">
                      {getSongPreview(song.lyrics)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Modal de Letra */}
          {selectedSong && (
            <div className="modal-overlay" onClick={closeSongModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3 className="modal-title">{selectedSong.title}</h3>
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
}

export default Canciones
